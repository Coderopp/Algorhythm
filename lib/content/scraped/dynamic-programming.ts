import { Topic } from "../../schema";

export const dynamic_programmingTopic: Topic = {
  id: "dynamic-programming",
  title: "Dynamic Programming (Advanced)",
  description: "Master dynamic programming techniques and algorithms.",
  icon: "Zap",
  totalXp: 900,
  progress: 0,
  color: "bg-amber-500",
  lessons: [
    {
        "id": "maximum-profit-in-job-scheduling",
        "title": "Maximum Profit in Job Scheduling",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Maximum Profit in Job Scheduling",
            "explanation": "Skipping the current job\n\nOnce we have this index, we have two options:\n\nFinding the latest job ending before the start time of the current job\n\nCalculating the maximum profit that can be earned by scheduling the first job",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0
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
                        0,
                        3
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
                        2,
                        5
                    ],
                    "pointers": {},
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                },
                {
                    "step": 3,
                    "array": [
                        4,
                        6
                    ],
                    "pointers": {},
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                },
                {
                    "step": 4,
                    "array": [
                        5,
                        9
                    ],
                    "pointers": {},
                    "message": "Step 5",
                    "highlights": [
                        4
                    ]
                }
            ]
        }
    },
    {
        "id": "fundamentals",
        "title": "Fundamentals",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Fundamentals",
            "explanation": "We can visualize that process as a tree, where each node represents a choice of either 1 or 2 steps, and each root-to-leaf path represents a different combination of steps to climb the stairs.\n\nThe 8 different ways to climb 5 steps are shown by the root-to-leaf paths.\n\nIn this section, we'll learn about dynamic programming by looking at a classic dynamic programming problem. We'll start with the brute-force solution and gradually optimize it using key dynamic programming concepts.\n\n1st way: 1 step + 1 step + 1 step\\n2nd way: 1 step + 2 steps\\n3rd way: 2 steps + 1 step\n\nThe brute-force solution to this problem tries every possible combination of 1 or 2 steps to climb the stairs and counts the ones that successfully reach the top step.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0
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
                        1
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
                        0
                    ],
                    "pointers": {},
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
                    "pointers": {},
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                }
            ]
        }
    },
    {
        "id": "maximal-square",
        "title": "Maximal Square",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Maximal Square",
            "explanation": "bottom-up dynamic programming\n\nmatrix[i - 1][j - 1] = 1",
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
                        2,
                        5
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
                        33,
                        36
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
        "id": "counting-bits",
        "title": "Counting Bits",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Counting Bits",
            "explanation": "Computing number of 1s in binary for i = 1, 2, and 3\n\nTo figure out the appropriate recurrence relationship, let's consider the binary representation of a number.\n\nFor the number 8, the rest of the bits is also equal to 8 // 2 = 4 in binary.\n\nFor example, we can split the number 9 in binary into two parts: the least significant bit (rightmost bit) and the rest of the bits. The rest of the bits are highlighted in green below, and is equal to 9 // 2 = 4 in binary.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        8
                    ],
                    "pointers": {
                        "i": "1"
                    },
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                }
            ]
        }
    },
    {
        "id": "decode-ways",
        "title": "Decode Ways",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Decode Ways",
            "explanation": "Handling a single digit.\n\nHandling a double digit.\n\nThere may be multiple ways to decode a string. For example, \\\n\nbotton-up dynamic programming\n\nExplanation: The only way to decode it is \\",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0
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
                        1
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
                        0,
                        2
                    ],
                    "pointers": {},
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                },
                {
                    "step": 3,
                    "array": [
                        2,
                        5
                    ],
                    "pointers": {},
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                },
                {
                    "step": 4,
                    "array": [
                        13,
                        15
                    ],
                    "pointers": {},
                    "message": "Step 5",
                    "highlights": [
                        4
                    ]
                }
            ]
        }
    },
    {
        "id": "longest-increasing-subsequence",
        "title": "Longest Increasing Subsequence",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Longest Increasing Subsequence",
            "explanation": "bottom-up dynamic programming",
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
                        2,
                        8
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
        "id": "solving-a-question-with-dynamic-programming",
        "title": "Solving a Question with Dynamic Programming",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Solving a Question with Dynamic Programming",
            "explanation": "Find the Recurrence Relation\n\nExplanation: Collect from houses 0, 2, and 4 for a total of 3 + 4 + 5 = 12.\n\nWrite the Recursive Solution\n\nWhy Dynamic Programming?\n\nThis page breaks down how to solve a question with dynamic programming into a series of steps which ultimately leads to the \\",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
                        1,
                        4,
                        1,
                        5
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
                        6
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
        "id": "unique-paths",
        "title": "Unique Paths",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Unique Paths",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3
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
                        2
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
                        3
                    ],
                    "pointers": {},
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
                    "pointers": {},
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
                    "pointers": {},
                    "message": "Step 5",
                    "highlights": [
                        4
                    ]
                }
            ]
        }
    },
    {
        "id": "word-break",
        "title": "Word Break",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Word Break",
            "explanation": "bottom-up dynamic programming\n\nAs soon as we find a valid segmentation, we can break out of the inner for-loop and move on to the next character in the string.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0
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
                        0,
                        2
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
                        2,
                        14
                    ],
                    "pointers": {},
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                }
            ]
        }
    }
]
};
