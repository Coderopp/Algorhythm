import { Topic } from "../../schema";

export const learnTopic: Topic = {
  id: "learn",
  title: "Learn",
  description: "Master learn techniques and algorithms.",
  icon: "Book",
  totalXp: 100,
  progress: 0,
  color: "bg-gray-500",
  lessons: [
    {
        "id": "learn-dsa-through-visualizations",
        "title": "Learn DSA Through Visualizations",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Learn DSA Through Visualizations",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        5,
                        4,
                        3,
                        2,
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
                        5,
                        4,
                        3,
                        2,
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
                        5,
                        4,
                        3,
                        4,
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
                        5,
                        4,
                        3
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
                        4,
                        3,
                        2,
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
