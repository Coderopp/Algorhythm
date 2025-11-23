import { Topic } from "../schema";

export const graphsTopic: Topic = {
  id: "graphs",
  title: "Graphs",
  description: "Networks and relationships. Master BFS, DFS, and shortest path algorithms.",
  icon: "Network",
  totalXp: 450,
  progress: 0,
  color: "bg-cyan-500",
  lessons: [
    {
      id: "graph-intro",
      title: "Graph Fundamentals",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "What is a Graph?",
        explanation: "A <b>Graph</b> is a collection of nodes (vertices) connected by edges. Graphs can be directed or undirected, weighted or unweighted.",
        code: "# Adjacency List representation\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A', 'D'],\n    'D': ['B', 'C']\n}",
        visualizationSteps: [
          { step: 0, array: [1], pointers: {}, message: "Node A", highlights: [0] },
          { step: 1, array: [1, 2, 3], pointers: {}, message: "A connects to B and C", highlights: [0, 1, 2] },
          { step: 2, array: [1, 2, 3, 4], pointers: {}, message: "B and C both connect to D", highlights: [1, 2, 3] },
          { step: 3, array: [1, 2, 3, 4], pointers: {}, message: "Complete graph!", highlights: [] }
        ]
      }
    },
    {
      id: "graph-representation",
      title: "Graph Representations",
      type: "theory",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Adjacency List vs Matrix",
        explanation: "<b>Adjacency List</b>: dict/array of neighbors. Space O(V+E). <b>Adjacency Matrix</b>: 2D array. Space O(V²). List is better for sparse graphs.",
        code: "# Matrix: graph[i][j] = 1 if edge exists\nmatrix = [\n    [0, 1, 1, 0],\n    [1, 0, 0, 1],\n    [1, 0, 0, 1],\n    [0, 1, 1, 0]\n]"
      }
    },
    {
      id: "bfs-intro",
      title: "Breadth-First Search (BFS)",
      type: "visualizer",
      duration: "8 min",
      xp: 40,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Level-by-Level Exploration",
        explanation: "<b>BFS</b> explores nodes level by level using a queue. Good for shortest path in unweighted graphs.",
        visualizationSteps: [
          { step: 0, array: [1], pointers: { queue: 0 }, message: "Start at node 1, add to queue", highlights: [0] },
          { step: 1, array: [1, 2, 3], pointers: { queue: 1 }, message: "Visit neighbors of 1: add 2, 3", highlights: [1, 2] },
          { step: 2, array: [1, 2, 3, 4], pointers: { queue: 2 }, message: "Visit neighbors of 2: add 4", highlights: [3] },
          { step: 3, array: [1, 2, 3, 4, 5], pointers: { queue: 3 }, message: "Visit neighbors of 3: add 5", highlights: [4] },
          { step: 4, array: [1, 2, 3, 4, 5], pointers: {}, message: "All nodes visited!", highlights: [] }
        ]
      }
    },
    {
      id: "dfs-intro",
      title: "Depth-First Search (DFS)",
      type: "visualizer",
      duration: "8 min",
      xp: 40,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Deep Exploration First",
        explanation: "<b>DFS</b> explores as deep as possible before backtracking. Uses recursion or stack. Good for cycle detection, pathfinding.",
        visualizationSteps: [
          { step: 0, array: [1], pointers: { stack: 0 }, message: "Start at node 1", highlights: [0] },
          { step: 1, array: [1, 2], pointers: { stack: 1 }, message: "Go deep: visit 2", highlights: [1] },
          { step: 2, array: [1, 2, 4], pointers: { stack: 2 }, message: "Go deeper: visit 4", highlights: [2] },
          { step: 3, array: [1, 2, 4, 3], pointers: { stack: 1 }, message: "Backtrack and visit 3", highlights: [3] },
          { step: 4, array: [1, 2, 4, 3, 5], pointers: {}, message: "Complete DFS traversal", highlights: [4] }
        ]
      }
    },
    {
      id: "graph-traversal-quiz",
      title: "BFS vs DFS Quiz",
      type: "quiz",
      duration: "10 min",
      xp: 50,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "Which algorithm guarantees shortest path in unweighted graph?",
            data: { options: ["BFS", "DFS", "Both", "Neither"] },
            correctAnswer: "BFS"
          },
          {
            id: 2,
            type: "multiple-choice",
            prompt: "Which data structure does BFS use?",
            data: { options: ["Queue", "Stack", "Heap", "Tree"] },
            correctAnswer: "Queue"
          },
          {
            id: 3,
            type: "multiple-choice",
            prompt: "Which is better for detecting cycles?",
            data: { options: ["DFS", "BFS", "Both work", "Neither"] },
            correctAnswer: "DFS"
          }
        ]
      }
    },
    {
      id: "dijkstra-intro",
      title: "Dijkstra's Algorithm",
      type: "theory",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Shortest Path in Weighted Graphs",
        explanation: "<b>Dijkstra's Algorithm</b> finds shortest paths from source to all nodes in weighted graphs with non-negative weights. Uses priority queue.",
        code: "import heapq\ndef dijkstra(graph, start):\n    distances = {node: float('inf') for node in graph}\n    distances[start] = 0\n    pq = [(0, start)]\n    \n    while pq:\n        curr_dist, node = heapq.heappop(pq)\n        for neighbor, weight in graph[node]:\n            dist = curr_dist + weight\n            if dist < distances[neighbor]:\n                distances[neighbor] = dist\n                heapq.heappush(pq, (dist, neighbor))"
      }
    },
    {
      id: "topological-sort",
      title: "Topological Sort",
      type: "theory",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Linear Ordering of DAG",
        explanation: "<b>Topological Sort</b> orders nodes in a Directed Acyclic Graph (DAG) so that for every edge u→v, u comes before v. Used in task scheduling.",
        code: "# Kahn's Algorithm using in-degree\nfrom collections import deque\ndef topological_sort(graph):\n    in_degree = {node: 0 for node in graph}\n    for node in graph:\n        for neighbor in graph[node]:\n            in_degree[neighbor] += 1\n    \n    queue = deque([n for n in in_degree if in_degree[n] == 0])\n    result = []\n    \n    while queue:\n        node = queue.popleft()\n        result.append(node)\n        for neighbor in graph[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    \n    return result"
      }
    },
    {
      id: "graph-challenge",
      title: "Challenge: Find Connected Components",
      type: "challenge",
      duration: "15 min",
      xp: 80,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "To count connected components in undirected graph, you should:",
            data: { options: ["Run BFS/DFS from each unvisited node", "Use Dijkstra", "Sort the graph", "Use a heap"] },
            correctAnswer: "Run BFS/DFS from each unvisited node"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Complete the DFS helper for counting components:",
            data: { placeholder: "def dfs(node, visited):\n    visited.add(___)\n    for neighbor in graph[node]:\n        if neighbor not in ___:\n            dfs(___, visited)" },
            correctAnswer: "visited.add(node)\nif neighbor not in visited:\ndfs(neighbor, visited)"
          }
        ]
      }
    }
  ]
};
