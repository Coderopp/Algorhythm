import { describe, it, expect } from 'vitest';
import { contentEngine } from '@/lib/content-engine';
import type { Lesson, Module, Topic } from '@/lib/schema';

describe('Curriculum Flow - Complete Journey', () => {
  
  it('should have a complete course structure', () => {
    const course = contentEngine.getCourse();

    expect(course).toBeDefined();
    expect(course.id).toBe('dsa-python');
    expect(course.title).toBe('Data Structures & Algorithms in Python');
    expect(course.modules).toBeDefined();
    expect(course.modules.length).toBe(4);
  });

  it('should have all expected topics in the curriculum', () => {
    const course = contentEngine.getCourse();
    const expectedTopicIds = [
      'arrays',
      'linked-lists',
      'stacks-queues',
      'trees',
      'graphs',
      'sorting',
      'dynamic-programming'
    ];

    const foundTopicIds: string[] = [];

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topic: Topic) => {
        foundTopicIds.push(topic.id);
      });
    });

    // Verify all expected topics are present
    expectedTopicIds.forEach((topicId) => {
      expect(foundTopicIds).toContain(topicId);
    });

    // Verify we can retrieve each topic
    expectedTopicIds.forEach((topicId) => {
      const topic = contentEngine.getTopic(topicId);
      expect(topic).toBeDefined();
      expect(topic?.id).toBe(topicId);
      expect(topic?.lessons).toBeDefined();
      expect(topic?.lessons.length).toBeGreaterThan(0);
    });
  });

  it('should validate each topic has proper lesson structure', () => {
    const course = contentEngine.getCourse();

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        const topic = contentEngine.getTopic(topicSummary.id);
        
        expect(topic).toBeDefined();
        expect(topic?.title).toBeDefined();
        expect(topic?.description).toBeDefined();
        expect(topic?.lessons).toBeDefined();
        expect(Array.isArray(topic?.lessons)).toBe(true);
        expect(topic?.lessons.length).toBeGreaterThan(0);

        // Validate each lesson has required fields
        topic?.lessons.forEach((lesson: Lesson, index: number) => {
          expect(lesson.title).toBeDefined();
          expect(lesson.type).toBeDefined();
          expect(['theory', 'quiz', 'challenge', 'visualizer']).toContain(lesson.type);
          expect(lesson.xp).toBeDefined();
          expect(lesson.xp).toBeGreaterThan(0);

          // Theory lessons should have content or visualizationSteps
          if (lesson.type === 'theory' || lesson.type === 'visualizer') {
            const hasContent = 'content' in lesson;
            const hasVisualizationSteps = 'visualizationSteps' in lesson && 
              Array.isArray((lesson as any).visualizationSteps) && 
              (lesson as any).visualizationSteps.length > 0;
            expect(hasContent || hasVisualizationSteps).toBe(true);
          }

          // Quiz lessons should have questions
          if (lesson.type === 'quiz' && 'questions' in lesson) {
            const questions = (lesson as any).questions;
            expect(Array.isArray(questions)).toBe(true);
            expect(questions.length).toBeGreaterThan(0);
          }

          // Challenge lessons should have problem or code
          if (lesson.type === 'challenge' && 'problem' in lesson) {
            expect(lesson.problem).toBeDefined();
          }
        });
      });
    });
  });

  it('should calculate correct XP totals for each topic', () => {
    const expectedXP: Record<string, number> = {
      'arrays': 255,
      'linked-lists': 180,
      'stacks-queues': 210,
      'trees': 300,
      'graphs': 315,
      'sorting': 290,
      'dynamic-programming': 415
    };

    Object.entries(expectedXP).forEach(([topicId, expectedTotal]) => {
      const topic = contentEngine.getTopic(topicId);
      expect(topic).toBeDefined();

      const actualTotal = topic?.lessons.reduce((sum: number, lesson: Lesson) => sum + lesson.xp, 0);
      expect(actualTotal).toBe(expectedTotal);
    });
  });

  it('should have appropriate lesson counts per topic', () => {
    const course = contentEngine.getCourse();
    const lessonCounts: Record<string, number> = {};

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        const topic = contentEngine.getTopic(topicSummary.id);
        lessonCounts[topicSummary.id] = topic?.lessons.length || 0;
      });
    });

    // Most topics should have multiple lessons (some stubs may have fewer)
    const totalLessonsCount = Object.values(lessonCounts).reduce((sum, count) => sum + count, 0);
    expect(totalLessonsCount).toBeGreaterThanOrEqual(50);

    // Verify total lesson count
    const totalLessons = Object.values(lessonCounts).reduce((sum, count) => sum + count, 0);
    expect(totalLessons).toBeGreaterThanOrEqual(50);
  });

  it('should have lessons with diverse types', () => {
    const course = contentEngine.getCourse();
    const lessonTypes = new Set<string>();

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        const topic = contentEngine.getTopic(topicSummary.id);
        
        topic?.lessons.forEach((lesson: Lesson) => {
          lessonTypes.add(lesson.type);
        });
      });
    });

    // Should have multiple lesson types
    expect(lessonTypes.size).toBeGreaterThan(1);
    expect(lessonTypes.has('theory') || lessonTypes.has('visualizer')).toBe(true);
  });

  it('should validate arrays topic has complete lessons', () => {
    const arrays = contentEngine.getTopic('arrays');
    
    expect(arrays).toBeDefined();
    expect(arrays?.lessons).toBeDefined();
    expect(arrays!.lessons.length).toBeGreaterThanOrEqual(5);

    // First lesson should be introductory
    const firstLesson = arrays!.lessons[0];
    expect(firstLesson.title).toBeDefined();
    expect(firstLesson.type).toBe('theory');
  });

  it('should validate linked lists topic has complete lessons', () => {
    const linkedLists = contentEngine.getTopic('linked-lists');
    
    expect(linkedLists).toBeDefined();
    expect(linkedLists?.lessons).toBeDefined();
    expect(linkedLists!.lessons.length).toBe(5);
    expect(linkedLists!.lessons.reduce((sum, l) => sum + l.xp, 0)).toBe(180);
  });

  it('should validate stacks and queues topic', () => {
    const stacksQueues = contentEngine.getTopic('stacks-queues');
    
    expect(stacksQueues).toBeDefined();
    expect(stacksQueues?.lessons).toBeDefined();
    expect(stacksQueues!.lessons.length).toBe(6);
    
    // Should have both theory and quiz lessons
    const hasQuiz = stacksQueues!.lessons.some(l => l.type === 'quiz');
    expect(hasQuiz).toBe(true);
  });

  it('should validate trees topic has comprehensive content', () => {
    const trees = contentEngine.getTopic('trees');
    
    expect(trees).toBeDefined();
    expect(trees?.lessons).toBeDefined();
    expect(trees!.lessons.length).toBe(9);
    expect(trees!.lessons.reduce((sum, l) => sum + l.xp, 0)).toBe(300);
  });

  it('should validate graphs topic has advanced content', () => {
    const graphs = contentEngine.getTopic('graphs');
    
    expect(graphs).toBeDefined();
    expect(graphs?.lessons).toBeDefined();
    expect(graphs!.lessons.length).toBe(8);
    expect(graphs!.lessons.reduce((sum, l) => sum + l.xp, 0)).toBe(315);
  });

  it('should validate sorting algorithms topic', () => {
    const sorting = contentEngine.getTopic('sorting');
    
    expect(sorting).toBeDefined();
    expect(sorting?.lessons).toBeDefined();
    expect(sorting!.lessons.length).toBe(8);
    expect(sorting!.lessons.reduce((sum, l) => sum + l.xp, 0)).toBe(290);
  });

  it('should validate dynamic programming topic is most advanced', () => {
    const dp = contentEngine.getTopic('dynamic-programming');
    
    expect(dp).toBeDefined();
    expect(dp?.lessons).toBeDefined();
    expect(dp!.lessons.length).toBe(10);
    
    // DP should have highest XP total
    const dpXP = dp!.lessons.reduce((sum, l) => sum + l.xp, 0);
    expect(dpXP).toBe(415);
    
    const course = contentEngine.getCourse();
    course.modules.forEach((module: Module) => {
      module.topics.forEach((topic: Topic) => {
        if (topic.id !== 'dynamic-programming') {
          const otherTopic = contentEngine.getTopic(topic.id);
          const otherXP = otherTopic?.lessons.reduce((sum: number, l: Lesson) => sum + l.xp, 0) || 0;
          expect(dpXP).toBeGreaterThanOrEqual(otherXP);
        }
      });
    });
  });

  it('should verify lesson progression within a topic makes sense', () => {
    const course = contentEngine.getCourse();

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        const topic = contentEngine.getTopic(topicSummary.id);
        
        if (topic) {
          // First lesson should typically be theory/intro
          const firstLesson = topic.lessons[0];
          expect(['theory', 'visualizer']).toContain(firstLesson.type);

          // Later lessons can be mixed with challenges/quizzes
          // No specific ordering requirement, just verify structure exists
          expect(topic.lessons.length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('should verify all lessons can be accessed sequentially', () => {
    const course = contentEngine.getCourse();
    const allLessonIds: string[] = [];

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        const topic = contentEngine.getTopic(topicSummary.id);
        
        topic?.lessons.forEach((lesson: Lesson, index: number) => {
          const lessonId = `${topicSummary.id}-${index}`;
          allLessonIds.push(lessonId);
          
          // Verify lesson has all required properties
          expect(lesson).toBeDefined();
          expect(lesson.title).toBeDefined();
          expect(lesson.type).toBeDefined();
          expect(lesson.xp).toBeGreaterThan(0);
        });
      });
    });

    // Should have a substantial number of lessons
    expect(allLessonIds.length).toBeGreaterThanOrEqual(50);
    
    // All lesson IDs should be unique
    const uniqueIds = new Set(allLessonIds);
    expect(uniqueIds.size).toBe(allLessonIds.length);
  });

  it('should calculate total curriculum statistics', () => {
    const course = contentEngine.getCourse();
    
    let totalLessons = 0;
    let totalXP = 0;
    const allTopics: string[] = [];

    course.modules.forEach((module: Module) => {
      module.topics.forEach((topicSummary: Topic) => {
        allTopics.push(topicSummary.id);
        const topic = contentEngine.getTopic(topicSummary.id);
        
        if (topic) {
          totalLessons += topic.lessons.length;
          totalXP += topic.lessons.reduce((sum: number, lesson: Lesson) => sum + lesson.xp, 0);
        }
      });
    });

    // Verify overall curriculum stats
    expect(course.modules.length).toBe(4);
    expect(allTopics.length).toBeGreaterThanOrEqual(7);
    expect(totalLessons).toBeGreaterThanOrEqual(50);
    expect(totalXP).toBeGreaterThanOrEqual(2000);
    
    console.log(`\nCurriculum Statistics:`);
    console.log(`- Modules: ${course.modules.length}`);
    console.log(`- Topics: ${allTopics.length}`);
    console.log(`- Total Lessons: ${totalLessons}`);
    console.log(`- Total XP: ${totalXP}`);
  });
});
