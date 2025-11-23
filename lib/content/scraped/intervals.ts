import { Topic } from "../../schema";

export const intervalsTopic: Topic = {
  id: "intervals",
  title: "Intervals",
  description: "Master intervals techniques and algorithms.",
  icon: "CalendarRange",
  totalXp: 600,
  progress: 0,
  color: "bg-teal-500",
  lessons: [
    {
        "id": "overview",
        "title": "Overview",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Overview",
            "explanation": "Our solution will sort the intervals, and then greedily try to add each interval to the set of non-overlapping intervals.\n\nWe sort the intervals by their end times, and then iterate over each interval, keeping a count of all intervals that DO NOT overlap with the last interval in the non-overlapping set. We return the total number of intervals minus the count of NON-overlapping intervals.\n\nNon-Overlapping Intervals\n\nIf we sort by start time, we risk adding an interval that starts early but ends late, which will block us from adding other intervals until that interval ends.\n\nTo see why we sometimes want to sort by end times instead of start time, let's consider the question of finding the maximum number of non-overlapping intervals in a given list of intervals.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
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
                        6,
                        9
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
                        2,
                        5
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
        "id": "non-overlapping-intervals",
        "title": "Non-Overlapping Intervals",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Non-Overlapping Intervals",
            "explanation": "Handling non-overlapping intervals.",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        4,
                        10
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
        "id": "can-attend-meetings",
        "title": "Can Attend Meetings",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Can Attend Meetings",
            "explanation": "Note that meetings ending and starting at the same time, such as (0,5) and (5,10), do not conflict.\n\nOtherwise, the person can attend both meetings, and we continue to the next interval. If we reach the end of the list without finding any overlapping intervals, then the person can attend all meetings, and we return true.\n\nA person can attend all meetings if and only if none of the meetings overlap. By sorting the intervals by start time, we can easily check if any two consecutive intervals overlap.\n\nTwo overlapping meeting intervals\n\nWe iterate over each interval, beginning with the second interval in the sorted list. We compare the start time of the current interval with the end time of the previous interval. If the start time of the current interval is less than the end time of the previous interval, then the two intervals overlap and the person cannot attend both meetings, so we return false."
        }
    },
    {
        "id": "insert-interval",
        "title": "Insert Interval",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Insert Interval",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
                        7,
                        10
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
        "id": "employee-free-time",
        "title": "Employee Free Time",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Employee Free Time",
            "explanation": "This is because the problem asks for common free time when all employees are available, and we're only given their scheduled busy intervals within a certain working timeframe.\n\nIn this phase, we return the employee free times by finding the gaps between the merged intervals. We can do this by iterating through the merged intervals, and creating a new interval from the end time of the current interval and the start time of the next interval.\n\nImportant Note on Boundaries\n\nTime after the latest busy interval (e.g., if the last meeting ends at 5:00 PM, we don't count 5:00-6:00 PM as \\\n\nTime before the earliest busy interval (e.g., if the first meeting starts at 9:00 AM, we don't count 8:00-9:00 AM as \\",
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
                        2,
                        11
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
                        15
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
        "id": "merge-intervals",
        "title": "Merge Intervals",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Merge Intervals",
            "explanation": "",
            "code": "# Code extracted from RSC",
            "visualizationSteps": [
                {
                    "step": 0,
                    "array": [
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
                        4,
                        5
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
