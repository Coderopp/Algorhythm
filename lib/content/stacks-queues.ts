import { Topic } from "../schema";

export const stacksQueuesTopic: Topic = {
  id: "stacks-queues",
  title: "Stacks & Queues",
  description: "LIFO and FIFO data structures. Essential for algorithms and system design.",
  icon: "Layers",
  totalXp: 280,
  progress: 0,
  color: "bg-orange-500",
  lessons: [
    {
      id: "stack-intro",
      title: "Stack Fundamentals",
      type: "visualizer",
      duration: "3 min",
      xp: 15,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "What is a Stack?",
        explanation: "A <b>Stack</b> is a LIFO (Last In, First Out) data structure. Think of a stack of plates - you add and remove from the top.",
        code: "stack = []\nstack.append(10)  # Push\nstack.append(20)\ntop = stack.pop()  # Pop, returns 20",
        visualizationSteps: [
          { step: 0, array: [], pointers: {}, message: "Empty stack", highlights: [] },
          { step: 1, array: [10], pointers: { top: 0 }, message: "Push 10 onto stack", highlights: [0] },
          { step: 2, array: [10, 20], pointers: { top: 1 }, message: "Push 20 onto stack (top)", highlights: [1] },
          { step: 3, array: [10], pointers: { top: 0 }, message: "Pop → returns 20", highlights: [0] }
        ]
      }
    },
    {
      id: "stack-operations",
      title: "Stack Operations",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Push, Pop, and Peek",
        explanation: "Main operations: <b>push</b> (add to top), <b>pop</b> (remove from top), <b>peek</b> (view top without removing).",
        visualizationSteps: [
          { step: 0, array: [], pointers: {}, message: "Empty stack", highlights: [] },
          { step: 1, array: [10], pointers: { top: 0 }, message: "Push 10", highlights: [0] },
          { step: 2, array: [10, 20], pointers: { top: 1 }, message: "Push 20", highlights: [1] },
          { step: 3, array: [10, 20, 30], pointers: { top: 2 }, message: "Push 30", highlights: [2] },
          { step: 4, array: [10, 20], pointers: { top: 1 }, message: "Pop → 30", highlights: [1] }
        ]
      }
    },
    {
      id: "queue-intro",
      title: "Queue Fundamentals",
      type: "visualizer",
      duration: "3 min",
      xp: 15,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "What is a Queue?",
        explanation: "A <b>Queue</b> is a FIFO (First In, First Out) data structure. Like a line at a store - first person in is first served.",
        code: "from collections import deque\nqueue = deque()\nqueue.append(10)  # Enqueue\nqueue.append(20)\nfront = queue.popleft()  # Dequeue, returns 10",
        visualizationSteps: [
          { step: 0, array: [], pointers: {}, message: "Empty queue", highlights: [] },
          { step: 1, array: [10], pointers: { front: 0, rear: 0 }, message: "Enqueue 10", highlights: [0] },
          { step: 2, array: [10, 20], pointers: { front: 0, rear: 1 }, message: "Enqueue 20", highlights: [1] },
          { step: 3, array: [20], pointers: { front: 0, rear: 0 }, message: "Dequeue → returns 10", highlights: [0] }
        ]
      }
    },
    {
      id: "queue-operations",
      title: "Queue Operations",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Enqueue and Dequeue",
        explanation: "Main operations: <b>enqueue</b> (add to rear), <b>dequeue</b> (remove from front).",
        visualizationSteps: [
          { step: 0, array: [], pointers: {}, message: "Empty queue", highlights: [] },
          { step: 1, array: [10], pointers: { front: 0 }, message: "Enqueue 10", highlights: [0] },
          { step: 2, array: [10, 20], pointers: { front: 0 }, message: "Enqueue 20", highlights: [1] },
          { step: 3, array: [10, 20, 30], pointers: { front: 0 }, message: "Enqueue 30", highlights: [2] },
          { step: 4, array: [20, 30], pointers: { front: 0 }, message: "Dequeue → 10", highlights: [0] }
        ]
      }
    },
    {
      id: "stack-queue-quiz",
      title: "Stack & Queue Mastery",
      type: "quiz",
      duration: "10 min",
      xp: 50,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "Which data structure would you use for browser back button?",
            data: { options: ["Stack", "Queue", "Array", "Linked List"] },
            correctAnswer: "Stack"
          },
          {
            id: 2,
            type: "multiple-choice",
            prompt: "Which data structure is best for BFS (Breadth-First Search)?",
            data: { options: ["Stack", "Queue", "Heap", "Tree"] },
            correctAnswer: "Queue"
          },
          {
            id: 3,
            type: "bug-fix",
            prompt: "Find the bug in this stack implementation:",
            data: {
              code: [
                "class Stack:",
                "    def __init__(self):",
                "        self.items = []",
                "    def push(self, item):",
                "        self.items.insert(0, item)  # BUG: should use append",
                "    def pop(self):",
                "        return self.items.pop()"
              ]
            },
            correctAnswer: 4
          }
        ]
      }
    },
    {
      id: "balanced-parens",
      title: "Challenge: Balanced Parentheses",
      type: "challenge",
      duration: "15 min",
      xp: 80,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "To check balanced parentheses '({[]})' you should use:",
            data: { options: ["Stack", "Queue", "Array", "Dictionary"] },
            correctAnswer: "Stack"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Complete: Push opening bracket, when you see closing bracket...",
            data: { placeholder: "if stack and stack[-1] matches:\n    ..." },
            correctAnswer: "stack.pop()"
          }
        ]
      }
    }
  ]
};
