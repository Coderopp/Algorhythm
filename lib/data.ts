import { LessonQuestion } from "./types";

export const lessonData: LessonQuestion[] = [
  {
    id: 1,
    type: "quiz",
    question: "Which data structure operates on LIFO (Last In, First Out)?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correct: "Stack"
  },
  {
    id: 2,
    type: "parsons",
    question: "Arrange the code to print numbers 0 to 4.",
    blocks: ["print(i)", "for i in range(5):", "while i < 5:", "i++"],
    correctOrder: ["for i in range(5):", "print(i)"]
  },
  {
    id: 3,
    type: "bug",
    question: "Tap the line that causes an Infinite Loop.",
    codeLines: [
      "i = 0",
      "while i < 5:",
      "  print(i)",
      "  # forgot increment"
    ],
    correctLineIndex: 2
  },
  {
    id: 4,
    type: "quiz",
    question: "What is the time complexity of accessing an element in an Array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correct: "O(1)"
  },
  {
    id: 5,
    type: "parsons",
    question: "Construct a list containing even numbers from 0 to 8.",
    blocks: ["evens = []", "for i in range(10):", "if i % 2 == 0:", "evens.append(i)"],
    correctOrder: ["evens = []", "for i in range(10):", "if i % 2 == 0:", "evens.append(i)"]
  },
  {
    id: 6,
    type: "bug",
    question: "Identify the error in this Linked List node definition.",
    codeLines: [
      "class Node:",
      "  def __init__(self, data):",
      "    self.data = data",
      "    self.next = data  # Should be None"
    ],
    correctLineIndex: 3
  }
];
