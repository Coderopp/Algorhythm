import { Topic } from "../schema";

export const treesTopic: Topic = {
  id: "trees",
  title: "Trees",
  description: "Hierarchical data structures. Binary trees, BSTs, heaps, and traversals.",
  icon: "GitBranch",
  totalXp: 400,
  progress: 0,
  color: "bg-green-500",
  lessons: [
    {
      id: "tree-intro",
      title: "Introduction to Trees",
      type: "visualizer",
      duration: "4 min",
      xp: 20,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "What is a Tree?",
        explanation: "A <b>Tree</b> is a hierarchical data structure with a root node and child nodes. Each node can have multiple children, forming a parent-child relationship.",
        code: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\nroot = TreeNode(10)\nroot.left = TreeNode(5)\nroot.right = TreeNode(15)",
        visualizationSteps: [
          { step: 0, array: [10], pointers: { root: 0 }, message: "Root node with value 10", highlights: [0] },
          { step: 1, array: [10, 5], pointers: { root: 0, left: 1 }, message: "Add left child (5)", highlights: [0, 1] },
          { step: 2, array: [10, 5, 15], pointers: { root: 0, left: 1, right: 2 }, message: "Add right child (15)", highlights: [0, 2] },
          { step: 3, array: [10, 5, 15], pointers: {}, message: "Binary tree complete!", highlights: [] }
        ]
      }
    },
    {
      id: "binary-tree",
      title: "Binary Trees",
      type: "visualizer",
      duration: "4 min",
      xp: 20,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Binary Tree Structure",
        explanation: "A <b>Binary Tree</b> is a tree where each node has at most two children: left and right. Important properties: height, depth, and balance.",
        code: "# Binary Tree Example\n#       10\n#      /  \\\n#     5    15\n#    / \\\n#   3   7",
        visualizationSteps: [
          { step: 0, array: [10], pointers: {}, message: "Level 0: Root (10)", highlights: [0] },
          { step: 1, array: [10, 5, 15], pointers: {}, message: "Level 1: Children (5, 15)", highlights: [1, 2] },
          { step: 2, array: [10, 5, 15, 3, 7], pointers: {}, message: "Level 2: Grandchildren (3, 7)", highlights: [3, 4] },
          { step: 3, array: [10, 5, 15, 3, 7], pointers: {}, message: "Complete binary tree!", highlights: [] }
        ]
      }
    },
    {
      id: "tree-traversal-preorder",
      title: "Preorder Traversal",
      type: "visualizer",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Root → Left → Right",
        explanation: "<b>Preorder</b> visits nodes in this order: Root, Left subtree, Right subtree. Useful for copying trees.",
        visualizationSteps: [
          { step: 0, array: [10, 5, 15, 3, 7], pointers: { current: 0 }, message: "Visit root (10)", highlights: [0] },
          { step: 1, array: [10, 5, 15, 3, 7], pointers: { current: 1 }, message: "Visit left child (5)", highlights: [1] },
          { step: 2, array: [10, 5, 15, 3, 7], pointers: { current: 3 }, message: "Visit left-left (3)", highlights: [3] },
          { step: 3, array: [10, 5, 15, 3, 7], pointers: { current: 4 }, message: "Visit left-right (7)", highlights: [4] },
          { step: 4, array: [10, 5, 15, 3, 7], pointers: { current: 2 }, message: "Visit right child (15)", highlights: [2] }
        ]
      }
    },
    {
      id: "tree-traversal-inorder",
      title: "Inorder Traversal",
      type: "visualizer",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Left → Root → Right",
        explanation: "<b>Inorder</b> visits nodes in this order: Left subtree, Root, Right subtree. For BST, gives sorted order.",
        visualizationSteps: [
          { step: 0, array: [10, 5, 15, 3, 7], pointers: { current: 3 }, message: "Visit leftmost (3)", highlights: [3] },
          { step: 1, array: [10, 5, 15, 3, 7], pointers: { current: 1 }, message: "Visit parent (5)", highlights: [1] },
          { step: 2, array: [10, 5, 15, 3, 7], pointers: { current: 4 }, message: "Visit right (7)", highlights: [4] },
          { step: 3, array: [10, 5, 15, 3, 7], pointers: { current: 0 }, message: "Visit root (10)", highlights: [0] },
          { step: 4, array: [10, 5, 15, 3, 7], pointers: { current: 2 }, message: "Visit right (15)", highlights: [2] }
        ]
      }
    },
    {
      id: "tree-traversal-postorder",
      title: "Postorder Traversal",
      type: "theory",
      duration: "4 min",
      xp: 20,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Left → Right → Root",
        explanation: "<b>Postorder</b> visits nodes in this order: Left subtree, Right subtree, Root. Useful for deleting trees.",
        code: "def postorder(node):\n    if node:\n        postorder(node.left)\n        postorder(node.right)\n        print(node.val)  # Visit root last"
      }
    },
    {
      id: "bst-intro",
      title: "Binary Search Trees",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "BST Property",
        explanation: "A <b>Binary Search Tree (BST)</b> maintains the property: left child < parent < right child. Enables O(log n) search in balanced trees.",
        code: "# BST Example: left < parent < right\n#       10\n#      /  \\\n#     5    15\n#    / \\   / \\\n#   3   7 12  20",
        visualizationSteps: [
          { step: 0, array: [10], pointers: {}, message: "Root: 10", highlights: [0] },
          { step: 1, array: [10, 5, 15], pointers: {}, message: "5 < 10, goes left. 15 > 10, goes right", highlights: [1, 2] },
          { step: 2, array: [10, 5, 15, 3, 7], pointers: {}, message: "3 < 5 (left), 7 > 5 (right)", highlights: [3, 4] },
          { step: 3, array: [10, 5, 15, 3, 7, 12, 20], pointers: {}, message: "12 < 15 (left), 20 > 15 (right)", highlights: [5, 6] }
        ]
      }
    },
    {
      id: "bst-operations",
      title: "BST Search & Insert",
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
            prompt: "What's the average time complexity for search in a balanced BST?",
            data: { options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"] },
            correctAnswer: "O(log n)"
          },
          {
            id: 2,
            type: "multiple-choice",
            prompt: "In a BST, to find minimum value you should go:",
            data: { options: ["Always left", "Always right", "Root", "Middle"] },
            correctAnswer: "Always left"
          },
          {
            id: 3,
            type: "parsons",
            prompt: "Arrange code for BST insertion:",
            data: {
              blocks: [
                "if not root:",
                "    return TreeNode(val)",
                "if val < root.val:",
                "    root.left = insert(root.left, val)",
                "else:",
                "    root.right = insert(root.right, val)",
                "return root"
              ]
            },
            correctAnswer: [
              "if not root:",
              "    return TreeNode(val)",
              "if val < root.val:",
              "    root.left = insert(root.left, val)",
              "else:",
              "    root.right = insert(root.right, val)",
              "return root"
            ]
          }
        ]
      }
    },
    {
      id: "heap-intro",
      title: "Heaps & Priority Queues",
      type: "theory",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Heap Data Structure",
        explanation: "A <b>Heap</b> is a complete binary tree with heap property: parent ≥ children (max heap) or parent ≤ children (min heap). Used for priority queues.",
        code: "import heapq\nheap = []\nheapq.heappush(heap, 10)\nheapq.heappush(heap, 5)\nmin_val = heapq.heappop(heap)  # Returns 5"
      }
    },
    {
      id: "tree-challenge",
      title: "Challenge: Tree Height",
      type: "challenge",
      duration: "15 min",
      xp: 80,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "code-input",
            prompt: "Write recursive function to find tree height:",
            data: { placeholder: "def height(node):\n    if not node:\n        return ___\n    return 1 + max(___)" },
            correctAnswer: "return 0\nreturn 1 + max(height(node.left), height(node.right))"
          }
        ]
      }
    }
  ]
};
