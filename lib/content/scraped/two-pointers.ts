import { Topic } from "../../schema";

export const two_pointersTopic: Topic = {
  id: "two-pointers",
  title: "Two Pointers",
  description: "Master two pointers techniques and algorithms.",
  icon: "GitMerge",
  totalXp: 800,
  progress: 0,
  color: "bg-purple-500",
  lessons: [
    {
        "id": "sort-colors",
        "title": "Sort Colors",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Sort Colors",
            "explanation": "We can understand this algorithm by looking at the invariants which hold true after each iteration:\n\nLet's now see how we maintain these invariants as we iterate through the array.",
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
        "id": "3-sum",
        "title": "3-Sum",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "3-Sum",
            "explanation": "Avoiding Duplicates II\n\nHere we can do another iteration of the Two Sum problem using the new positions of the left and right pointers.\n\nHere we move the left pointer once until it reaches the last -1 in the array. Then, we can move both the left and right pointers so that they both point to new numbers.\n\nTwo Sum (Sorted Array)\n\nIn this case, since the next number in the array is the same as the previous number, we can skip it. We can do this by moving our iterator until it points to a new number.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0,
                        6
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
                        8
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
                        7,
                        11
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
                        14,
                        17
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
                        16,
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
        "id": "move-zeroes",
        "title": "Move Zeroes",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Move Zeroes",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        0,
                        4,
                        0,
                        9
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
                        4,
                        9,
                        0,
                        0
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
        "id": "two-sum-sorted",
        "title": "Two Sum (Sorted)",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Two Sum (Sorted)",
            "explanation": "move our right pointer back\n\nalso have sums greater than our target\n\nWe initialize our two pointers at opposite ends of the array, and start our search.\n\nIf the sum of the current pair is greater than our target, we move our right pointer back. If it is less than our target, we move our left pointer forward.\n\nThis continues until either our pointers meet (in which case we did not find a successful pair) or until we find a pair that sums to our target, like we did here.",
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
        "id": "container-with-most-water",
        "title": "Container With Most Water",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Container With Most Water",
            "explanation": "All other containers ending at the right pointer hold a smaller amount of water than our current container, so we eliminate them from our search by moving the right pointer.",
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
        "id": "triangle-numbers",
        "title": "Triangle Numbers",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Triangle Numbers",
            "explanation": "But not only that, triplets where the smallest number is between 4 and 8 are also valid triplets.\n\nThe key to this question is realizing that if we have 3 numbers, such as 4, 8, 9, arranged from smallest to largest, and the sum of the two smallest numbers is greater than the largest number, then we have a valid triplet ( 4 + 8 > 9).\n\nnums[left] + nums[right] > nums[i]\n\ntwo-pointer technique",
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
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "In this page, we'll cover:\n\nA list of problems (with animated solutions!) for you to try that build upon the concepts covered here.\n\nNaive (left) vs. Two-Pointer Technique (right)\n\nInput: nums = [1,3,4,6,8,10,13], target = 6\\nOutput: False\n\nThis technique refers to using two pointers that start at opposite ends of an array and gradually move towards each other.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        3,
                        4,
                        6,
                        8,
                        10,
                        13
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
                        3,
                        4,
                        6,
                        8,
                        10,
                        13
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
                        4,
                        1,
                        2,
                        2,
                        4,
                        1,
                        3,
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
                        1,
                        2,
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
    },
    {
        "id": "trapping-rain-water",
        "title": "Trapping Rain Water",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Trapping Rain Water",
            "explanation": "So if we knew the height of the highest bars to the left and right of every index, we could iterate through the array and calculate the amount of water that can be trapped at each index.\n\nIn order for any index in the array to be able to trap rain water, there must be higher bars on both the left and right side of the index. For example, index 2 in the following array has height 1. It can trap water because there are higher bars to the left and right of it.\n\nTo calculate the exact amount of water that can be trapped at index 2, we first take the minimum height of the highest bars to the left and right of it, which in this case is 4. We then subtract the height of the bar at index 2, which is 1,",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
                        4,
                        1,
                        2,
                        2,
                        5,
                        1,
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
    }
]
};
