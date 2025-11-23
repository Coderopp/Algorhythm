import { Topic } from "../../schema";

export const breadth_first_searchTopic: Topic = {
  id: "breadth-first-search",
  title: "Breadth First Search",
  description: "Master breadth first search techniques and algorithms.",
  icon: "GitBranch",
  totalXp: 1100,
  progress: 0,
  color: "bg-sky-500",
  lessons: [
    {
        "id": "graphs-overview",
        "title": "Graphs Overview",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Graphs Overview",
            "explanation": "The animation shows how BFS traverses the graph represented by:\n\nRepeat steps 2 and 3 until the queue is empty.\n\nBFS on an Matrix (2D Grid)\n\nTo traverse a graph represented with an adjacency list with BFS:\n\nAdd the children of the node to the back of the queue (if they haven't been visited yet)."
        }
    },
    {
        "id": "rightmost-node",
        "title": "Rightmost Node",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Rightmost Node",
            "explanation": "Given the root of a binary tree, return the rightmost node at each level of the tree. The output should be a list containing only the values of those nodes.\n\nWe can start by initialize an empty list to store the rightmost nodes. Recall that in a level-order traversal, we first find the number of nodes at the current level, and then we use a for-loop to loop over all the nodes at that level. When the count of the for loop is equal to the number of nodes at the current level minus one, we know that the current node is the rightmost node at that level, so we can add it to our list."
        }
    },
    {
        "id": "01-matrix",
        "title": "01-Matrix",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "01-Matrix",
            "explanation": "breadth-first search (BFS)\n\n# setting the distances of cells with value 0 to 0 in the output grid\\noutput = [\\n    [-1, 0, -1],\\n    [0, -1, 0],\\n    [-1, -1, -1],\\n]\\n\n\nStep 1: Initialize the Queue\n\nqueue = [ (0, 0), (0, 2), (1, 1), (2, 0), (2, 2) ]\\n\n\nLet's look at example input grid to help visualize the process:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
                        0,
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
                        0,
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
                        1,
                        1,
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
                        0,
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
    },
    {
        "id": "maximum-width-of-binary-tree",
        "title": "Maximum Width of Binary Tree",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Maximum Width of Binary Tree",
            "explanation": "Let's now breakdown how to calculate the width at each level of the binary tree. The width at each level is the number of nodes between the right-most and left-most nodes at that level.\n\nIn order to calculate the width at each level, we need to assign each node a \\"
        }
    },
    {
        "id": "minimum-knight-moves",
        "title": "Minimum Knight Moves",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Minimum Knight Moves",
            "explanation": "Step 1: Initialize the Queue and Visited Set\n\nOtherwise, for each valid knight move from the current position that has not been visited before, we add that position to the queue, along with the number of moves required to reach that position (which is 1 + the current # of moves). We also mark the current cell as visited.\n\nSince this is a shortest path problem, we can use a breadth-first search (BFS) traversal\n\nStep 2: Perform BFS Traversal"
        }
    },
    {
        "id": "rotting-oranges",
        "title": "Rotting Oranges",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Rotting Oranges",
            "explanation": "breadth-first search (BFS)\n\nStep 1: Initialize BFS Queue and Count Fresh Oranges\n\nStep 2: BFS Traversal\n\nNext, we find all the oranges that will rot in the next minute. For each rotten orange in the BFS queue, we check if any of its neighbors are fresh oranges. If so, we turn the fresh orange into a rotten orange and add it to the queue to prepare for the next minute (shown in orange in the diagrams below). We also decrement the count of fresh oranges.\n\nQueue: [(0, 0), (1, 3)]"
        }
    },
    {
        "id": "bus-routes",
        "title": "Bus Routes",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Bus Routes",
            "explanation": "This is easier to understand with an example. Let's walkthrough the solution with the following input:\n\nLet's walkthrough each step of the solution when we have the following input:\n\nStep 2: Initialize the Queue and Visited Set\n\nStep 1: Initialize the Graph\n\nNow, we're ready to perform the BFS traversal. We'll repeatedly dequeue from the front of the queue. Each time we dequeue, we get the current bus route and the number of bus routes taken so far, which are:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        3,
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
                        3,
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
                        6,
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
                        8,
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
        "id": "level-order-sum",
        "title": "Level Order Sum",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Level Order Sum",
            "explanation": "At each level, we can keep a running sum of the node's values at that level. Then, whenever we finish processing a level (the for-loop for that level finishes), then we can add the sum of the nodes to the output list.\n\nGiven the root of a binary tree, return the sum of the nodes at each level. The output should be a list containing the sum of the nodes at each level."
        }
    },
    {
        "id": "zigzag-level-order",
        "title": "Zigzag Level Order",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Zigzag Level Order",
            "explanation": "Given the root of a binary tree, return the zigzag level-order traversal of its nodes' values.\n\nThe output should be a list of lists containing the values of the nodes at each level. The first list should contain the value of the root, the second list should contain the values of the nodes at the second level from right to left, the third list should contain the values of the third level from left to right, and so on."
        }
    },
    {
        "id": "breadth-first-search",
        "title": "Breadth First Search",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Breadth First Search",
            "explanation": "We start by learning how breadth-first search traverses the nodes in a binary tree, which will teach us the fundamentals of the algorithm. We then look at practice problems that are best solved using BFS.\n\nby focusing on questions that are best solved using BFS rather than Depth-First Search\n\nWe then look at the two most common ways graphs are represented during the coding interview, and how to traverse both representations with BFS. Then we work through problems that give us practice with the different types of graph problems that are best solved using BFS.\n\nBreadth-First Search (BFS) is the next traversal algorithm we'll cover. BFS is a level-by-level traversal algorithm that starts at a node in a tree or graph-like data structure and processes all nodes at the current level before moving to the nodes at the next level."
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
            "explanation": "While the queue is not empty, remove the node at the front of the queue and visit it.\n\nAdd the children of the node to the back queue.\n\nRepeat steps 2 and 3 until the queue is empty, which means you've processed all nodes in the tree.\n\nThe state of the aglorithm after we have finished processing the nodes at the 2nd level of the tree.\n\nThe order in which BFS visits the nodes in a binary tree.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        2,
                        7
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
                        4
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
