import { Topic } from "../../schema";

export const linked_listTopic: Topic = {
  id: "linked-list",
  title: "Linked List (Advanced)",
  description: "Master linked list techniques and algorithms.",
  icon: "Link",
  totalXp: 600,
  progress: 0,
  color: "bg-green-500",
  lessons: [
    {
        "id": "reorder-list",
        "title": "Reorder List",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Reorder List",
            "explanation": "5 -> 1 -> 4 -> 2 -> 3\n\nThe first observation is that we can create our final list by merging two smaller lists: the first half of the original list and the reversed second half of the original list.\n\nPut together, the solution involves three steps, each of which involve 3 fairly common linked list operations:\n\nfast and slow pointers\n\n5 -> 4 -> 3 -> -> 2 -> 1",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0,
                        1,
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
                        0,
                        2,
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
                        1,
                        4
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
                        5,
                        4,
                        4,
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
        "id": "linked-list-cycle",
        "title": "Linked List Cycle",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Linked List Cycle",
            "explanation": "2. Optimal Solution: Fast and Slow Pointers\n\nfast and slow pointers\n\nWe recommend taking some time to solve the problem on your own before reading the solutions below.\n\nWhen the list contains a cycle, fast and slow eventually meet at the same node.\n\nOne approach to this problem is to keep a set of visited nodes while iterating through the linked list. At each node, we check if the node exists in the set. If it does, then the linked list contains a cycle. If it doesn't, we add the node to the set and move to the next node. If we reach the end of the linked list without encountering a node in the dictionary, then the linked list does not contain a cycle.",
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
                        1,
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
                        4,
                        3,
                        2,
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
                        1,
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
                        4,
                        3,
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
        "id": "swap-nodes-in-pairs",
        "title": "Swap Nodes in Pairs",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Swap Nodes in Pairs",
            "explanation": "We then perform the same 3 operations we discussed earlier to swap the pair of nodes:\n\nWe need to perform 3 operations:\n\nOnce that is complete, we can move to the next pair of nodes to swap.\n\nNeed for a Dummy Node\n\nHere's the complete dummy node approach that elegantly handles all edge cases:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        5,
                        4,
                        3,
                        2,
                        1
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
                        5,
                        4,
                        3,
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
                        5,
                        4,
                        3,
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
                        0,
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
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Overview",
            "explanation": "Traversing a Linked List\n\nVisualizing a linked list with 4 nodes.\n\nThis page covers common operations and strategies that frequently show up in linked list problems for the coding interview.\n\nTraversing a linked list to find its length.\n\nThese operations demonstrate some of the fundamentals of working with linked lists.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "pointers": {
                        "i": "3"
                    },
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
                        1
                    ],
                    "pointers": {
                        "i": "3"
                    },
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
                        2
                    ],
                    "pointers": {
                        "i": "3"
                    },
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
                    "pointers": {
                        "i": "3"
                    },
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                },
                {
                    "step": 4,
                    "array": [
                        1,
                        7
                    ],
                    "pointers": {
                        "i": "3"
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
        "id": "palindrome-linked-list",
        "title": "Palindrome Linked List",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Palindrome Linked List",
            "explanation": "Like the previous solution, we first traverse the linked list and store the value of each node in a list.\n\n1. Convert to List: Compare Reverse\n\nWe recommend taking some time to solve the problem on your own before reading the solutions below.\n\nInstead of comparing the entire list with its reverse, we can use the two-pointer technique to check if the values in the list are a palindrome.\n\n2. Convert to List: Two-Pointer Technique",
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
                },
                {
                    "step": 1,
                    "array": [
                        1,
                        4
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
                        4,
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
                        3,
                        14
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
                        19
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
        "id": "remove-nth-node-from-end-of-list",
        "title": "Remove Nth Node From End of List",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Remove Nth Node From End of List",
            "explanation": "current.next = current.next.next\n\nIntroducing a dummy node\n\nIn the two above approaches, we need special logic to handle removing the head node because the head node does not have a node right before it to locate.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        5,
                        4,
                        3,
                        2,
                        1
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
                        5,
                        4,
                        3,
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
                        8
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
