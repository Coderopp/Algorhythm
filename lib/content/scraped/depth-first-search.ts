import { Topic } from "../../schema";

export const depth_first_searchTopic: Topic = {
  id: "depth-first-search",
  title: "Depth First Search",
  description: "Master depth first search techniques and algorithms.",
  icon: "GitCommit",
  totalXp: 2100,
  progress: 0,
  color: "bg-slate-500",
  lessons: [
    {
        "id": "depth-first-search",
        "title": "Depth-First Search",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Depth-First Search",
            "explanation": "We then look at the two most common ways graphs are represented during the coding interview, and how to traverse both representations with DFS. Then we work through problems that give us practice with the different types of graph problems that can be solved using DFS.\n\nThis module teaches you how to solve coding interview questions using depth-first search. It is divided into 2 sections:\n\nDepth-First Search (DFS) is a traversal algorithm that visits all nodes in a tree or graph-like data structure. It can be applied to a wide variety of problems, making it the most important algorithm to know for the coding interview.\n\nWe start by learning how depth-first search traverses the nodes in a binary tree, which will teach us the fundamentals of the algorithm. We then learn how to solve binary tree interview questions using depth-first search and recursion, and apply what we learned by working through practice problems."
        }
    },
    {
        "id": "surrounded-regions",
        "title": "Surrounded Regions",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Surrounded Regions",
            "explanation": ""
        }
    },
    {
        "id": "longest-univalue-path",
        "title": "Longest Univalue Path",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Longest Univalue Path",
            "explanation": "Given the root of the binary tree, find the longest path where all nodes along the path have the same value. This path doesn't have to include the root node. Return the number of edges on that path, not the number of nodes.\n\nLet's look at an example of how this works:\n\nIf the current node is a leaf node, then the longest univalue path rooted at those nodes is 0.\n\nDiameter of a Binary Tree\n\nThe idea is to have each recursive call return the length of the longest univalue path that is rooted at the current node to its parent. This way, the parent can use the return values from its children to calculate the longest univalue path that passes through the current node."
        }
    },
    {
        "id": "path-sum",
        "title": "Path Sum",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Path Sum",
            "explanation": ""
        }
    },
    {
        "id": "diameter-of-a-binary-tree",
        "title": "Diameter of a Binary Tree",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Diameter of a Binary Tree",
            "explanation": "Given the root of a binary tree, write a recursive function to find the diameter of the tree. The diameter of a binary tree is the length of the longest path (# of edges) between any two nodes in a tree. This path may or may not pass through the root.\n\nThe diameter of a binary tree is equal to longest path between any two nodes in the tree. So we want to use depth-first search to visit each node, and at each node we'll calculate the length of the longest path that passes through that node. At the end, we'll return the maximum of those lengths.\n\nThe length of the longest path going through the root node in the tree above is 4."
        }
    },
    {
        "id": "pacific-atlantic-water-flow",
        "title": "Pacific Atlantic Water Flow",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Pacific Atlantic Water Flow",
            "explanation": ""
        }
    },
    {
        "id": "calculate-tilt",
        "title": "Calculate Tilt",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Calculate Tilt",
            "explanation": ""
        }
    },
    {
        "id": "number-of-islands",
        "title": "Number of Islands",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Number of Islands",
            "explanation": "[\\n[1, 1, 0, 1],\\n[1, 1, 0, 1],\\n[1, 1, 0, 0]\\n]\n\nWe'll walkthrough how the algorithm detects 2 islands in the example grid:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        1,
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
                        1,
                        1,
                        0,
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
                        1,
                        0,
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
                        2,
                        22
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
                        21,
                        31
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
        "id": "return-values",
        "title": "Return Values",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Return Values",
            "explanation": "Given a binary tree, use Depth-First Search to find the sum of all nodes in the tree.\n\nIn this unit, we will:\n\nProblem: Sum of Nodes\n\nCover a general approach we can use to determine return values when faced with a binary tree problem.\n\nIn the previous section, we learned how Depth-First Search traverses each node in a binary tree via a series of recursive calls. To solve binary tree interview problems, the next step is to have each recursive call to DFS return a value.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0,
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
    },
    {
        "id": "path-sum-ii",
        "title": "Path Sum II",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Path Sum II",
            "explanation": "The remaining target sum\n\nThese values must be passed down as parameters of the recursive call, so we need to introduce a helper function to help us recurse.\n\nWhenever we are at a leaf node, we can check if the value of the current node matches the target. If it does, we can add the current path to the global list of paths.\n\nThe values along the current path (starting from the root).\n\nThis is an example of a question which benefits from using a global variable that all recursive calls have access to store the list of all root-to-leaf paths that match the target sum."
        }
    },
    {
        "id": "copy-graph",
        "title": "Copy Graph",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Copy Graph",
            "explanation": "Returning from a previously visited node.\n\nAdd the value of the node as a key in the adjacency list, and a list of its neighbor's values as the value in the dictionary.\n\nWe can now take a closer look at the solution by visualizing each step as it traverses the graph below:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        0,
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
                        3,
                        9
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
                        8,
                        11
                    ],
                    "pointers": {},
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                }
            ]
        }
    },
    {
        "id": "graphs",
        "title": "Graphs",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Graphs",
            "explanation": "When working with DFS on a graph, the most important thing to remember is to keep track of the visited nodes as you traverse, since graphs (unlike trees) can contain cycles.\n\nDepth-First Search is also used to solve interview questions involving graphs.\n\nyou should be very comfortable with implementing basic DFS on both types of graphs\n\nGraphs consist of nodes (also frequently referred to as vertices), and edges that connect the nodes."
        }
    },
    {
        "id": "maximum-depth-of-a-binary-tree",
        "title": "Maximum Depth of a Binary Tree",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Maximum Depth of a Binary Tree",
            "explanation": "Given the root of a binary tree, write a recursive function to find its maximum depth, where maximum depth is defined as the number of nodes along the longest path from the root node down to a leaf node."
        }
    },
    {
        "id": "matrices",
        "title": "Matrices",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Matrices",
            "explanation": "Another common way to represent a graph is as a matrix (2D-grid). Each cell in the grid represents a node. The neighbors of each node are the cells that are adjacent to it (in the up, down, left, and right directions).\n\ngrid[1][1] is a node. Its neighbors are grid[0][1], grid[2][1], grid[1][0], and grid[1][2]\n\nDFS on a matrix is similar to DFS on an adjacency list. We still have to keep track of visited nodes, and we recursively call DFS on each neighbor of the current node.\n\nThe main difference is that each cell can have at most 4 neighbors (up, down, left, right), and that we need to check if the neighbor is within the bounds of the grid before visiting it.",
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
                        1,
                        0,
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
                        0,
                        0,
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
        "id": "validate-binary-search-tree",
        "title": "Validate Binary Search Tree",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Validate Binary Search Tree",
            "explanation": ""
        }
    },
    {
        "id": "fundamentals",
        "title": "Fundamentals",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Fundamentals",
            "explanation": "Let's now look at the implementation of DFS on a binary tree. We'll pay special attention to the role that recursion and the call stack play in the algorithm.\n\nA binary search tree. All nodes in the left subtree are less than 4, while all nodes in the right subtree are greater than 4.\n\nDepth-First Search is an algorithm used to traverse each node in a binary tree. It starts at the root node and tries to go \\\n\nDepth-First Search (DFS)\n\nPushing to the Call Stack",
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
                        3,
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
                        22
                    ],
                    "pointers": {},
                    "message": "Step 4",
                    "highlights": [
                        3
                    ]
                }
            ]
        }
    },
    {
        "id": "types-of-dfs",
        "title": "Types of DFS",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Types of DFS",
            "explanation": "When that completes, we have fully explored a single island, and we move onto the next island, which is the next unvisited cell in the matrix that contains a 1.\n\nIf the cell contains a 1, then we use DFS to traverse all land cells neighboring that cell (marking cells as visited as we go).\n\nHere's what that looks like animated:\n\nWe traverse over each unvisited cell in the matrix.\n\nThese types of problems involve starting a DFS traversal from the boundary of a matrix. An example of this is finding all \\"
        }
    },
    {
        "id": "flood-fill",
        "title": "Flood Fill",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Flood Fill",
            "explanation": "Backtracking to the previous pixel\n\nThe algorithm starts at the given starting pixel and uses depth-first search to explore all pixels connected 4-directionally to it. At each pixel, it first checks to see if the pixel is the same color as the starting pixel. If it is, it changes the color of the pixel and continues to explore the connected pixels.\n\nSetting the color of connected pixels.\n\nAfter changing that pixel's color, the algorithm will continue to explore the connected pixels of that pixel. Whenever it encounters a pixel that is not the same color as the starting pixel, it will return immediately and backtrack to the previous pixel on the call stack, which will then continue to explore its remaining connected pixels.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        3,
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
                        6,
                        13
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
        "id": "graph-valid-tree",
        "title": "Graph Valid Tree",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Graph Valid Tree",
            "explanation": "[[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]\n\nBuilding the adjacency list.\n\nThe graph must contain no cycles.\n\nThere should be a single connected component - if we start from any node, we should be able to reach all other nodes.\n\nIn order for a graph to be a valid tree, it must satisfy the following conditions:",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
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
                        1,
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
                        2,
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
                        1,
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
                        1,
                        4
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
        "id": "helper-functions-and-global-variables",
        "title": "Helper Functions and Global Variables",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Helper Functions and Global Variables",
            "explanation": "The animation below visualizes each step of the solution. Pay attention to how the max value seen so far on the current path from the root is passed down from parent to child nodes via the parameter in the helper function.\n\nIn some cases, questions require us to pass information \\\n\nNode 4: The root node is a \\\n\nExtra Step: Determining if a Node is \\\n\nIn the Return Values section, we covered how return values allow us to solve binary tree problems from the \\",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        4,
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
                        4,
                        2,
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
                        4,
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
                        4,
                        7,
                        6
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
        "id": "adjacency-list",
        "title": "Adjacency List",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Adjacency List",
            "explanation": "Some questions require you to build an adjacency list from a list of edges, which is shown below:\n\nThe next step is to practice using DFS to solve graph questions involving adjacency lists.\n\nIn Python, we can create an adjacency list using a dictionary where the keys are the nodes and the values are the list of nodes each node is connected to.\n\nAn adjacency list is a common way to represent a graph. In an adjacency list, we are given a list of nodes, where each node is mapped to a list of its neighbors.\n\nAn adjacency list representation of an undirected graph.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
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
                        3,
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
                        2,
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
                        2,
                        3,
                        5
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
                        4
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
