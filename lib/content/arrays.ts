import { Topic } from "../schema";

export const arraysTopic: Topic = {
  id: "arrays",
  title: "Arrays",
  description: "The foundation of data structures. Learn how to store and access data efficiently.",
  icon: "Grid", // Lucide icon name
  totalXp: 150,
  progress: 0,
  color: "bg-blue-500",
  lessons: [
    {
      id: "arrays-101",
      title: "What is an Array?",
      type: "theory",
      duration: "2 min",
      xp: 10,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "Understanding Arrays",
        explanation: "An <b>Array</b> is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.",
        code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[0]) # Output: 10"
      }
    },
    {
      id: "arrays-visualizer",
      title: "Visualizing Access",
      type: "visualizer",
      duration: "5 min",
      xp: 20,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "O(1) Access",
        explanation: "Arrays allow random access. This means you can jump to any element instantly if you know its index.",
        visualizationSteps: [
          { step: 0, array: [10, 20, 30, 40, 50], pointers: { i: 0 }, message: "Index 0 points to 10", highlights: [0] },
          { step: 1, array: [10, 20, 30, 40, 50], pointers: { i: 2 }, message: "Index 2 points to 30", highlights: [2] },
          { step: 2, array: [10, 20, 30, 40, 50], pointers: { i: 4 }, message: "Index 4 points to 50", highlights: [4] }
        ]
      }
    },
    {
      id: "arrays-quiz",
      title: "Array Mastery Quiz",
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
            prompt: "What is the time complexity to access an element in an array by index?",
            data: { options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"] },
            correctAnswer: "O(1)"
          },
          {
            id: 2,
            type: "parsons",
            prompt: "Create an array with numbers 1 to 3.",
            data: { blocks: ["nums", "=", "[1, 2, 3]"] },
            correctAnswer: ["nums", "=", "[1, 2, 3]"]
          },
          {
            id: 3,
            type: "code-input",
            prompt: "Type the code to create an empty list named 'items'.",
            data: { placeholder: "items = ..." },
            correctAnswer: "items = []"
          }
        ]
      }
    },
    {
      id: "array-insertion",
      title: "Insertion & Deletion",
      type: "visualizer",
      duration: "4 min",
      xp: 20,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Modifying Arrays",
        explanation: "Inserting or deleting in the middle of an array requires shifting elements. Time complexity: O(n). Appending to end is O(1) amortized.",
        code: "arr = [1, 2, 3, 5]\narr.insert(3, 4)  # Insert 4 at index 3: O(n)\nprint(arr)  # [1, 2, 3, 4, 5]\n\narr.pop(2)  # Remove index 2: O(n)\nprint(arr)  # [1, 2, 4, 5]\n\narr.append(6)  # Append to end: O(1)\nprint(arr)  # [1, 2, 4, 5, 6]",
        visualizationSteps: [
          { step: 0, array: [1, 2, 3, 5], pointers: { insert: 3 }, message: "Insert 4 at index 3", highlights: [3] },
          { step: 1, array: [1, 2, 3, 5, 5], pointers: {}, message: "Shift 5 to the right", highlights: [3, 4] },
          { step: 2, array: [1, 2, 3, 4, 5], pointers: {}, message: "Place 4 at index 3", highlights: [3] },
          { step: 3, array: [1, 2, 3, 4, 5, 6], pointers: {}, message: "Append 6: O(1)", highlights: [5] }
        ]
      }
    },
    {
      id: "two-pointers",
      title: "Two Pointers Technique",
      type: "challenge",
      duration: "6 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Efficient Array Traversal",
        explanation: "Use two pointers moving towards each other or in same direction. Great for finding pairs, reversing, removing duplicates.",
        code: "# Reverse array using two pointers\ndef reverse_array(arr):\n    left, right = 0, len(arr) - 1\n    \n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    \n    return arr\n\nprint(reverse_array([1, 2, 3, 4, 5]))  # [5, 4, 3, 2, 1]",
        visualizationSteps: [
          { step: 0, array: [1, 2, 3, 4, 5], pointers: { left: 0, right: 4 }, message: "Two pointers at ends", highlights: [0, 4] },
          { step: 1, array: [1, 2, 3, 4, 5], pointers: { left: 1, right: 3 }, message: "Move pointers inward", highlights: [1, 3] },
          { step: 2, array: [1, 2, 3, 4, 5], pointers: { left: 2, right: 2 }, message: "Pointers meet in middle", highlights: [2] },
          { step: 3, array: [5, 4, 3, 2, 1], pointers: {}, message: "Array reversed!", highlights: [] }
        ],
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "What is the time complexity of reversing array with two pointers?",
            data: { options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"] },
            correctAnswer: "O(n)"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Complete the condition: while left ___ right:",
            data: { placeholder: "while left ___ right:" },
            correctAnswer: "left < right"
          }
        ]
      }
    },
    {
      id: "sliding-window",
      title: "Sliding Window Pattern",
      type: "theory",
      duration: "6 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Fixed or Dynamic Window",
        explanation: "Sliding window maintains a subarray window. Move right edge to expand, left edge to shrink. Optimal for subarray problems.",
        code: "# Max sum of k consecutive elements\ndef max_sum_k(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    \n    for i in range(k, len(arr)):\n        window_sum = window_sum - arr[i-k] + arr[i]\n        max_sum = max(max_sum, window_sum)\n    \n    return max_sum\n\nprint(max_sum_k([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))  # 39"
      }
    },
    {
      id: "2d-arrays",
      title: "2D Arrays (Matrix)",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Arrays of Arrays",
        explanation: "2D arrays (matrices) store data in rows and columns. Access: matrix[row][col]. Common in grids, images, graphs.",
        code: "# Create 3x3 matrix\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\nprint(matrix[1][2])  # 6\n\n# Traverse matrix\nfor row in matrix:\n    for val in row:\n        print(val, end=' ')\n\n# Output: 6\n# Output: 1 2 3 4 5 6 7 8 9",
        visualizationSteps: [
          { step: 0, array: [1, 2, 3], pointers: {}, message: "Row 0: [1, 2, 3]", highlights: [0, 1, 2] },
          { step: 1, array: [4, 5, 6], pointers: { i: 2 }, message: "Access matrix[1][2] = 6", highlights: [2] },
          { step: 2, array: [7, 8, 9], pointers: {}, message: "Row 2: [7, 8, 9]", highlights: [0, 1, 2] },
          { step: 3, array: [1, 2, 3, 4, 5, 6, 7, 8, 9], pointers: {}, message: "Traversed all elements: 1 2 3 4 5 6 7 8 9", highlights: [] }
        ]
      }
    },
    {
      id: "array-challenge",
      title: "Challenge: Remove Duplicates",
      type: "challenge",
      duration: "12 min",
      xp: 60,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Remove Duplicates from Sorted Array",
        explanation: "Given a sorted array, remove duplicates in-place. Return the new length. Use two pointers: one for reading, one for writing unique elements.",
        code: "# Remove duplicates in-place\ndef remove_duplicates(nums):\n    if not nums:\n        return 0\n    \n    write = 1\n    for read in range(1, len(nums)):\n        if nums[read] != nums[read - 1]:\n            nums[write] = nums[read]\n            write += 1\n    \n    return write\n\narr = [1, 1, 2, 2, 3, 4, 4]\nlength = remove_duplicates(arr)\nprint(arr[:length])  # [1, 2, 3, 4]",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "To remove duplicates from sorted array in-place, use:",
            data: { options: ["Two pointers", "Hash set", "Sort again", "Binary search"] },
            correctAnswer: "Two pointers"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Complete the condition to detect unique element:",
            data: { placeholder: "if nums[read] != nums[___]:" },
            correctAnswer: "nums[read] != nums[read - 1]"
          },
          {
            id: 3,
            type: "multiple-choice",
            prompt: "What is the time complexity of this solution?",
            data: { options: ["O(n)", "O(n^2)", "O(n log n)", "O(1)"] },
            correctAnswer: "O(n)"
          }
        ]
      }
    }
  ]
};
