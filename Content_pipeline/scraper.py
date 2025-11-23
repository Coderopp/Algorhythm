#!/usr/bin/env python3
"""
Web scraper for hellointerview.com DSA content
Comprehensive extraction of all content organized by topic
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from urllib.parse import urljoin, urlparse
from typing import List, Dict, Any, Set
import os
from pathlib import Path

class HelloInterviewScraper:
    def __init__(self, base_url: str = "https://www.hellointerview.com/learn/code"):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.visited_urls: Set[str] = set()
        self.topics_data: Dict[str, List[Dict[str, Any]]] = {}
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.output_dir = Path(__file__).parent / "scraped_data"
        self.output_dir.mkdir(exist_ok=True)
    
    def crawl_page(self, url: str) -> BeautifulSoup:
        """Fetch and parse a single page"""
        if url in self.visited_urls:
            return None
        
        try:
            print(f"Crawling: {url}")
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            self.visited_urls.add(url)
            time.sleep(1)  # Be respectful with rate limiting
            return BeautifulSoup(response.content, 'html.parser')
        except Exception as e:
            print(f"Error crawling {url}: {e}")
            return None
    
    def find_topic_links(self, soup: BeautifulSoup, base_url: str) -> List[str]:
        """Extract all topic/lesson links from the page"""
        links = []
        
        # Find all links that are part of the learning content
        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(base_url, href)
            
            # Only include links from the same domain and under /learn/code
            if self.domain in full_url and '/learn/code' in full_url:
                if full_url not in self.visited_urls:
                    links.append(full_url)
        
        return list(set(links))
    
    def extract_lesson_content(self, soup: BeautifulSoup, url: str) -> Dict[str, Any]:
        """Extract ALL content from page - raw structure preserved"""
        lesson_data = {
            'url': url,
            'title': '',
            'topic': '',
            'raw_html': str(soup),
            'full_text': soup.get_text(separator='\n', strip=True),
            'structure': {
                'headings': [],
                'paragraphs': [],
                'lists': [],
                'tables': [],
                'code_blocks': [],
                'images': [],
                'links': [],
                'scripts': [],
                'styles': []
            },
            'interactive_elements': {
                'buttons': [],
                'forms': [],
                'inputs': [],
                'canvases': [],
                'svgs': [],
                'iframes': []
            },
            'educational_content': {
                'explanations': [],
                'examples': [],
                'exercises': [],
                'quizzes': [],
                'visualizations': [],
                'videos': []
            },
            'metadata': {}
        }
        
        # Extract title (all heading levels)
        for i in range(1, 7):
            headings = soup.find_all(f'h{i}')
            for h in headings:
                lesson_data['structure']['headings'].append({
                    'level': i,
                    'text': h.get_text(strip=True),
                    'html': str(h)
                })
        
        if lesson_data['structure']['headings']:
            lesson_data['title'] = lesson_data['structure']['headings'][0]['text']
        
        # Extract topic from URL
        url_parts = url.split('/')
        if len(url_parts) > 4:
            lesson_data['topic'] = url_parts[-2] if url_parts[-1] else url_parts[-3]
        
        # Extract ALL paragraphs
        for p in soup.find_all('p'):
            text = p.get_text(strip=True)
            if text:
                lesson_data['structure']['paragraphs'].append({
                    'text': text,
                    'html': str(p)
                })
        
        # Extract ALL lists
        for ul in soup.find_all(['ul', 'ol']):
            items = [li.get_text(strip=True) for li in ul.find_all('li', recursive=False)]
            if items:
                lesson_data['structure']['lists'].append({
                    'type': ul.name,
                    'items': items,
                    'html': str(ul)
                })
        
        # Extract ALL tables
        for table in soup.find_all('table'):
            lesson_data['structure']['tables'].append({
                'html': str(table),
                'text': table.get_text(separator=' | ', strip=True)
            })
        
        # Extract ALL code blocks with full context
        for pre in soup.find_all('pre'):
            code = pre.find('code') or pre
            lesson_data['structure']['code_blocks'].append({
                'code': code.get_text(),
                'language': ' '.join(code.get('class', [])),
                'html': str(pre),
                'parent_context': str(pre.parent)[:200] if pre.parent else ''
            })
        
        # Extract ALL images
        for img in soup.find_all('img'):
            lesson_data['structure']['images'].append({
                'src': urljoin(url, img.get('src', '')),
                'alt': img.get('alt', ''),
                'title': img.get('title', ''),
                'attributes': dict(img.attrs)
            })
        
        # Extract ALL links
        for a in soup.find_all('a', href=True):
            lesson_data['structure']['links'].append({
                'href': urljoin(url, a['href']),
                'text': a.get_text(strip=True),
                'attributes': dict(a.attrs)
            })
        
        # Extract ALL scripts
        for script in soup.find_all('script'):
            src = script.get('src')
            lesson_data['structure']['scripts'].append({
                'src': urljoin(url, src) if src else None,
                'inline': script.string if not src else None,
                'type': script.get('type', 'text/javascript')
            })
        
        # Extract inline styles and style tags
        for style in soup.find_all('style'):
            lesson_data['structure']['styles'].append(style.string)
        
        # Extract ALL interactive elements
        for button in soup.find_all('button'):
            lesson_data['interactive_elements']['buttons'].append({
                'text': button.get_text(strip=True),
                'html': str(button),
                'attributes': dict(button.attrs)
            })
        
        for form in soup.find_all('form'):
            lesson_data['interactive_elements']['forms'].append({
                'action': form.get('action', ''),
                'method': form.get('method', ''),
                'html': str(form)
            })
        
        for inp in soup.find_all(['input', 'textarea', 'select']):
            lesson_data['interactive_elements']['inputs'].append({
                'type': inp.get('type', inp.name),
                'name': inp.get('name', ''),
                'html': str(inp),
                'attributes': dict(inp.attrs)
            })
        
        for canvas in soup.find_all('canvas'):
            lesson_data['interactive_elements']['canvases'].append({
                'id': canvas.get('id', ''),
                'html': str(canvas),
                'attributes': dict(canvas.attrs)
            })
        
        for svg in soup.find_all('svg'):
            lesson_data['interactive_elements']['svgs'].append({
                'html': str(svg),
                'attributes': dict(svg.attrs)
            })
        
        for iframe in soup.find_all('iframe'):
            lesson_data['interactive_elements']['iframes'].append({
                'src': urljoin(url, iframe.get('src', '')),
                'html': str(iframe),
                'attributes': dict(iframe.attrs)
            })
        
        # Extract educational content markers
        # Look for common patterns in educational sites
        for elem in soup.find_all(class_=re.compile(r'explanation|definition|example|note|tip|warning', re.I)):
            lesson_data['educational_content']['explanations'].append({
                'type': ' '.join(elem.get('class', [])),
                'text': elem.get_text(strip=True),
                'html': str(elem)
            })
        
        for elem in soup.find_all(class_=re.compile(r'exercise|problem|challenge|practice', re.I)):
            lesson_data['educational_content']['exercises'].append({
                'text': elem.get_text(strip=True),
                'html': str(elem)
            })
        
        for elem in soup.find_all(class_=re.compile(r'quiz|question|mcq|test', re.I)):
            lesson_data['educational_content']['quizzes'].append({
                'text': elem.get_text(strip=True),
                'html': str(elem)
            })
        
        for elem in soup.find_all(class_=re.compile(r'visual|animation|diagram|chart', re.I)):
            lesson_data['educational_content']['visualizations'].append({
                'type': ' '.join(elem.get('class', [])),
                'html': str(elem)
            })
        
        for video in soup.find_all(['video', 'iframe']):
            if 'youtube' in str(video) or 'vimeo' in str(video) or video.name == 'video':
                lesson_data['educational_content']['videos'].append({
                    'src': video.get('src') or video.get('data-src', ''),
                    'html': str(video),
                    'attributes': dict(video.attrs)
                })
        
        # Extract ALL data attributes (often used for interactive elements)
        for elem in soup.find_all(True):
            data_attrs = {k: v for k, v in elem.attrs.items() if k.startswith('data-')}
            if data_attrs and 'data_attributes' not in lesson_data['metadata']:
                lesson_data['metadata']['data_attributes'] = []
            if data_attrs:
                lesson_data['metadata'].setdefault('data_attributes', []).append({
                    'element': elem.name,
                    'attributes': data_attrs
                })
        
        return lesson_data
    
    def crawl_all(self, max_pages: int = None):
        """Crawl all pages starting from base URL and organize by topic"""
        print(f"Starting comprehensive crawl from: {self.base_url}")
        
        # Start with the main page
        soup = self.crawl_page(self.base_url)
        if not soup:
            print("Failed to crawl base URL")
            return
        
        # Find all topic links
        topic_links = self.find_topic_links(soup, self.base_url)
        print(f"Found {len(topic_links)} links to process")
        
        # Limit pages if specified
        if max_pages:
            topic_links = topic_links[:max_pages]
            print(f"Limiting to first {max_pages} pages")
        
        # Crawl each page
        for idx, link in enumerate(topic_links, 1):
            print(f"\n[{idx}/{len(topic_links)}] Processing: {link}")
            soup = self.crawl_page(link)
            if soup:
                lesson_data = self.extract_lesson_content(soup, link)
                
                # Organize by topic
                topic = lesson_data.get('topic', 'general')
                if not topic or topic == '':
                    topic = 'general'
                
                if topic not in self.topics_data:
                    self.topics_data[topic] = []
                
                self.topics_data[topic].append(lesson_data)
                print(f"  ✓ Extracted: {lesson_data['title'] or 'Untitled'}")
                print(f"  ✓ Topic: {topic}")
                print(f"  ✓ Elements: {len(lesson_data['structure']['code_blocks'])} code blocks, "
                      f"{len(lesson_data['interactive_elements']['canvases'])} canvases, "
                      f"{len(lesson_data['educational_content']['visualizations'])} visualizations")
    
    def save_by_topic(self):
        """Save scraped content organized by topic in separate files"""
        print("\n" + "=" * 60)
        print("Saving content by topic...")
        print("=" * 60)
        
        # Save each topic to its own file
        for topic, lessons in self.topics_data.items():
            # Sanitize topic name for filename
            safe_topic = re.sub(r'[^\w\s-]', '', topic).strip().replace(' ', '_')
            topic_file = self.output_dir / f"{safe_topic}.json"
            
            with open(topic_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'topic': topic,
                    'total_lessons': len(lessons),
                    'lessons': lessons
                }, f, indent=2, ensure_ascii=False)
            
            print(f"  ✓ {topic}: {len(lessons)} lessons -> {topic_file.name}")
        
        # Save master index
        index_file = self.output_dir / "index.json"
        with open(index_file, 'w', encoding='utf-8') as f:
            json.dump({
                'source': self.base_url,
                'scraped_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                'total_topics': len(self.topics_data),
                'total_lessons': sum(len(lessons) for lessons in self.topics_data.values()),
                'topics': {
                    topic: {
                        'lesson_count': len(lessons),
                        'file': f"{re.sub(r'[^\w\s-]', '', topic).strip().replace(' ', '_')}.json"
                    }
                    for topic, lessons in self.topics_data.items()
                }
            }, f, indent=2, ensure_ascii=False)
        
        print(f"\n✓ Master index saved to: {index_file}")
        return self.output_dir
    
    def generate_summary(self) -> Dict[str, Any]:
        """Generate a comprehensive summary of scraped content"""
        all_lessons = []
        for lessons in self.topics_data.values():
            all_lessons.extend(lessons)
        
        summary = {
            'total_topics': len(self.topics_data),
            'total_lessons': len(all_lessons),
            'topics': list(self.topics_data.keys()),
            'stats': {
                'total_headings': sum(len(l['structure']['headings']) for l in all_lessons),
                'total_paragraphs': sum(len(l['structure']['paragraphs']) for l in all_lessons),
                'total_code_blocks': sum(len(l['structure']['code_blocks']) for l in all_lessons),
                'total_images': sum(len(l['structure']['images']) for l in all_lessons),
                'total_links': sum(len(l['structure']['links']) for l in all_lessons),
                'total_canvases': sum(len(l['interactive_elements']['canvases']) for l in all_lessons),
                'total_svgs': sum(len(l['interactive_elements']['svgs']) for l in all_lessons),
                'total_visualizations': sum(len(l['educational_content']['visualizations']) for l in all_lessons),
                'total_videos': sum(len(l['educational_content']['videos']) for l in all_lessons),
                'total_quizzes': sum(len(l['educational_content']['quizzes']) for l in all_lessons),
                'total_exercises': sum(len(l['educational_content']['exercises']) for l in all_lessons),
            },
            'topic_breakdown': {
                topic: {
                    'lessons': len(lessons),
                    'code_blocks': sum(len(l['structure']['code_blocks']) for l in lessons),
                    'visualizations': sum(len(l['educational_content']['visualizations']) for l in lessons)
                }
                for topic, lessons in self.topics_data.items()
            }
        }
        return summary


def main():
    """Main execution function"""
    print("=" * 80)
    print(" " * 20 + "HelloInterview.com DSA Content Scraper")
    print(" " * 15 + "Complete Content Extraction - Organized by Topic")
    print("=" * 80)
    
    # Initialize scraper
    scraper = HelloInterviewScraper()
    
    # Crawl all content (set max_pages=None for unlimited, or a number for testing)
    print("\n📥 Phase 1: Crawling and extracting ALL content...")
    print("-" * 80)
    scraper.crawl_all(max_pages=None)  # Set to None to scrape everything
    
    # Save organized by topic
    print("\n💾 Phase 2: Saving content organized by topic...")
    print("-" * 80)
    output_dir = scraper.save_by_topic()
    
    # Generate and display summary
    print("\n📊 Phase 3: Content Summary")
    print("=" * 80)
    summary = scraper.generate_summary()
    
    print(f"\n✓ Total Topics: {summary['total_topics']}")
    print(f"✓ Total Lessons: {summary['total_lessons']}")
    print(f"\n📚 Topics Found:")
    for topic in summary['topics']:
        print(f"  • {topic}")
    
    print(f"\n📈 Content Statistics:")
    for key, value in summary['stats'].items():
        print(f"  • {key.replace('_', ' ').title()}: {value}")
    
    print(f"\n📂 Topic Breakdown:")
    for topic, data in summary['topic_breakdown'].items():
        print(f"  • {topic}:")
        print(f"      Lessons: {data['lessons']}")
        print(f"      Code Blocks: {data['code_blocks']}")
        print(f"      Visualizations: {data['visualizations']}")
    
    print("\n" + "=" * 80)
    print(f"✅ Scraping complete!")
    print(f"📁 Data saved to: {output_dir}")
    print(f"📋 Check index.json for navigation")
    print("=" * 80)
    print("\n💡 Next Steps:")
    print("  1. Review the scraped content in the scraped_data/ folder")
    print("  2. Each topic has its own JSON file with complete structure")
    print("  3. Content transformation script will be created next")
    print("=" * 80)


if __name__ == "__main__":
    main()
