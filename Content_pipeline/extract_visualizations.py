#!/usr/bin/env python3
"""
Enhanced scraper specifically for extracting Next.js visualization data
from HelloInterview.com
"""

import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

def extract_nextjs_data(html_content):
    """Extract __NEXT_DATA__ from Next.js pages"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the Next.js data script
    next_script = soup.find('script', {'id': '__NEXT_DATA__'})
    if next_script and next_script.string:
        try:
            return json.loads(next_script.string)
        except json.JSONDecodeError as e:
            print(f"  ⚠ Error parsing Next.js data: {e}")
            return None
    return None

def extract_visualization_config(next_data):
    """Extract visualization configuration from Next.js data"""
    if not next_data:
        return None
    
    viz_config = {
        'found': False,
        'steps': [],
        'code': '',
        'language': '',
        'config': {}
    }
    
    try:
        # Navigate through Next.js data structure
        props = next_data.get('props', {})
        page_props = props.get('pageProps', {})
        
        # Look for visualization data in various possible locations
        for key in ['visualization', 'visualizer', 'steps', 'codeSteps', 'problemData', 'lessonData']:
            if key in page_props:
                viz_config['found'] = True
                viz_config['config'][key] = page_props[key]
        
        # Look deeper in the structure
        if 'problem' in page_props:
            problem = page_props['problem']
            if isinstance(problem, dict):
                for key in ['visualizationSteps', 'codeExecution', 'interactive']:
                    if key in problem:
                        viz_config['found'] = True
                        viz_config['config'][key] = problem[key]
        
        return viz_config if viz_config['found'] else None
        
    except Exception as e:
        print(f"  ⚠ Error extracting visualization: {e}")
        return None

def process_all_topics():
    """Process all scraped topic files to extract visualization data"""
    scraped_dir = Path(__file__).parent / "scraped_data"
    viz_output_dir = scraped_dir / "visualizations"
    viz_output_dir.mkdir(exist_ok=True)
    
    print("=" * 80)
    print("Extracting Visualization Data from Scraped Content")
    print("=" * 80)
    
    all_visualizations = {}
    
    # Process each topic file
    for topic_file in scraped_dir.glob("*.json"):
        if topic_file.name == "index.json":
            continue
        
        print(f"\nProcessing: {topic_file.name}")
        
        with open(topic_file, 'r', encoding='utf-8') as f:
            topic_data = json.load(f)
        
        topic_visualizations = []
        
        for lesson in topic_data.get('lessons', []):
            title = lesson.get('title', 'Untitled')
            url = lesson.get('url', '')
            
            # Extract Next.js data
            next_data = extract_nextjs_data(lesson.get('raw_html', ''))
            
            if next_data:
                viz_config = extract_visualization_config(next_data)
                
                if viz_config:
                    print(f"  ✓ {title}: Found visualization data!")
                    topic_visualizations.append({
                        'title': title,
                        'url': url,
                        'visualization': viz_config,
                        'next_data': next_data  # Include full Next.js data for reference
                    })
                else:
                    # Still save the Next.js data even without explicit viz config
                    topic_visualizations.append({
                        'title': title,
                        'url': url,
                        'next_data': next_data
                    })
        
        if topic_visualizations:
            # Save visualization data for this topic
            viz_file = viz_output_dir / f"{topic_file.stem}_visualizations.json"
            with open(viz_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'topic': topic_data.get('topic'),
                    'lessons_with_data': len(topic_visualizations),
                    'lessons': topic_visualizations
                }, f, indent=2, ensure_ascii=False)
            
            print(f"  💾 Saved {len(topic_visualizations)} lessons with Next.js data")
            all_visualizations[topic_file.stem] = len(topic_visualizations)
    
    # Save summary
    summary_file = viz_output_dir / "visualization_summary.json"
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump({
            'total_topics': len(all_visualizations),
            'topics': all_visualizations,
            'total_lessons_with_data': sum(all_visualizations.values())
        }, f, indent=2)
    
    print("\n" + "=" * 80)
    print(f"✅ Extracted visualization data from {sum(all_visualizations.values())} lessons")
    print(f"📁 Saved to: {viz_output_dir}")
    print("=" * 80)
    
    return all_visualizations

if __name__ == "__main__":
    process_all_topics()
