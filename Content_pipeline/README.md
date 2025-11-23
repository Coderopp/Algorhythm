# HelloInterview DSA Content Scraper

## Overview
Comprehensive web scraper that extracts ALL content from hellointerview.com's DSA section, organized by topic.

## What It Extracts

### Complete HTML Structure
- Raw HTML for reference
- All headings (h1-h6)
- All paragraphs
- All lists (ordered & unordered)
- All tables
- All code blocks with syntax
- All images with metadata
- All links

### Interactive Elements
- Buttons and their handlers
- Forms and inputs
- Canvas elements (for visualizations)
- SVG graphics
- iFrames (embedded content)
- All data attributes

### Educational Content
- Explanations and definitions
- Examples and demonstrations
- Exercises and problems
- Quizzes and MCQs
- Visualizations and animations
- Videos (embedded or linked)

## Installation

```bash
pip install -r requirements.txt
```

## Usage

### Basic Usage (Scrape Everything)
```bash
python scraper.py
```

### Limited Testing (First 10 Pages)
```python
# Edit scraper.py main() function
scraper.crawl_all(max_pages=10)
```

## Output Structure

```
Content_pipeline/
├── scraped_data/
│   ├── index.json          # Master index with all topics
│   ├── arrays.json         # Arrays topic with all lessons
│   ├── linked_lists.json   # Linked lists topic
│   ├── trees.json          # Trees topic
│   └── ...                 # One file per topic
```

### Data Format

Each topic file contains:
```json
{
  "topic": "arrays",
  "total_lessons": 5,
  "lessons": [
    {
      "url": "https://...",
      "title": "Lesson Title",
      "raw_html": "...",
      "structure": {
        "headings": [...],
        "paragraphs": [...],
        "code_blocks": [...],
        "images": [...],
        "links": [...]
      },
      "interactive_elements": {
        "canvases": [...],
        "svgs": [...],
        "buttons": [...]
      },
      "educational_content": {
        "visualizations": [...],
        "quizzes": [...],
        "videos": [...]
      }
    }
  ]
}
```

## Features

✅ Complete content extraction (nothing is lost)
✅ Organized by topic automatically
✅ Preserves HTML structure for accurate transformation
✅ Extracts visualizations and interactive elements
✅ Rate-limited to be respectful to the server
✅ Detailed progress reporting
✅ Comprehensive summary statistics

## Notes

- The scraper preserves the exact structure for later transformation
- All interactive elements (canvas, SVG) are captured
- Videos and embedded content are recorded with full URLs
- Rate limiting: 1 second delay between requests
- User-Agent header set to avoid blocks

## Next Steps

After scraping:
1. Review `scraped_data/index.json` to see all topics
2. Examine individual topic files for content structure
3. Create transformation script to convert to your app format
4. Map visualizations to your AlgorithmVisualizer component
5. Convert quizzes to your quiz format

## Permission

This scraper is used with explicit permission from hellointerview.com owners.
