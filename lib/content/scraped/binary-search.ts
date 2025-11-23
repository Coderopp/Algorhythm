import { Topic } from "../../schema";

export const binary_searchTopic: Topic = {
  id: "binary-search",
  title: "Binary Search",
  description: "Master binary search techniques and algorithms.",
  icon: "Search",
  totalXp: 300,
  progress: 0,
  color: "bg-yellow-500",
  lessons: [
    {
        "id": "apple-harvest-koko-eating-bananas",
        "title": "Apple Harvest (Koko Eating Bananas)",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Apple Harvest (Koko Eating Bananas)",
            "explanation": "O(log(max(apples)) * n)\n\nLet's set up the pointers like we do in classic binary search:\n\nIf he harvests 2 apples per hour, it will take him 2 hours to finish collecting all the apples on that tree (he waits until the hour is up even though he finishes early).\n\nBobby wants to collect all the apples by the end of the day by collecting a fixed number of apples per hour. He can only harvest apples from one tree per hour - if he finishes collecting apples from a tree before the hour is up, he must wait until the next hour to move to the next tree.\n\nFor example, if there are 3 apples on a tree and Bobby collects 1 apple per hour, it will take him 3 hours to finish collecting the apples on that tree."
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
            "explanation": "This section covers Binary Search, which is an efficient algorithm for searching a sorted array for a target value.\n\nWe'll focus on how to visualize the algorithm, and how visualization can help us when we are implementing the algorithm. We'll then look at some practice questions involving Binary Search.\n\nCompare that to Binary Search, which locates 6 after only 3 \\\n\nOutput: 4 (nums[4] = 9)\n\nnums = [-1,0,3,5,9,12], target = 2\\n",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        4
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
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
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
                        1,
                        3,
                        4,
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
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
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
        "id": "search-in-rotated-sorted-array",
        "title": "Search in Rotated Sorted Array",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Search in Rotated Sorted Array",
            "explanation": "The visual below shows the same sorted array rotated at different points, including no rotation at all.\n\nReducing the Search Space\n\nWe'll also mention why the middle element itself is greyed out a little later.\n\nSo let's first look at an example of a rotated sorted array and see if we can notice anything that will help us do so.\n\nat least one of the halves is always sorted in ascending order",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ],
                    "pointers": {
                        "left": 0
                    },
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        4,
                        5,
                        6,
                        7,
                        0,
                        1,
                        2
                    ],
                    "pointers": {
                        "left": 0
                    },
                    "message": "Step 2",
                    "highlights": [
                        1
                    ]
                }
            ]
        }
    }
]
};
