import { Topic } from "../../schema";

export const greedyTopic: Topic = {
  id: "greedy",
  title: "Greedy",
  description: "Master greedy techniques and algorithms.",
  icon: "TrendingUp",
  totalXp: 400,
  progress: 0,
  color: "bg-rose-500",
  lessons: [
    {
        "id": "best-time-to-buy-and-sell-stock",
        "title": "Best Time to Buy and Sell Stock",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Best Time to Buy and Sell Stock",
            "explanation": "The problem is asking for the maximum profit that can be made by buying and selling a stock. The key to solving this problem is to find the minimum price to buy and the maximum price to sell.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        5,
                        7
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
        "id": "jump-game",
        "title": "Jump Game",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Jump Game",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
                        1,
                        0,
                        0,
                        1
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
        "id": "gas-station",
        "title": "Gas Station",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Gas Station",
            "explanation": "Resetting the start index\n\nIf there is more gas along the route than the cost of the route, then there is guaranteed to be a solution to the problem. So the first step is to check if the sum of the gas is greater than or equal to the sum of the cost. If it is not, then we return -1.\n\nIf we follow this approach of resetting the start index and gas tank whenever we don't have enough gas to reach the next station, then when we finish iterating, the last start index will be the solution to the problem.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0
                    ],
                    "pointers": {
                        "i": "2"
                    },
                    "message": "Step 1",
                    "highlights": [
                        0
                    ]
                },
                {
                    "step": 1,
                    "array": [
                        0
                    ],
                    "pointers": {
                        "i": "2"
                    },
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
                    "pointers": {
                        "i": "2"
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
                        "i": "2"
                    },
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
                    "pointers": {
                        "i": "2"
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
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "greeds = [1, 2, 3]\\ncookies = [1, 1]\\n\n\nThe first child with a greed of 1 can be satisfied with the first cookie of size 1.\\nThe second cookie of size 1 cannot satisfy the second child with a greed of 2.\\nTherefore, only one child can be satisfied.\n\nIn this case, after sorting the arrays, the locally optimal (or \\\n\nWhat Makes this a Greedy Algorithm?\n\nGreedy Choice Property",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        2,
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
                        1,
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
                        10,
                        13,
                        2,
                        5,
                        3,
                        7,
                        101,
                        18
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
                        3,
                        7,
                        101
                    ],
                    "pointers": {},
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
