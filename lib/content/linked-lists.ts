import { Topic } from "../schema";

export const linkedListsTopic: Topic = {
  id: "linked-lists",
  title: "Linked Lists",
  description: "Dynamic data structures with nodes and pointers. Master traversal and manipulation.",
  icon: "Link",
  totalXp: 300,
  progress: 0,
  color: "bg-purple-500",
  lessons: [
    {
      id: "ll-intro",
      title: "Introduction to Linked Lists",
      type: "visualizer",
      duration: "3 min",
      xp: 15,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "What is a Linked List?",
        explanation: "A <b>Linked List</b> is a linear data structure where elements (nodes) are not stored contiguously. Each node contains data and a reference (pointer) to the next node.",
        code: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nhead = Node(10)\nhead.next = Node(20)",
        visualizationSteps: [
          { step: 0, array: [10], pointers: {}, message: "Single node with value 10", highlights: [0] },
          { step: 1, array: [10, 20], pointers: { next: 1 }, message: "Link second node (20)", highlights: [0, 1] },
          { step: 2, array: [10, 20, 30], pointers: { next: 2 }, message: "Add third node (30)", highlights: [1, 2] },
          { step: 3, array: [10, 20, 30], pointers: {}, message: "Linked list complete!", highlights: [] }
        ]
      }
    },
    {
      id: "ll-traversal",
      title: "Traversing a Linked List",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Walking Through Nodes",
        explanation: "To traverse a linked list, start at the head and follow the <code>next</code> pointers until you reach <code>None</code>.",
        visualizationSteps: [
          { step: 0, array: [10, 20, 30], pointers: { current: 0 }, message: "Start at head (10)", highlights: [0] },
          { step: 1, array: [10, 20, 30], pointers: { current: 1 }, message: "Move to next node (20)", highlights: [1] },
          { step: 2, array: [10, 20, 30], pointers: { current: 2 }, message: "Move to next node (30)", highlights: [2] },
          { step: 3, array: [10, 20, 30], pointers: {}, message: "Reached end (None)", highlights: [] }
        ]
      }
    },
    {
      id: "ll-insertion",
      title: "Insertion Operations",
      type: "quiz",
      duration: "8 min",
      xp: 40,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "What's the time complexity to insert at the beginning of a linked list?",
            data: { options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"] },
            correctAnswer: "O(1)"
          },
          {
            id: 2,
            type: "bug-fix",
            prompt: "Find the bug in this insertion code:",
            data: { 
              code: [
                "def insert_at_head(head, data):",
                "    new_node = Node(data)",
                "    new_node.next = head.next  # BUG: should be head",
                "    return new_node"
              ]
            },
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: "ll-deletion",
      title: "Deletion Operations",
      type: "quiz",
      duration: "8 min",
      xp: 40,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "To delete a node in the middle of a singly linked list, what do you need?",
            data: { options: ["Just the node to delete", "The previous node", "The next node", "The head"] },
            correctAnswer: "The previous node"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Write code to delete the head node and return the new head:",
            data: { placeholder: "def delete_head(head):\n    ..." },
            correctAnswer: "return head.next"
          }
        ]
      }
    },
    {
      id: "ll-reversal",
      title: "Reversing a Linked List",
      type: "challenge",
      duration: "12 min",
      xp: 60,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "parsons",
            prompt: "Arrange the code to reverse a linked list iteratively:",
            data: { 
              blocks: [
                "prev = None",
                "current = head",
                "while current:",
                "    next_temp = current.next",
                "    current.next = prev",
                "    prev = current",
                "    current = next_temp",
                "return prev"
              ]
            },
            correctAnswer: [
              "prev = None",
              "current = head",
              "while current:",
              "    next_temp = current.next",
              "    current.next = prev",
              "    prev = current",
              "    current = next_temp",
              "return prev"
            ]
          }
        ]
      }
    }
  ]
};
