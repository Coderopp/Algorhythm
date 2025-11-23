import { Topic } from "../../schema";

export const matricesTopic: Topic = {
  id: "matrices",
  title: "Matrices",
  description: "Master matrices techniques and algorithms.",
  icon: "Grid3x3",
  totalXp: 300,
  progress: 0,
  color: "bg-violet-500",
  lessons: [
    {
        "id": "spiral-matrix",
        "title": "Spiral Matrix",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Spiral Matrix",
            "explanation": "This solution uses 4 steps to traverse the matrix in spiral order:\n\nAt this point, we have traversed the perimeter of the original matrix in a clockwise spiral order. We repeat the process for the inner submatrix, until there are no more elements left to traverse.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
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
                        4,
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
                        5,
                        7
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
                        6,
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
        "id": "rotate-image",
        "title": "Rotate Image",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Rotate Image",
            "explanation": "Transpose the matrix by swapping the elements across the diagonal. This can be done in-place by using a nested for loop to swap the elements.\n\nWrite a function to rotate an n x n 2D matrix representing an image by 90 degrees clockwise. The rotation must be done in-place, meaning you should modify the input matrix directly without using an additional matrix for the operation.\n\nThis problem can be done in two steps. We first transpose the matrix, then reverse the elements in each row.\n\nReverse the elements in each row of the matrix.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        14
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
                        13,
                        18
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
        "id": "set-matrix-zeroes",
        "title": "Set Matrix Zeroes",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Set Matrix Zeroes",
            "explanation": "Step 2: Zero the rows\n\nThis solution solves the problem in three steps:\n\nStep 3: Zero the columns\n\nStep 1: Mark the rows and columns to be zeroed",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        6,
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
                        11,
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
                        12,
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
