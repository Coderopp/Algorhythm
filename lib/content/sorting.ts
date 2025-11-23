import { Topic } from "../schema";

export const sortingTopic: Topic = {
  id: "sorting",
  title: "Sorting Algorithms",
  description: "Master comparison and non-comparison sorting. From bubble sort to quicksort.",
  icon: "ArrowUpDown",
  totalXp: 350,
  progress: 0,
  color: "bg-pink-500",
  lessons: [
    {
      id: "bubble-sort",
      title: "Bubble Sort",
      type: "visualizer",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "Bubbling to the Top",
        explanation: "<b>Bubble Sort</b> repeatedly swaps adjacent elements if they're in wrong order. Simple but O(n²) time complexity.",
        visualizationSteps: [
          { step: 0, array: [5, 2, 8, 1, 9], pointers: { i: 0, j: 1 }, message: "Compare 5 and 2, swap", highlights: [0, 1] },
          { step: 1, array: [2, 5, 8, 1, 9], pointers: { i: 1, j: 2 }, message: "Compare 5 and 8, no swap", highlights: [1, 2] },
          { step: 2, array: [2, 5, 8, 1, 9], pointers: { i: 2, j: 3 }, message: "Compare 8 and 1, swap", highlights: [2, 3] },
          { step: 3, array: [2, 5, 1, 8, 9], pointers: { i: 0, j: 1 }, message: "Next pass: compare 2 and 5", highlights: [0, 1] },
          { step: 4, array: [1, 2, 5, 8, 9], pointers: {}, message: "Sorted!", highlights: [] }
        ]
      }
    },
    {
      id: "selection-sort",
      title: "Selection Sort",
      type: "visualizer",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Select the Minimum",
        explanation: "<b>Selection Sort</b> finds minimum element and swaps it to the front. O(n²) but fewer swaps than bubble sort.",
        visualizationSteps: [
          { step: 0, array: [5, 2, 8, 1, 9], pointers: { min: 3 }, message: "Find minimum: 1 at index 3", highlights: [3] },
          { step: 1, array: [1, 2, 8, 5, 9], pointers: { min: 1 }, message: "Swap to front. Next: find min in [2,8,5,9]", highlights: [0] },
          { step: 2, array: [1, 2, 8, 5, 9], pointers: { min: 1 }, message: "Min is 2, already in place", highlights: [1] },
          { step: 3, array: [1, 2, 5, 8, 9], pointers: { min: 3 }, message: "Find min: 5, swap with 8", highlights: [2] },
          { step: 4, array: [1, 2, 5, 8, 9], pointers: {}, message: "Sorted!", highlights: [] }
        ]
      }
    },
    {
      id: "insertion-sort",
      title: "Insertion Sort",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Insert into Sorted Position",
        explanation: "<b>Insertion Sort</b> builds sorted array one element at a time by inserting into correct position. Efficient for small/nearly sorted data.",
        code: "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key",
        visualizationSteps: [
          { step: 0, array: [5, 2, 8, 1, 9], pointers: { i: 1 }, message: "Start at index 1: key=2", highlights: [1] },
          { step: 1, array: [2, 5, 8, 1, 9], pointers: { i: 1 }, message: "Insert 2 before 5", highlights: [0, 1] },
          { step: 2, array: [2, 5, 8, 1, 9], pointers: { i: 3 }, message: "key=1, shift all right", highlights: [3] },
          { step: 3, array: [1, 2, 5, 8, 9], pointers: {}, message: "Sorted!", highlights: [] }
        ]
      }
    },
    {
      id: "merge-sort",
      title: "Merge Sort",
      type: "theory",
      duration: "7 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Divide and Conquer",
        explanation: "<b>Merge Sort</b> recursively divides array in half, sorts each half, then merges. O(n log n) time, stable sort.",
        code: "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    \n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    \n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] < right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result"
      }
    },
    {
      id: "quick-sort",
      title: "Quick Sort",
      type: "theory",
      duration: "7 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Partition Around Pivot",
        explanation: "<b>Quick Sort</b> picks pivot, partitions array so smaller elements are left, larger are right. Recursively sort partitions. Average O(n log n).",
        code: "def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1"
      }
    },
    {
      id: "sorting-comparison",
      title: "Sorting Algorithm Comparison",
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
            prompt: "Which sorting algorithm has best average time complexity?",
            data: { options: ["Bubble Sort O(n²)", "Merge Sort O(n log n)", "Selection Sort O(n²)", "Insertion Sort O(n²)"] },
            correctAnswer: "Merge Sort O(n log n)"
          },
          {
            id: 2,
            type: "multiple-choice",
            prompt: "Which is a stable sort (maintains relative order of equal elements)?",
            data: { options: ["Merge Sort", "Quick Sort", "Selection Sort", "Heap Sort"] },
            correctAnswer: "Merge Sort"
          },
          {
            id: 3,
            type: "multiple-choice",
            prompt: "For nearly sorted data, which is most efficient?",
            data: { options: ["Insertion Sort", "Quick Sort", "Merge Sort", "Bubble Sort"] },
            correctAnswer: "Insertion Sort"
          }
        ]
      }
    },
    {
      id: "counting-sort",
      title: "Counting Sort (Non-Comparison)",
      type: "theory",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "O(n+k) Linear Time Sort",
        explanation: "<b>Counting Sort</b> counts occurrences of each value. Works for integers in limited range. O(n+k) time where k is range.",
        code: "def counting_sort(arr):\n    max_val = max(arr)\n    count = [0] * (max_val + 1)\n    \n    for num in arr:\n        count[num] += 1\n    \n    result = []\n    for i, c in enumerate(count):\n        result.extend([i] * c)\n    return result"
      }
    },
    {
      id: "sorting-challenge",
      title: "Challenge: Custom Sort",
      type: "challenge",
      duration: "12 min",
      xp: 60,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "To sort strings by length, which Python function should you use?",
            data: { options: ["sorted(arr, key=len)", "arr.sort()", "sorted(arr)", "arr.reverse()"] },
            correctAnswer: "sorted(arr, key=len)"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Sort list of tuples by second element:",
            data: { placeholder: "sorted(data, key=lambda x: ___)" },
            correctAnswer: "x[1]"
          }
        ]
      }
    }
  ]
};
