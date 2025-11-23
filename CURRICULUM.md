# AlgoRhythm - Complete DSA Curriculum

## Overview
A comprehensive, interactive learning platform for Data Structures & Algorithms in Python. Designed for mobile-first experience with gamification, visualizations, and hands-on challenges.

## 📚 Complete Curriculum Structure

### **Module 1: Fundamentals** (730 XP)
Master the core data structures used in everyday programming.

#### 🔷 **Arrays** (330 XP - 9 lessons)
1. **What is an Array?** (Theory + Viz) - O(1) access, contiguous memory
2. **Visualizing Access** (Visualizer) - Index-based random access
3. **Array Mastery Quiz** (Quiz) - Time complexity, creation, operations
4. **Insertion & Deletion** (Visualizer) - O(n) operations, shifting elements
5. **Two Pointers Technique** (Visualizer) - Efficient traversal patterns
6. **Sliding Window Pattern** (Theory) - Subarray optimizations
7. **2D Arrays (Matrix)** (Visualizer) - Rows, columns, traversal
8. **Challenge: Remove Duplicates** (Challenge) - In-place modifications

#### 🔗 **Linked Lists** (300 XP - 5 lessons)
1. **Introduction to Linked Lists** (Visualizer) - Nodes, pointers, dynamic structure
2. **Traversing a Linked List** (Visualizer) - Following next pointers
3. **Insertion Operations** (Quiz) - O(1) at head, O(n) in middle
4. **Deletion Operations** (Quiz) - Removing nodes, updating links
5. **Challenge: Reversing a Linked List** (Challenge) - Iterative reversal

#### 📚 **Stacks & Queues** (280 XP - 6 lessons)
1. **Stack Fundamentals** (Visualizer) - LIFO, push/pop operations
2. **Stack Operations** (Visualizer) - Push, pop, peek animations
3. **Queue Fundamentals** (Visualizer) - FIFO, enqueue/dequeue
4. **Queue Operations** (Visualizer) - Front and rear operations
5. **Stack & Queue Mastery** (Quiz) - Applications, time complexity
6. **Challenge: Balanced Parentheses** (Challenge) - Classic stack problem

---

### **Module 2: Hierarchical Structures** (850 XP)
Trees and graphs for modeling complex relationships.

#### 🌳 **Trees** (400 XP - 9 lessons)
1. **Introduction to Trees** (Visualizer) - Hierarchical structure, root, children
2. **Binary Trees** (Visualizer) - Left/right children, levels
3. **Preorder Traversal** (Visualizer) - Root → Left → Right
4. **Inorder Traversal** (Visualizer) - Left → Root → Right (sorted in BST)
5. **Postorder Traversal** (Theory) - Left → Right → Root
6. **Binary Search Trees** (Visualizer) - Left < Parent < Right property
7. **BST Search & Insert** (Quiz) - O(log n) operations
8. **Heaps & Priority Queues** (Theory) - Min/max heap, heapify
9. **Challenge: Tree Height** (Challenge) - Recursive calculation

#### 🕸️ **Graphs** (450 XP - 8 lessons)
1. **Graph Fundamentals** (Visualizer) - Vertices, edges, directed/undirected
2. **Graph Representations** (Theory) - Adjacency list vs matrix
3. **Breadth-First Search (BFS)** (Visualizer) - Level-by-level, queue-based
4. **Depth-First Search (DFS)** (Visualizer) - Deep exploration, stack/recursion
5. **BFS vs DFS Quiz** (Quiz) - Use cases, data structures
6. **Dijkstra's Algorithm** (Theory) - Shortest path, weighted graphs
7. **Topological Sort** (Theory) - DAG ordering, Kahn's algorithm
8. **Challenge: Connected Components** (Challenge) - DFS/BFS application

---

### **Module 3: Core Algorithms** (550 XP)
Essential algorithms for searching and sorting.

#### 🔃 **Sorting Algorithms** (350 XP - 8 lessons)
1. **Bubble Sort** (Visualizer) - Adjacent swaps, O(n²)
2. **Selection Sort** (Visualizer) - Find minimum, swap to front
3. **Insertion Sort** (Visualizer) - Insert into sorted position
4. **Merge Sort** (Theory) - Divide & conquer, O(n log n)
5. **Quick Sort** (Theory) - Partition around pivot, average O(n log n)
6. **Sorting Algorithm Comparison** (Quiz) - Time/space complexity
7. **Counting Sort** (Theory) - Non-comparison, O(n+k)
8. **Challenge: Custom Sort** (Challenge) - Key functions, lambda

#### 🔍 **Searching Algorithms** (200 XP - 1 lesson)
1. **Binary Search** (Theory) - O(log n) divide & conquer search

---

### **Module 4: Advanced Topics** (1,050 XP)
Advanced problem-solving techniques.

#### 💎 **Dynamic Programming** (500 XP - 10 lessons)
1. **What is Dynamic Programming?** (Theory) - Overlapping subproblems, optimal substructure
2. **Top-Down: Memoization** (Visualizer) - Recursive + cache
3. **Bottom-Up: Tabulation** (Theory) - Iterative table building
4. **Classic: Climbing Stairs** (Quiz) - Fibonacci pattern
5. **Coin Change Problem** (Theory) - Minimum coins for amount
6. **0/1 Knapsack** (Theory) - Maximize value with weight limit
7. **Longest Common Subsequence** (Theory) - String DP
8. **Edit Distance** (Theory) - Levenshtein distance
9. **Common DP Patterns** (Quiz) - Pattern recognition
10. **Challenge: House Robber** (Challenge) - Non-adjacent selection

#### ⚡ **Greedy Algorithms** (250 XP - 1 lesson)
1. **Greedy Strategy** (Theory) - Locally optimal choices, activity selection

#### 🔀 **Backtracking** (300 XP - 1 lesson)
1. **Backtracking Fundamentals** (Theory) - Try, fail, backtrack, permutations

---

## 🎮 Learning Features

### Lesson Types
- **Theory**: Code examples with syntax highlighting
- **Visualizer**: Step-by-step animated walkthroughs
- **Quiz**: Multiple choice, Parsons problems, bug spotting, code input
- **Challenge**: Advanced problems testing mastery

### Gamification
- ❤️ **Hearts System**: 5 hearts, lose 1 per mistake
- 🔥 **Daily Streaks**: Build consistent learning habits
- 💎 **XP Points**: 3,180+ total XP to earn
- 🏆 **Achievements**: Shareable milestone cards
- 🎵 **Sound Effects**: Success, error, completion feedback

### Progress Tracking
- ✅ Lesson completion tracking
- 🔒 Progressive unlocking (complete previous to unlock next)
- 📊 Topic progress percentage
- 🎯 Module-level organization

---

## 📱 Technical Implementation

### Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, Framer Motion, Tailwind CSS
- **Icons**: Lucide React
- **Storage**: LocalStorage for game state
- **Testing**: Vitest (unit), Playwright (E2E)

### Project Structure
```
lib/
  content/
    arrays.ts              # 9 lessons
    linked-lists.ts        # 5 lessons
    stacks-queues.ts       # 6 lessons
    trees.ts               # 9 lessons
    graphs.ts              # 8 lessons
    sorting.ts             # 8 lessons
    dynamic-programming.ts # 10 lessons
  content-engine.ts        # Module orchestration
  schema.ts                # Type definitions
  
components/
  lesson/
    LessonMode.tsx                    # Main lesson controller
    InteractiveLessonView.tsx         # Theory/visualizer view
    visualizer/
      AlgorithmVisualizer.tsx         # Step-by-step animations
      SyntaxCard.tsx                  # Code display with run
    question-types/
      MultipleChoice.tsx
      ParsonsProblem.tsx
      BugFix.tsx
      CodeInput.tsx
  dashboard/
    PathView.tsx                      # Node-based progress path
    TopicDetailView.tsx               # Lesson list per topic
  onboarding/
    OnboardingScreen.tsx              # Personalized setup
```

---

## 🎯 Learning Outcomes

### By Module Completion

**Fundamentals** → Understand core data structures, time complexity, basic operations

**Hierarchical** → Master tree/graph traversals, search algorithms, pathfinding

**Algorithms** → Implement and analyze sorting/searching algorithms

**Advanced** → Solve complex problems with DP, greedy, backtracking

### Interview Readiness
- ✅ 70+ lessons covering all major DSA topics
- ✅ Hands-on coding practice with immediate feedback
- ✅ Pattern recognition (two pointers, sliding window, DP patterns)
- ✅ Time/space complexity analysis
- ✅ Real-world algorithm applications

---

## 🚀 Getting Started

1. **Onboarding**: Select your goal, Python level, and daily intensity
2. **Dashboard**: View 4 modules with node-based progress path
3. **Topic Selection**: Choose a topic to see lesson breakdown
4. **Lessons**: Complete in order (locked until previous finished)
5. **Challenges**: Test mastery with advanced problems
6. **Share**: Generate and share achievement cards

---

## 📈 Future Enhancements

### Content
- [ ] Bit manipulation module
- [ ] Advanced graph algorithms (Floyd-Warshall, Bellman-Ford)
- [ ] String algorithms (KMP, Rabin-Karp)
- [ ] System design basics
- [ ] Complexity analysis deep dive

### Features
- [ ] Code execution sandbox
- [ ] Hint system with Mascot
- [ ] Leaderboards
- [ ] Community challenges
- [ ] Spaced repetition review
- [ ] Video explanations
- [ ] Multi-language support (JavaScript, Java, C++)

### Technical
- [ ] Backend API (progress sync)
- [ ] Database integration
- [ ] Real Google OAuth
- [ ] PWA support
- [ ] Offline mode
- [ ] Analytics dashboard

---

## 📊 Stats
- **Total Lessons**: 70+
- **Total XP**: 3,180+
- **Modules**: 4
- **Topics**: 10
- **Lesson Types**: 4 (Theory, Visualizer, Quiz, Challenge)
- **Visualizations**: 30+ interactive step-by-step animations
- **Code Examples**: 70+ syntax-highlighted snippets

Built with ❤️ for aspiring software engineers and CS students.
