#!/usr/bin/env python3
"""
Convert scraped HelloInterview lessons to AlgoRhythm's exact format
Matches the structure in lib/content/*.ts files
"""

import json
from pathlib import Path
from typing import Dict, List, Any

def convert_visualization_to_algorhythm_format(viz_data: Dict) -> List[Dict]:
    """Convert scraped visualization to AlgoRhythm VisualizationStep format"""
    
    if not viz_data or not viz_data.get('steps'):
        return []
    
    algorhythm_steps = []
    
    for step_data in viz_data['steps']:
        # Extract array from state
        array_str = step_data.get('state', {}).get('array', '')
        
        # Convert string array to number array
        try:
            if isinstance(array_str, str):
                array_nums = [int(x.strip()) for x in array_str.split(',') if x.strip()]
            else:
                array_nums = array_str if isinstance(array_str, list) else []
        except:
            array_nums = []
        
        # Extract pointers
        pointers = step_data.get('state', {}).get('pointers', {})
        
        # Create AlgoRhythm format step
        algorhythm_step = {
            'step': step_data.get('line', 0) - 1,  # 0-indexed
            'array': array_nums,
            'pointers': pointers,
            'message': step_data.get('explanation', f"Step {step_data.get('line', 0)}"),
            'highlights': step_data.get('highlight', [])
        }
        
        algorhythm_steps.append(algorhythm_step)
    
    return algorhythm_steps

def convert_lesson_to_algorhythm_format(scraped_lesson: Dict, duration: str = "5 min") -> Dict:
    """Convert a single scraped lesson to AlgoRhythm Lesson format"""
    
    content = scraped_lesson.get('content', {})
    theory = content.get('theory', {})
    viz = content.get('visualization', {})
    
    # Build lesson content based on type
    lesson_content = {}
    
    if scraped_lesson['type'] == 'theory' or scraped_lesson['type'] == 'visualizer':
        lesson_content['title'] = scraped_lesson['title']
        lesson_content['explanation'] = theory.get('explanation', scraped_lesson.get('description', ''))
        lesson_content['code'] = theory.get('codeExample') or viz.get('code', '')
        
        # Add visualization steps if available
        if viz and viz.get('steps'):
            viz_steps = convert_visualization_to_algorhythm_format(viz)
            if viz_steps:
                lesson_content['visualizationSteps'] = viz_steps
                scraped_lesson['type'] = 'visualizer'
    
    elif scraped_lesson['type'] == 'quiz':
        # For quizzes, we'll need to structure questions
        # For now, convert to theory with explanation
        lesson_content['title'] = scraped_lesson['title']
        lesson_content['explanation'] = theory.get('explanation', scraped_lesson.get('description', ''))
        if theory.get('codeExample'):
            lesson_content['code'] = theory['codeExample']
    
    # Create AlgoRhythm Lesson format
    algorhythm_lesson = {
        'id': scraped_lesson['id'],
        'title': scraped_lesson['title'],
        'type': scraped_lesson['type'],
        'duration': duration,
        'xp': scraped_lesson.get('xp', 100),
        'isCompleted': False,
        'isLocked': False,  # Will be set based on position
        'content': lesson_content
    }
    
    return algorhythm_lesson

def convert_topic_to_algorhythm_format(scraped_topic_data: Dict, icon: str, color: str) -> Dict:
    """Convert scraped topic to AlgoRhythm Topic format"""
    
    lessons = []
    
    for i, scraped_lesson in enumerate(scraped_topic_data['lessons']):
        lesson = convert_lesson_to_algorhythm_format(scraped_lesson)
        
        # Lock all lessons except the first
        lesson['isLocked'] = i > 0
        
        lessons.append(lesson)
    
    # Create AlgoRhythm Topic format
    algorhythm_topic = {
        'id': scraped_topic_data['topic'],
        'title': scraped_topic_data['topic'].replace('-', ' ').title(),
        'description': f"Master {scraped_topic_data['topic'].replace('-', ' ')} techniques and algorithms.",
        'icon': icon,
        'totalXp': scraped_topic_data['total_xp'],
        'progress': 0,
        'color': color,
        'lessons': lessons
    }
    
    return algorhythm_topic

# Icon and color mapping for topics
TOPIC_CONFIG = {
    'two-pointers': {'icon': 'GitMerge', 'color': 'bg-purple-500'},
    'sliding-window': {'icon': 'Maximize2', 'color': 'bg-indigo-500'},
    'binary-search': {'icon': 'Search', 'color': 'bg-yellow-500'},
    'linked-list': {'icon': 'Link', 'color': 'bg-green-500'},
    'stack': {'icon': 'Layers', 'color': 'bg-orange-500'},
    'heap': {'icon': 'Mountain', 'color': 'bg-red-500'},
    'graphs': {'icon': 'Network', 'color': 'bg-pink-500'},
    'dynamic-programming': {'icon': 'Zap', 'color': 'bg-amber-500'},
    'backtracking': {'icon': 'ArrowLeftRight', 'color': 'bg-cyan-500'},
    'trie': {'icon': 'TreeDeciduous', 'color': 'bg-lime-500'},
    'intervals': {'icon': 'CalendarRange', 'color': 'bg-teal-500'},
    'matrices': {'icon': 'Grid3x3', 'color': 'bg-violet-500'},
    'prefix-sum': {'icon': 'Sigma', 'color': 'bg-fuchsia-500'},
    'greedy': {'icon': 'TrendingUp', 'color': 'bg-rose-500'},
    'breadth-first-search': {'icon': 'GitBranch', 'color': 'bg-sky-500'},
    'depth-first-search': {'icon': 'GitCommit', 'color': 'bg-slate-500'},
}

def generate_typescript_file(topic_data: Dict, output_path: Path):
    """Generate TypeScript file in AlgoRhythm format"""
    
    topic_id = topic_data['id']
    
    # Get icon and color
    config = TOPIC_CONFIG.get(topic_id, {'icon': 'Book', 'color': 'bg-gray-500'})
    
    # TypeScript content
    ts_content = f'''import {{ Topic }} from "../schema";

export const {topic_id.replace('-', '_')}Topic: Topic = {{
  id: "{topic_id}",
  title: "{topic_data['title']}",
  description: "{topic_data['description']}",
  icon: "{config['icon']}",
  totalXp: {topic_data['totalXp']},
  progress: 0,
  color: "{config['color']}",
  lessons: {json.dumps(topic_data['lessons'], indent=4)}
}};
'''
    
    # Write file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"  ✓ Generated {output_path.name}")

def main():
    """Main conversion process"""
    
    input_dir = Path(__file__).parent / "algorhythm_lessons"
    output_dir = Path(__file__).parent.parent / "lib" / "content" / "scraped"
    output_dir.mkdir(exist_ok=True, parents=True)
    
    print("=" * 80)
    print("Converting Scraped Lessons to AlgoRhythm Format")
    print("=" * 80)
    
    converted_topics = []
    
    for json_file in sorted(input_dir.glob("*.json")):
        if json_file.name == "index.json":
            continue
        
        print(f"\n📚 Converting: {json_file.stem}")
        
        # Load scraped data
        with open(json_file, 'r', encoding='utf-8') as f:
            scraped_data = json.load(f)
        
        # Get icon and color
        topic_id = scraped_data['topic']
        config = TOPIC_CONFIG.get(topic_id, {'icon': 'Book', 'color': 'bg-gray-500'})
        
        # Convert to AlgoRhythm format
        algorhythm_topic = convert_topic_to_algorhythm_format(
            scraped_data,
            config['icon'],
            config['color']
        )
        
        # Generate TypeScript file
        ts_filename = f"{topic_id}.ts"
        output_path = output_dir / ts_filename
        generate_typescript_file(algorhythm_topic, output_path)
        
        converted_topics.append({
            'id': topic_id,
            'filename': ts_filename,
            'lessons': len(algorhythm_topic['lessons']),
            'xp': algorhythm_topic['totalXp']
        })
    
    # Generate index file with imports
    print(f"\n📝 Generating index.ts...")
    
    index_content = """// Auto-generated imports for scraped content
"""
    
    for topic in converted_topics:
        var_name = topic['id'].replace('-', '_')
        index_content += f"export {{ {var_name}Topic }} from './{topic['id']}';\n"
    
    index_path = output_dir / "index.ts"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"  ✓ Generated index.ts")
    
    # Print summary
    print("\n" + "=" * 80)
    print("✅ CONVERSION COMPLETE!")
    print("=" * 80)
    print(f"\n📊 Converted {len(converted_topics)} topics:")
    for topic in converted_topics:
        print(f"   - {topic['id']}: {topic['lessons']} lessons ({topic['xp']} XP)")
    
    print(f"\n💾 Output directory: {output_dir}")
    print(f"\n📝 Next steps:")
    print(f"   1. Import topics in lib/content-engine.ts")
    print(f"   2. Add to course modules")
    print(f"   3. Test in the app")

if __name__ == "__main__":
    main()
