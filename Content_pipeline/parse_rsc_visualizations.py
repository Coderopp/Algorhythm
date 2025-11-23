#!/usr/bin/env python3
"""
Parse Next.js RSC (React Server Components) payload to extract visualization data
and transform it to AlgoRhythm format
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional

def parse_rsc_chunk(chunk_content: str) -> Dict[str, Any]:
    """
    Parse a single RSC chunk to extract structured data
    
    RSC format uses special markers:
    - $L prefix: Reference to another chunk
    - ["$", component, key, props]: Component definition
    - Serialized React component trees
    
    Enhanced for mobile app format:
    - Extracts array visualizations
    - Identifies code execution steps
    - Captures pointer/index positions
    """
    
    parsed = {
        'type': 'unknown',
        'components': [],
        'text_content': [],
        'code_blocks': [],
        'code_lines': [],
        'array_states': [],
        'pointers': [],
        'highlights': [],
        'visualization_config': None
    }
    
    try:
        # Try to parse as JSON first
        if chunk_content.startswith('[') or chunk_content.startswith('{'):
            # Find complete JSON structures
            json_objects = []
            
            # Extract array structures
            array_matches = re.finditer(r'\[(?:[^\[\]]|(?R))*\]', chunk_content)
            for match in array_matches:
                try:
                    obj = json.loads(match.group())
                    json_objects.append(obj)
                except:
                    pass
            
            # Look for component definitions
            if json_objects:
                parsed['type'] = 'component'
                parsed['components'] = json_objects
        
        # Extract code blocks (monospace content)
        code_pattern = r'"fontFamily":"monospace"[^"]*"children":"([^"]+)"'
        code_matches = re.findall(code_pattern, chunk_content)
        parsed['code_blocks'] = code_matches
        
        # Extract code lines (for step-by-step execution)
        code_line_pattern = r'(def|for|if|while|return|class)\s+[^"\n]+'
        code_lines = re.findall(code_line_pattern, chunk_content)
        parsed['code_lines'] = code_lines
        
        # Extract array states (look for array-like structures)
        array_pattern = r'\[(\d+(?:,\s*\d+)*)\]'
        array_matches = re.findall(array_pattern, chunk_content)
        parsed['array_states'] = array_matches
        
        # Extract pointer/index references
        pointer_pattern = r'(nextNonZero|left|right|pointer|index|i|j)\s*=\s*(\d+)'
        pointer_matches = re.findall(pointer_pattern, chunk_content)
        parsed['pointers'] = pointer_matches
        
        # Extract plain text content
        text_pattern = r'"children":"([^"]+)"'
        text_matches = re.findall(text_pattern, chunk_content)
        parsed['text_content'] = [t for t in text_matches if len(t) > 10 and t not in code_matches]
        
        # Look for visualization-specific patterns
        viz_keywords = ['step', 'highlight', 'pointer', 'array', 'visualizer', 'animate']
        viz_content = []
        for keyword in viz_keywords:
            pattern = f'"{keyword}"[^{{}}]*{{[^{{}}]*}}'
            matches = re.findall(pattern, chunk_content, re.IGNORECASE)
            viz_content.extend(matches)
        
        if viz_content:
            parsed['visualization_config'] = viz_content
            parsed['type'] = 'visualization'
    
    except Exception as e:
        parsed['error'] = str(e)
    
    return parsed

def extract_lesson_content(lesson_data: Dict) -> Dict[str, Any]:
    """Extract structured content from a lesson's visualization data"""
    
    content = {
        'title': lesson_data['title'],
        'url': lesson_data['url'],
        'theory': {
            'explanation': [],
            'key_concepts': [],
            'code_examples': []
        },
        'visualization': {
            'has_data': False,
            'steps': [],
            'code': '',
            'language': 'python',
            'array_states': [],
            'pointers': [],
            'mobile_optimized': True
        },
        'practice': {
            'problem_statement': '',
            'examples': [],
            'constraints': []
        }
    }
    
    # Process all visualization chunks
    viz_chunks = lesson_data.get('streaming_data', {}).get('visualization_data', [])
    
    all_text = []
    all_code = []
    all_code_lines = []
    all_arrays = []
    all_pointers = []
    
    for chunk in viz_chunks:
        parsed = parse_rsc_chunk(chunk['content'])
        
        # Collect text content
        all_text.extend(parsed['text_content'])
        
        # Collect code blocks
        all_code.extend(parsed['code_blocks'])
        all_code_lines.extend(parsed['code_lines'])
        
        # Collect visualization elements
        all_arrays.extend(parsed['array_states'])
        all_pointers.extend(parsed['pointers'])
        
        # Check for visualization config
        if parsed['visualization_config'] or parsed['array_states'] or parsed['pointers']:
            content['visualization']['has_data'] = True
            content['visualization']['steps'].extend(parsed['visualization_config'] or [])
            content['visualization']['array_states'].extend(parsed['array_states'])
            content['visualization']['pointers'].extend(parsed['pointers'])
    
    # Organize content
    content['theory']['explanation'] = list(set(all_text[:10]))  # Top 10 unique text chunks
    content['theory']['code_examples'] = list(set(all_code[:5]))  # Top 5 code examples
    
    if all_code:
        content['visualization']['code'] = all_code[0] if all_code else ''
    
    return content

def transform_to_algorhythm_format(lesson_content: Dict) -> Dict[str, Any]:
    """
    Transform extracted content to AlgoRhythm lesson format
    
    Matches the structure in lib/content/*.ts files
    Mobile-optimized: Simplified UI, touch-friendly interactions
    """
    
    # Create lesson ID from title
    lesson_id = lesson_content['title'].lower().replace(' ', '-').replace('(', '').replace(')', '').replace('/', '-')
    
    # Clean and filter explanations
    explanations = lesson_content['theory']['explanation']
    cleaned_explanations = [
        exp for exp in explanations 
        if len(exp) > 20 and 'Interview' not in exp and '|' not in exp
    ]
    
    algorhythm_lesson = {
        'id': lesson_id,
        'title': lesson_content['title'],
        'description': cleaned_explanations[0] if cleaned_explanations else lesson_content['title'],
        'difficulty': 'medium',  # Can be inferred from problem complexity
        'xp': 100,
        'type': 'theory' if lesson_content['visualization']['has_data'] else 'quiz',
        'mobileOptimized': True,
        'content': {
            'theory': {
                'explanation': '\n\n'.join(cleaned_explanations[:5]),
                'keyPoints': [
                    point for point in cleaned_explanations
                    if len(point) < 200 and len(point) > 30
                ][:5],
                'codeExample': lesson_content['theory']['code_examples'][0] if lesson_content['theory']['code_examples'] else None
            }
        }
    }
    
    # Add visualization if available (mobile-optimized format)
    if lesson_content['visualization']['has_data']:
        viz_data = lesson_content['visualization']
        
        # Create mobile-friendly visualization steps
        steps = []
        for i, array_state in enumerate(viz_data['array_states'][:5]):
            step = {
                'line': i + 1,
                'state': {
                    'array': array_state,
                    'pointers': dict(viz_data['pointers'][:2]) if viz_data['pointers'] else {}
                },
                'highlight': [i],
                'explanation': f'Step {i + 1}',
                'mobileView': {
                    'compactArrayView': True,
                    'largeTouch': True,
                    'swipeEnabled': True
                }
            }
            steps.append(step)
        
        algorhythm_lesson['content']['visualization'] = {
            'type': 'code-execution',
            'code': viz_data['code'] or '# Code extracted from RSC',
            'language': viz_data['language'],
            'steps': steps if steps else [{
                'line': 1,
                'state': {'array': viz_data['array_states'][0] if viz_data['array_states'] else []},
                'highlight': [],
                'explanation': 'Visualization data available - refine steps',
                'mobileView': {'compactArrayView': True, 'largeTouch': True, 'swipeEnabled': True}
            }],
            'mobileOptimized': True,
            'controls': {
                'playPause': True,
                'stepForward': True,
                'stepBackward': True,
                'reset': True,
                'speed': [0.5, 1, 1.5, 2]
            }
        }
    
    return algorhythm_lesson

def process_all_topics():
    """Process all extracted topics and create AlgoRhythm-formatted lessons"""
    
    input_dir = Path(__file__).parent / "scraped_data" / "extracted_visualizations"
    output_dir = Path(__file__).parent / "algorhythm_lessons"
    output_dir.mkdir(exist_ok=True)
    
    print("=" * 80)
    print("Transforming to AlgoRhythm Format")
    print("=" * 80)
    
    all_topics = {}
    
    for file in sorted(input_dir.glob('*_extracted.json')):
        topic_name = file.stem.replace('_extracted', '')
        
        print(f"\n📚 Processing: {topic_name}")
        
        with open(file, 'r', encoding='utf-8') as f:
            topic_data = json.load(f)
        
        algorhythm_lessons = []
        
        for lesson in topic_data['lessons']:
            if not lesson['has_visualization']:
                continue
            
            # Extract content
            content = extract_lesson_content(lesson)
            
            # Transform to AlgoRhythm format
            algorhythm_lesson = transform_to_algorhythm_format(content)
            
            algorhythm_lessons.append(algorhythm_lesson)
            
            print(f"  ✓ {algorhythm_lesson['title']}")
        
        # Save topic file
        if algorhythm_lessons:
            topic_output = {
                'topic': topic_name,
                'total_lessons': len(algorhythm_lessons),
                'total_xp': sum(l['xp'] for l in algorhythm_lessons),
                'lessons': algorhythm_lessons
            }
            
            output_file = output_dir / f"{topic_name}.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(topic_output, f, indent=2, ensure_ascii=False)
            
            all_topics[topic_name] = len(algorhythm_lessons)
            print(f"  💾 Saved {len(algorhythm_lessons)} lessons")
    
    # Create index
    index_file = output_dir / "index.json"
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump({
            'total_topics': len(all_topics),
            'total_lessons': sum(all_topics.values()),
            'topics': all_topics
        }, f, indent=2)
    
    print("\n" + "=" * 80)
    print(f"✅ Created {sum(all_topics.values())} AlgoRhythm lessons")
    print(f"📊 Organized into {len(all_topics)} topics")
    print(f"💾 Saved to: {output_dir}")
    print("=" * 80)
    
    return all_topics

def create_typescript_export(topic_name: str):
    """Create TypeScript export file for a topic (AlgoRhythm format)"""
    
    input_file = Path(__file__).parent / "algorhythm_lessons" / f"{topic_name}.json"
    output_dir = Path(__file__).parent / "algorhythm_lessons" / "typescript"
    output_dir.mkdir(exist_ok=True)
    
    with open(input_file, 'r', encoding='utf-8') as f:
        topic_data = json.load(f)
    
    # Create TypeScript content
    ts_content = f'''/**
 * {topic_data['topic'].replace('-', ' ').title()} - Scraped from HelloInterview.com
 * Total Lessons: {topic_data['total_lessons']}
 * Total XP: {topic_data['total_xp']}
 * 
 * Note: Visualization steps need manual refinement
 */

import {{ Lesson }} from '../types';

export const {topic_name.replace('-', '_')}_lessons: Lesson[] = {json.dumps(topic_data['lessons'], indent=2)};
'''
    
    output_file = output_dir / f"{topic_name}.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"  ✓ Created TypeScript file: {output_file.name}")

if __name__ == "__main__":
    topics = process_all_topics()
    
    print("\n" + "=" * 80)
    print("Creating TypeScript Exports (Sample)")
    print("=" * 80)
    
    # Create TypeScript files for first 3 topics as examples
    sample_topics = list(topics.keys())[:3]
    for topic in sample_topics:
        create_typescript_export(topic)
    
    print("\n" + "=" * 80)
    print("✅ COMPLETE!")
    print("=" * 80)
    print(f"""
Next Steps:
1. Review generated JSON in: algorhythm_lessons/
2. Manually refine visualization steps (RSC data needs interpretation)
3. Import TypeScript files into lib/content/
4. Update content-engine.ts to include new topics
5. Test lessons in the app

The RSC payload contains the visualization data but in Next.js's internal
format. Manual refinement will improve the quality of step-by-step execution.
    """)
