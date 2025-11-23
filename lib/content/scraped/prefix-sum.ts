import { Topic } from "../../schema";

export const prefix_sumTopic: Topic = {
  id: "prefix-sum",
  title: "Prefix Sum",
  description: "Master prefix sum techniques and algorithms.",
  icon: "Sigma",
  totalXp: 300,
  progress: 0,
  color: "bg-fuchsia-500",
  lessons: [
    {
        "id": "subarray-sum-equals-k",
        "title": "Subarray Sum Equals K",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Subarray Sum Equals K",
            "explanation": "Counting Subarrays with Sum K\n\nprefix[i] = arr[0] + arr[1] + ... + arr[i - 1]\n\nLet's start by visualizing the role that the prefix sum plays in this solving this problem. Let's say I have the following array:\n\n{ -2:1, 0:1, 1:1, 2:2, 4:1, 7: 1 }\n\nWe'll use this fact to solve our problem.",
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
                        1
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
        "id": "count-vowels-in-substrings",
        "title": "Count Vowels in Substrings",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Count Vowels in Substrings",
            "explanation": "prefix_sum[right + 1] - prefix_sum[left]\n\n[left, right] = [1, 4]",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        4
                    ],
                    "pointers": {},
                    "message": "Step 1",
                    "highlights": [
                        0
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
            "explanation": "And we want to find the sum of this subarray between index 3 and 5 (inclusive):\n\nUsing the prefix sum array to calculate the sum of arr[2:4] (inclusive)\n\n8 = arr[0] + arr[1] + arr[2]\\n21 = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]\n\nCalculating Prefix Sums\n\narr[2:4] = prefix[5] - prefix[2]",
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
                        1
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
