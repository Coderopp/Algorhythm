#!/bin/bash
# Quick start script for the scraper

cd "$(dirname "$0")"

echo "=================================="
echo "HelloInterview DSA Content Scraper"
echo "=================================="
echo ""

# Activate virtual environment
source venv/bin/activate

# Run scraper
python scraper.py

echo ""
echo "✅ Complete! Check scraped_data/ folder for results"
