#!/usr/bin/env python3
"""
Extract Next.js streaming data from hellointerview.com pages
This handles Next.js 13+ App Router format with self.__next_f.push
"""

import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

def extract_nextjs_streaming_data(html_content):
    """Extract data from Next.js streaming format (self.__next_f.push)"""
    
    # Find all self.__next_f.push calls
    pattern = r'self\.__next_f\.push\(\[(.*?)\]\)'
    matches = re.findall(pattern, html_content, re.DOTALL)
    
    streaming_data = []
    visualization_data = []
    
    for match in matches:
        try:
            # Parse the array content
            # Format is usually: [id, "content"] or [id, content]
            parts = match.split(',', 1)
            if len(parts) == 2:
                chunk_id = parts[0].strip()
                content = parts[1].strip()
                
                # Remove quotes if present
                if content.startswith('"') and content.endswith('"'):
                    content = content[1:-1]
                    # Unescape the content
                    content = content.encode().decode('unicode_escape')
                
                streaming_data.append({
                    'id': chunk_id,
                    'content': content
                })
                
                # Look for visualization-related data
                if any(keyword in content.lower() for keyword in [
                    'visualization', 'step', 'code', 'array', 'pointer',
                    'animate', 'highlight', 'execution'
                ]):
                    visualization_data.append({
                        'id': chunk_id,
                        'content': content
                    })
                    
        except Exception as e:
            continue
    
    return {
        'total_chunks': len(streaming_data),
        'visualization_chunks': len(visualization_data),
        'all_data': streaming_data,
        'visualization_data': visualization_data
    }

def process_lesson_for_visualization(lesson):
    """Process a single lesson to extract visualization data"""
    
    html = lesson.get('raw_html', '')
    
    # Extract streaming data
    streaming = extract_nextjs_streaming_data(html)
    
    # Also look for structured data in the HTML
    soup = BeautifulSoup(html, 'html.parser')
    
    # Find any JSON-LD or structured data
    json_scripts = soup.find_all('script', {'type': 'application/json'})
    json_ld = soup.find_all('script', {'type': 'application/ld+json'})
    
    structured_data = []
    for script in json_scripts + json_ld:
        if script.string:
            try:
                data = json.loads(script.string)
                structured_data.append(data)
            except:
                pass
    
    return {
        'title': lesson.get('title'),
        'url': lesson.get('url'),
        'streaming_data': streaming,
        'structured_data': structured_data,
        'has_visualization': streaming['visualization_chunks'] > 0
    }

def main():
    """Process all topics and extract visualization data"""
    
    scraped_dir = Path(__file__).parent / "scraped_data"
    output_dir = scraped_dir / "extracted_visualizations"
    output_dir.mkdir(exist_ok=True)
    
    print("=" * 80)
    print("Extracting Next.js Visualization Data (App Router Format)")
    print("=" * 80)
    
    total_lessons = 0
    lessons_with_viz = 0
    
    for topic_file in scraped_dir.glob("*.json"):
        if topic_file.name == "index.json":
            continue
        
        print(f"\n📂 Processing: {topic_file.name}")
        
        with open(topic_file, 'r', encoding='utf-8') as f:
            topic_data = json.load(f)
        
        topic_results = {
            'topic': topic_data.get('topic'),
            'lessons': []
        }
        
        for lesson in topic_data.get('lessons', []):
            total_lessons += 1
            result = process_lesson_for_visualization(lesson)
            
            if result['has_visualization']:
                lessons_with_viz += 1
                print(f"  ✓ {result['title']}: {result['streaming_data']['visualization_chunks']} viz chunks")
            
            topic_results['lessons'].append(result)
        
        # Save results
        output_file = output_dir / f"{topic_file.stem}_extracted.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(topic_results, f, indent=2, ensure_ascii=False)
    
    print("\n" + "=" * 80)
    print(f"✅ Processed {total_lessons} lessons")
    print(f"📊 Found visualization data in {lessons_with_viz} lessons")
    print(f"💾 Saved to: {output_dir}")
    print("=" * 80)

if __name__ == "__main__":
    main()
