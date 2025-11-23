import { Topic } from "../../schema";

export const trieTopic: Topic = {
  id: "trie",
  title: "Trie",
  description: "Master trie techniques and algorithms.",
  icon: "TreeDeciduous",
  totalXp: 300,
  progress: 0,
  color: "bg-lime-500",
  lessons: [
    {
        "id": "implement-trie-methods",
        "title": "Implement Trie Methods",
        "type": "quiz",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": false,
        "content": {
            "title": "Implement Trie Methods",
            "explanation": "The Trie below contains BAT and BATH. To delete BAT, we need to unmark T as the end of a word.\n\nTo delete a word from a trie, we need to first unmark the node corresponding to the last character of the word as the end of a word.\n\nDo not modify any parts of the code other than the functions labled with \\\n\nIt will help to refresh your memory on how to visualize each operation before diving into the implementation.\n\nThe intiution for searching is to search for each character in the word by traversing down nodes in the trie. When we reach the end of the word, we check if that node is marked as the end of a word. This is necessary"
        }
    },
    {
        "id": "prefix-matching",
        "title": "Prefix Matching",
        "type": "visualizer",
        "duration": "5 min",
        "xp": 100,
        "isCompleted": false,
        "isLocked": true,
        "content": {
            "title": "Prefix Matching",
            "explanation": "Step 1: Search for the Prefix\n\nAfter finding the node that corresponds to the prefix, we perform a depth-first search to find all words that have the given prefix.\n\nThe animation below visualizes what that looks like:\n\nThe first step is to search for the prefix in the trie. We start from the root node and traverse down the trie to find the node that corresponds to the prefix. If the prefix does not exist in the trie, we return an empty list. We stop at the node that corresponds to the prefix.\n\nStep 2: Perform Depth-First Search",
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
            "explanation": "Strings with a common prefix share the same nodes in the trie. For example, the strings APPLE and APP share the nodes A, P, and P.\n\nA trie allows us to efficiently search if a given word exists in the trie. For example, we can search for the word APPLE by starting at the root of the trie and following the nodes along the path animated below:\n\nA trie (also known as a Prefix Tree) stores a set of strings in a tree-like data structure. The trie below stores the strings APPLE, APP, BAT, BALL, BATS, and BALL:",
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
    }
]
};
