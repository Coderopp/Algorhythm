import { Topic } from "../../schema";

export const stackTopic: Topic = {
  id: "stack",
  title: "Stack (Advanced)",
  description: "Master stack techniques and algorithms.",
  icon: "Layers",
  totalXp: 700,
  progress: 0,
  color: "bg-orange-500",
  lessons: [
    {
        "id": "longest-valid-parentheses",
        "title": "Longest Valid Parentheses",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Longest Valid Parentheses",
            "explanation": "Index 1, '(':\\nPush index 1 onto the stack.\\nStack: [-1, 0, 1]\n\nInitialization: Stack: [-1]\n\nSolution Visualization\n\nIndex 0, '(':\\nPush index 0 onto the stack.\\nStack: [-1, 0]"
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
            "explanation": "A sequence of push() and pop() operations.\n\nUsing an Array as a Stack\n\nFor more practice with problems that use a stack to manage the ordering of nested sequences, try:\n\nA stack being used to validate parentheses.\n\nArrays are frequently used to implement stacks, with the end of the array acting as the top of the stack.",
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
        "id": "decode-string",
        "title": "Decode String",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Decode String",
            "explanation": "We then iterate over each character in the encoded string, handling each character as follows:",
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
                }
            ]
        }
    },
    {
        "id": "largest-rectangle-in-histogram",
        "title": "Largest Rectangle in Histogram",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Largest Rectangle in Histogram",
            "explanation": "To calculate the largest rectangle at each index, we need to know the index of the first shorter bar to both the left and the right of the current bar. The width of the rectangle is the difference between the two indices - 1, and the height is the height of the current bar.\n\nMonotonically Increasing Stack\n\nLargest Rectangle at each Index\n\nWhen the stack is empty, we have processed all the indexes, and we return the maximum area.\n\nIndex of first shorter bar to left: 0. Index of first shorter bar to right: 4. Total area: 5 * (4 - 0 - 1) = 15",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        10,
                        15
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
            "explanation": "Given an array of integers, find the next greater element for each element in the array. The next greater element of an element x is the first element to the right of x that is greater than x. If there is no such element, then the next greater element is -1.\n\nWe start by initializing our stack and our results array, with each value in the results array initialized to -1. Our stack stores the indexes of the elements in the input array that have not yet found their next greater element.\n\nPushing indexes 0 and 1 onto the stack\n\nmonotonic decreasing stack\n\nProblem: Next Greater Element",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        1,
                        3,
                        2,
                        4,
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
                        1,
                        6
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
        "id": "valid-parentheses",
        "title": "Valid Parentheses",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Valid Parentheses",
            "explanation": ""
        }
    },
    {
        "id": "daily-temperatures",
        "title": "Daily Temperatures",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Daily Temperatures",
            "explanation": "After that is done, we push the current index onto the stack to indicate that we have not yet found the next greatest temperature for the current index.\n\nIf the current temperature is less than the top temperature in the stack (of if the stack is empty), we push the current index onto the stack to indicate that we are waiting to find a greater temperature for that index.\n\nNext, we iterate over each index in the array. For each index, we get the current temperature of that index, and compare it to the temperature of the top index in the stack.\n\nA monotonically decreasing stack stores indices, where the temperature values at those indices decrease from bottom to top of the stack. When pushing an index onto this stack, the temperature at that index must be smaller than the temperatures at all other indices currently on the stack.\n\nWe first pop the top index from the stack and calculate the number of days we had to wait for that popped index to find a warmer temperature (current index minus the popped index), and store that number in the results array at the index of the popped element. To account for the fact that the current temperature might be the next greatest temperature for multiple indicies, we repeat this process in a while loop until the current temperature is less than the top temperature in the stack, or until the stack is empty.",
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
                        4,
                        7
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
                        13,
                        23
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
