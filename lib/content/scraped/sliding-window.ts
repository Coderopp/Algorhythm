import { Topic } from "../../schema";

export const sliding_windowTopic: Topic = {
  id: "sliding-window",
  title: "Sliding Window",
  description: "Master sliding window techniques and algorithms.",
  icon: "Maximize2",
  totalXp: 700,
  progress: 0,
  color: "bg-indigo-500",
  lessons: [
    {
        "id": "longest-substring-without-repeating-characters",
        "title": "Longest Substring Without Repeating Characters",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Longest Substring Without Repeating Characters",
            "explanation": ""
        }
    },
    {
        "id": "longest-repeating-character-replacement",
        "title": "Longest Repeating Character Replacement",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Longest Repeating Character Replacement",
            "explanation": "We use this fact to solve this problem with a variable-length sliding window to iterate over all valid substrings, and return the longest of those lengths at the end. To represent the state of the current window, we keep track of two variables:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [],
                    "pointers": {},
                    "message": "Visualization data available - refine steps",
                    "highlights": []
                }
            ]
        }
    },
    {
        "id": "max-sum-of-distinct-subarrays-length-k",
        "title": "Max Sum of Distinct Subarrays Length k",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Max Sum of Distinct Subarrays Length k",
            "explanation": "Expanding and contracting the window until the end of the array.\n\nWe represent the state of the current window using two variables:\n\nWe return 20 because it is the maximum subarray sum of all the subarrays that meet the conditions.\n\nExplanation: The subarrays of nums with length 4 are:\n\nExpanding and contracting the window until first valid subarray is found",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        5,
                        10
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
                        9,
                        20
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
                        3,
                        2,
                        2,
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
                        2,
                        2,
                        3,
                        4
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
                        2,
                        3,
                        4,
                        6
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
        "id": "maximum-sum-of-subarrays-of-size-k",
        "title": "Maximum Sum of Subarrays of Size K",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Maximum Sum of Subarrays of Size K",
            "explanation": "This approach is efficient because we calculate each window's sum in constant time by:\n\nExplanation: The subarray with the maximum sum is [5, 1, 3] with a sum of 9.\n\nnums = [2, 1, 5, 1, 3, 2]\\nk = 3\\n\n\nfixed-size sliding window",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        1,
                        5,
                        1,
                        3,
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
                        5,
                        1,
                        3
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
        "id": "max-points-you-can-obtain-from-cards",
        "title": "Max Points You Can Obtain From Cards",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Max Points You Can Obtain From Cards",
            "explanation": "the first two cards and the last card\n\nSum of valid arrangement = 36 - 23 = 13\n\nthe first three cards,\n\nthe last three cards,\n\nfixed-length sliding window",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        11,
                        4,
                        5,
                        3,
                        9,
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
                        11,
                        4,
                        5,
                        3,
                        9,
                        2
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
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "Here's a template you can use as a starting point for solving problems with a fixed-length sliding window.\n\nProblem: Maximum Sum of Subarray with Size K\n\nThis technique refers to creating a window that \\\n\nFixed-Length Sliding Window\n\nnums = [2, 1, 5, 1, 3, 2]",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
                        3,
                        2,
                        1,
                        2,
                        1,
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
                        2,
                        1,
                        5,
                        1,
                        3,
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
                        5,
                        1,
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
                        2,
                        1,
                        5,
                        1,
                        3,
                        2
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
                        1,
                        3
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
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "To understand the motivation behind the sliding window pattern, let's start by looking at a naive approach to this problem, which considers every possible subarray in the input, and chooses the longest one with at most 2 distinct fruits.\n\nThe types of problems for which each type of sliding window is useful, as well as templates you can use as a starting point.\n\nA list of practice problems (with animated solutions and explanations!) for you to try to build upon the concepts covered here.\n\nvariable-length sliding window\n\nAn example problem that illustrates the motivation for each type of sliding window, as well as how to implement it.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
                        3,
                        2,
                        1,
                        2,
                        1,
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
                        3,
                        3,
                        2,
                        1,
                        2,
                        1,
                        0
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
                        1,
                        2,
                        1
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
                        3,
                        3,
                        2,
                        1,
                        2,
                        1,
                        0
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
                        3,
                        3,
                        2,
                        1,
                        2,
                        1,
                        0
                    ],
                    "pointers": {},
                    "message": "Step 5",
                    "highlights": [
                        4
                    ]
                }
            ]
        }
    }
]
};
