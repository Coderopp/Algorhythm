# Integrating RSC Format & Scraped Content into AlgoRhythm

## Overview
This guide shows how to use React Server Components (RSC) format with the scraped visualization data from HelloInterview.com in your Next.js mobile app.

## Architecture

### Current Setup
- **Next.js 16.0.3** with App Router (already RSC-enabled)
- Mobile-first design with Framer Motion animations
- Content stored in `lib/content/*.ts` files

### What We Extracted
✅ 106 lessons with visualization data (17 DSA topics)
✅ Array states, pointers, and code execution steps
✅ Theory explanations and key concepts
✅ Mobile-optimized format

## Integration Steps

### 1. File Structure

```
app/
  lessons/
    [topic]/
      [lessonId]/
        page.tsx          # RSC - Server Component
        client-viz.tsx    # Client Component for interactions
lib/
  content/
    scraped/              # NEW: Scraped lessons
      two-pointers.ts
      dynamic-programming.ts
      ...
    arrays.ts             # Existing lessons
    ...
Content_pipeline/
  algorhythm_lessons/     # Generated from scraper
    *.json
    typescript/
      *.ts
```

### 2. Copy Scraped Lessons

```bash
# Copy generated TypeScript files to your content library
cp Content_pipeline/algorhythm_lessons/typescript/*.ts lib/content/scraped/

# Or use the JSON directly
cp Content_pipeline/algorhythm_lessons/*.json public/lessons/
```

### 3. Create RSC Lesson Page

**app/lessons/[topic]/[lessonId]/page.tsx** (Server Component)
```typescript
import { lessons } from '@/lib/content/scraped/two-pointers';
import { ClientVisualization } from './client-viz';

interface PageProps {
  params: { topic: string; lessonId: string };
}

// This is a React Server Component - runs on server
export default async function LessonPage({ params }: PageProps) {
  const lesson = lessons.find(l => l.id === params.lessonId);
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  // Server renders static content
  return (
    <div className="lesson-container">
      <h1>{lesson.title}</h1>
      
      {/* Theory section - static, rendered on server */}
      <section className="theory">
        <p>{lesson.content.theory.explanation}</p>
        <ul>
          {lesson.content.theory.keyPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Visualization - interactive, client component */}
      {lesson.content.visualization && (
        <ClientVisualization
          code={lesson.content.visualization.code}
          steps={lesson.content.visualization.steps}
          mobileOptimized={lesson.content.visualization.mobileOptimized}
          controls={lesson.content.visualization.controls}
        />
      )}
    </div>
  );
}
```

### 4. Create Client Visualization Component

**app/lessons/[topic]/[lessonId]/client-viz.tsx** (Client Component)
```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  line: number;
  state: {
    array: string;
    pointers: Record<string, number>;
  };
  highlight: number[];
  explanation: string;
  mobileView: {
    compactArrayView: boolean;
    largeTouch: boolean;
    swipeEnabled: boolean;
  };
}

interface Props {
  code: string;
  steps: Step[];
  mobileOptimized?: boolean;
  controls?: {
    playPause: boolean;
    stepForward: boolean;
    stepBackward: boolean;
    reset: boolean;
    speed: number[];
  };
}

export function ClientVisualization({ code, steps, mobileOptimized, controls }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const step = steps[currentStep];
  const arrayValues = step.state.array.split(',').map(v => v.trim());

  return (
    <div className="visualization-container">
      {/* Code Display - Mobile Optimized */}
      <div className="code-panel">
        <pre className="text-sm md:text-base">
          {code.split('\n').map((line, i) => (
            <div
              key={i}
              className={`
                ${step.highlight.includes(i) ? 'bg-yellow-200 dark:bg-yellow-900' : ''}
                ${mobileOptimized ? 'py-2 px-3' : 'py-1 px-2'}
              `}
            >
              {line}
            </div>
          ))}
        </pre>
      </div>

      {/* Array Visualization - Mobile Touch-Friendly */}
      <div className="array-panel">
        <div className="flex gap-2 overflow-x-auto py-4">
          {arrayValues.map((value, i) => (
            <motion.div
              key={i}
              className={`
                ${mobileOptimized ? 'w-16 h-16 text-xl' : 'w-12 h-12 text-base'}
                flex items-center justify-center
                bg-blue-500 text-white rounded-lg
                ${step.highlight.includes(i) ? 'ring-4 ring-yellow-400' : ''}
              `}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {value}
            </motion.div>
          ))}
        </div>

        {/* Pointers Display */}
        <div className="pointers">
          {Object.entries(step.state.pointers).map(([name, pos]) => (
            <div key={name} className="text-sm">
              <strong>{name}:</strong> {pos}
            </div>
          ))}
        </div>
      </div>

      {/* Controls - Large Touch Targets for Mobile */}
      {controls && (
        <div className="controls flex gap-3 justify-center mt-4">
          <button
            onClick={() => setCurrentStep(0)}
            className={`${mobileOptimized ? 'p-4 text-lg' : 'p-2'} bg-gray-200 rounded-lg`}
          >
            ⏮ Reset
          </button>
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            className={`${mobileOptimized ? 'p-4 text-lg' : 'p-2'} bg-gray-200 rounded-lg`}
          >
            ⏪ Back
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`${mobileOptimized ? 'p-4 text-lg' : 'p-2'} bg-blue-500 text-white rounded-lg`}
          >
            {isPlaying ? '⏸' : '▶️'}
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className={`${mobileOptimized ? 'p-4 text-lg' : 'p-2'} bg-gray-200 rounded-lg`}
          >
            ⏩ Next
          </button>
        </div>
      )}

      {/* Step Explanation */}
      <div className="explanation mt-4 p-4 bg-gray-100 rounded-lg">
        <p className={mobileOptimized ? 'text-base' : 'text-sm'}>
          {step.explanation}
        </p>
      </div>
    </div>
  );
}
```

### 5. Update Content Engine

**lib/content-engine.ts**
```typescript
import { backtracking_lessons } from './scraped/backtracking';
import { twoPointers_lessons } from './scraped/two-pointers';
import { dynamicProgramming_lessons } from './scraped/dynamic-programming';
// ... import other scraped lessons

export const allLessons = {
  // Existing lessons
  arrays: arrays_lessons,
  sorting: sorting_lessons,
  
  // Scraped lessons from HelloInterview.com
  'two-pointers': twoPointers_lessons,
  'dynamic-programming': dynamicProgramming_lessons,
  backtracking: backtracking_lessons,
  heap: heap_lessons,
  graphs: graphs_lessons,
  // ... add all 17 topics
};

export function getLesson(topic: string, lessonId: string) {
  const topicLessons = allLessons[topic];
  return topicLessons?.find(l => l.id === lessonId);
}
```

## Benefits of RSC Approach

### 1. Performance
- **Static content** (theory, explanations) rendered on server
- **Smaller bundle** - only interactive parts sent to client
- **Faster initial load** - especially on mobile

### 2. SEO
- Full content indexed by search engines
- Better discoverability

### 3. Mobile Optimization
- Touch-friendly controls (large buttons)
- Swipe gestures for step navigation
- Compact array views for small screens
- Optimized font sizes

### 4. Data Freshness
- Can fetch latest lesson updates on server
- No stale cached content

## Mobile-Specific Enhancements

### Touch Gestures
```typescript
'use client';

import { useSwipeable } from 'react-swipeable';

export function SwipeableVisualization({ steps }: Props) {
  const [step, setStep] = useState(0);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => setStep(Math.min(steps.length - 1, step + 1)),
    onSwipedRight: () => setStep(Math.max(0, step - 1)),
    trackMouse: true
  });

  return <div {...handlers}>{/* visualization */}</div>;
}
```

### Responsive Layout
```typescript
// Use Tailwind responsive classes
<div className="
  grid grid-cols-1        /* Mobile: single column */
  md:grid-cols-2          /* Tablet: 2 columns */
  gap-4 p-4
">
  <div className="code-panel">...</div>
  <div className="viz-panel">...</div>
</div>
```

## Testing

```bash
# Run the updated parser
cd Content_pipeline
source venv/bin/activate
python parse_rsc_visualizations.py

# Copy to your app
cp algorhythm_lessons/typescript/two-pointers.ts ../lib/content/scraped/

# Test in your Next.js app
npm run dev
# Navigate to /lessons/two-pointers/move-zeroes
```

## Next Steps

1. ✅ Generated 106 mobile-optimized lessons
2. ⏭️ Copy TypeScript files to `lib/content/scraped/`
3. ⏭️ Create RSC lesson pages in `app/lessons/`
4. ⏭️ Implement swipe gestures for mobile
5. ⏭️ Add progress tracking
6. ⏭️ Manually refine visualization steps for key lessons

## Notes

- **RSC = React Server Components** (Next.js 13+ App Router)
- Server renders static content, client handles interactions
- Perfect for mobile: smaller bundles, faster loads
- Minimal changes needed - Next.js 16 already supports RSC
- Scraped data provides foundation, refine as needed
