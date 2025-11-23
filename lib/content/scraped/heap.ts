import { Topic } from "../../schema";

export const heapTopic: Topic = {
  id: "heap",
  title: "Heap",
  description: "Master heap techniques and algorithms.",
  icon: "Mountain",
  totalXp: 500,
  progress: 0,
  color: "bg-red-500",
  lessons: [
    {
        "id": "find-k-closest-elements",
        "title": "Find K Closest Elements",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Find K Closest Elements",
            "explanation": "Kth Largest Element in an Array\n\nnegative of the distance\n\nBonus Approach: Two Pointers + Binary Search",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        8
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
                        8,
                        10
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
                        11,
                        13
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
                        0,
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
        "id": "kth-largest-element-in-an-array",
        "title": "Kth Largest Element in an Array",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Kth Largest Element in an Array",
            "explanation": ""
        }
    },
    {
        "id": "merge-k-sorted-lists",
        "title": "Merge K Sorted Lists",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Merge K Sorted Lists",
            "explanation": "Step 2: Build the merged list\n\nWhen the heap is empty, all the elements from the linked lists have been merged, and we can return the merged list.\n\nStep 1: Initialize the heap",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
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
                        4,
                        6
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
                        7
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
                        6,
                        8
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
                        18,
                        20
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
        "id": "k-closest-points-to-origin",
        "title": "K Closest Points to Origin",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "K Closest Points to Origin",
            "explanation": "Kth Largest Element in an Array\n\nReturn the k closest points in any order.\n\nnegative of the distance",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        8
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
                        7,
                        10
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
                        10,
                        12
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
            "explanation": "[1, 2, 4, 5, 8, 6, 9]\n\nIf we remove the smallest value from the heap, the elements of the array efficiently re-arrange so that the next smallest value takes its place at the front of the array.\n\nWe can think of a heap as an array with a special property: the smallest value in the array is always in the first index of the array.\n\nThis module prepares you to use heaps during the coding interview by covering:\n\nThe types of coding interview questions that are best solved using heaps.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        2,
                        4,
                        5,
                        8,
                        6,
                        9
                    ],
                    "pointers": {
                        "i": "4"
                    },
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        8,
                        7,
                        9
                    ],
                    "pointers": {
                        "i": "4"
                    },
                    "message": "Step 2",
                    "highlights": [
                        1
                    ]
                },
                {
                    "step": 2,
                    "array": [
                        7,
                        9,
                        8
                    ],
                    "pointers": {
                        "i": "4"
                    },
                    "message": "Step 3",
                    "highlights": [
                        2
                    ]
                },
                {
                    "step": 3,
                    "array": [
                        9,
                        7,
                        8
                    ],
                    "pointers": {
                        "i": "4"
                    },
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                }
            ]
        }
    }
]
};
