import { Topic } from "../../schema";

export const backtrackingTopic: Topic = {
  id: "backtracking",
  title: "Backtracking",
  description: "Master backtracking techniques and algorithms.",
  icon: "ArrowLeftRight",
  totalXp: 600,
  progress: 0,
  color: "bg-cyan-500",
  lessons: [
    {
        "id": "combination-sum",
        "title": "Combination Sum",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Combination Sum",
            "explanation": "Recursively exploring all combinations\n\nFor the backtracking step, we remove the last number from the current combination and try the next candidate. This process continues until we have tried all the candidates.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0,
                        2
                    ],
                    "pointers": {},
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        1,
                        12
                    ],
                    "pointers": {},
                    "message": "Step 2",
                    "highlights": [
                        1
                    ]
                },
                {
                    "step": 2,
                    "array": [
                        12,
                        15
                    ],
                    "pointers": {},
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                }
            ]
        }
    },
    {
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "The algorithm starts with \\\n\nThis problem is a good backtracking candidate because it requires exploring all root-to-leaf paths to see if they sum to the given target.\n\nGiven a binary tree where all nodes have positive, integer values and a target sum, find all root-to-leaf paths where the sum of the values along the path equals the given sum.\n\nLet's now look at an example of how to use Depth-First Search to solve backtracking problems.\n\nIt finds a solution for the problem by exploring all possible paths.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        8,
                        12
                    ],
                    "pointers": {},
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        15,
                        19
                    ],
                    "pointers": {},
                    "message": "Step 2",
                    "highlights": [
                        1
                    ]
                }
            ]
        }
    },
    {
        "id": "generate-parentheses",
        "title": "Generate Parentheses",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Generate Parentheses",
            "explanation": ""
        }
    },
    {
        "id": "word-search",
        "title": "Word Search",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Word Search",
            "explanation": ""
        }
    },
    {
        "id": "subsets",
        "title": "Subsets",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Subsets",
            "explanation": "Step 1 (first element)\n\nStep 3 (third element)\n\nThe solution set must not contain duplicate subsets, and the subsets can be returned in any order.\n\nThis gives us two possible subsets:\n\n[[], [1], [2], [1, 2]]",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        2,
                        3
                    ],
                    "pointers": {
                        "index": "2"
                    },
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        1
                    ],
                    "pointers": {
                        "index": "2"
                    },
                    "message": "Step 2",
                    "highlights": [
                        1
                    ]
                },
                {
                    "step": 2,
                    "array": [
                        1
                    ],
                    "pointers": {
                        "index": "2"
                    },
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                },
                {
                    "step": 3,
                    "array": [
                        1
                    ],
                    "pointers": {
                        "index": "2"
                    },
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                },
                {
                    "step": 4,
                    "array": [
                        2
                    ],
                    "pointers": {
                        "index": "2"
                    },
                    "message": "Step 5",
                    "highlights": [
                        4
                    ]
                }
            ]
        }
    },
    {
        "id": "solution-space-trees",
        "title": "Solution Space Trees",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Solution Space Trees",
            "explanation": "The total number of nodes is 1 + 4 + 4\u00c2\u00b2 + ... + 4\u00e2\u0081\u00bf, which is asymptotically O(4\u00e2\u0081\u00bf).\n\nDefining the Recursive Function\n\nFinally, in the main function, we kick off the call to our recursive function with the empty string and the index 0 (the root node of our tree).\n\nNow that we can visualize the \\\n\nSo how do we do so without an explicit tree to traverse? Let's break it down."
        }
    }
]
};
