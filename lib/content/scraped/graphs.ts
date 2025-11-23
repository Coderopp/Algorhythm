import { Topic } from "../../schema";

export const graphsTopic: Topic = {
  id: "graphs",
  title: "Graphs (Advanced)",
  description: "Master graphs techniques and algorithms.",
  icon: "Network",
  totalXp: 300,
  progress: 0,
  color: "bg-pink-500",
  lessons: [
    {
        "id": "course-schedule-ii",
        "title": "Course Schedule II",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Course Schedule II",
            "explanation": "Given the total number of courses and a list of prerequisite pairs, write a function to return the ordering of courses you should take to finish all courses.\n\nFinally, when the queue is empty, we check if the result list has the same length as the number of courses. If it does, we return the result list. Otherwise, we return an empty list, as there is no valid ordering of the courses.\n\nIn our solution, we first build a graph representing the prerequisites of each course. We then perform a topological sort on the graph to find the order in which the courses should be taken.\n\nIf there are multiple valid orderings, return any valid ordering. If it is impossible to finish all courses, return an empty array.\n\nprerequisites[i] = [a, b]"
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
            "explanation": "Topological sort takes a directed acyclic graph (DAG) and turns it into a linear ordering of nodes such that the directed edges only point forward, from left-to-right:\n\nWhen working with graphs, make sure you first practice using Depth-First Search (DFS) and Breadth-First Search (BFS) to solve coding interview questions, as they are the most common graph algorithms you'll encounter.",
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
        "id": "course-schedule",
        "title": "Course Schedule",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Course Schedule",
            "explanation": ""
        }
    }
]
};
