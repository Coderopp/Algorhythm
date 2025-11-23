import { Topic } from "../schema";

export const dpTopic: Topic = {
  id: "dynamic-programming",
  title: "Dynamic Programming",
  description: "Optimize recursive solutions. Memoization, tabulation, and classic DP problems.",
  icon: "Layers",
  totalXp: 500,
  progress: 0,
  color: "bg-indigo-500",
  lessons: [
    {
      id: "dp-intro",
      title: "What is Dynamic Programming?",
      type: "theory",
      duration: "6 min",
      xp: 30,
      isCompleted: false,
      isLocked: false,
      content: {
        title: "Optimal Substructure + Overlapping Subproblems",
        explanation: "<b>Dynamic Programming (DP)</b> solves complex problems by breaking them into simpler subproblems. Key: store solutions to avoid recomputation.",
        code: "# Naive Fibonacci: O(2^n)\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\n# DP Fibonacci: O(n)\nmemo = {}\ndef fib_dp(n):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fib_dp(n-1) + fib_dp(n-2)\n    return memo[n]"
      }
    },
    {
      id: "memoization",
      title: "Top-Down: Memoization",
      type: "visualizer",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Recursive + Cache",
        explanation: "<b>Memoization</b> is top-down DP. Write recursive solution, add cache to store computed values. Natural and intuitive.",
        code: "from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(100))  # Fast!",
        visualizationSteps: [
          { step: 0, array: [0, 1], pointers: {}, message: "Base cases: fib(0)=0, fib(1)=1", highlights: [0, 1] },
          { step: 1, array: [0, 1, 1], pointers: {}, message: "fib(2) = fib(1) + fib(0) = 1", highlights: [2] },
          { step: 2, array: [0, 1, 1, 2], pointers: {}, message: "fib(3) = fib(2) + fib(1) = 2", highlights: [3] },
          { step: 3, array: [0, 1, 1, 2, 3, 5], pointers: {}, message: "Cached values, no recomputation!", highlights: [] }
        ]
      }
    },
    {
      id: "tabulation",
      title: "Bottom-Up: Tabulation",
      type: "theory",
      duration: "5 min",
      xp: 25,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Iterative + Table",
        explanation: "<b>Tabulation</b> is bottom-up DP. Build table iteratively from base cases. Often more space-efficient.",
        code: "def fib_tab(n):\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]\n\n# Space optimized O(1)\ndef fib_optimized(n):\n    if n <= 1:\n        return n\n    prev, curr = 0, 1\n    for _ in range(2, n + 1):\n        prev, curr = curr, prev + curr\n    return curr"
      }
    },
    {
      id: "climbing-stairs",
      title: "Classic: Climbing Stairs",
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
            prompt: "To climb n stairs (1 or 2 steps at a time), the recurrence is:",
            data: { options: ["dp[n] = dp[n-1] + dp[n-2]", "dp[n] = dp[n-1] * dp[n-2]", "dp[n] = dp[n-1]", "dp[n] = 2^n"] },
            correctAnswer: "dp[n] = dp[n-1] + dp[n-2]"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Base cases for climbing stairs problem:",
            data: { placeholder: "dp[0] = ___\ndp[1] = ___" },
            correctAnswer: "dp[0] = 1\ndp[1] = 1"
          }
        ]
      }
    },
    {
      id: "coin-change",
      title: "Coin Change Problem",
      type: "theory",
      duration: "7 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Minimum Coins for Amount",
        explanation: "Given coins and amount, find minimum coins needed. Classic DP: try each coin, take minimum.",
        code: "def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    \n    for i in range(1, amount + 1):\n        for coin in coins:\n            if coin <= i:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    \n    return dp[amount] if dp[amount] != float('inf') else -1\n\nprint(coin_change([1, 2, 5], 11))  # Output: 3 (5+5+1)"
      }
    },
    {
      id: "knapsack-01",
      title: "0/1 Knapsack",
      type: "theory",
      duration: "8 min",
      xp: 40,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Maximize Value with Weight Limit",
        explanation: "<b>0/1 Knapsack</b>: Given items with weights and values, maximize value without exceeding capacity. Can't split items.",
        code: "def knapsack(weights, values, capacity):\n    n = len(weights)\n    dp = [[0] * (capacity + 1) for _ in range(n + 1)]\n    \n    for i in range(1, n + 1):\n        for w in range(1, capacity + 1):\n            if weights[i-1] <= w:\n                # Take or skip item\n                dp[i][w] = max(\n                    values[i-1] + dp[i-1][w - weights[i-1]],\n                    dp[i-1][w]\n                )\n            else:\n                dp[i][w] = dp[i-1][w]\n    \n    return dp[n][capacity]"
      }
    },
    {
      id: "lcs",
      title: "Longest Common Subsequence",
      type: "theory",
      duration: "7 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "String DP Classic",
        explanation: "<b>LCS</b>: Find longest subsequence common to two strings. Not contiguous. Used in diff tools, DNA analysis.",
        code: "def lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    \n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    \n    return dp[m][n]\n\nprint(lcs('ABCDGH', 'AEDFHR'))  # Output: 3 (ADH)"
      }
    },
    {
      id: "edit-distance",
      title: "Edit Distance (Levenshtein)",
      type: "theory",
      duration: "7 min",
      xp: 35,
      isCompleted: false,
      isLocked: true,
      content: {
        title: "Minimum Edits to Transform",
        explanation: "<b>Edit Distance</b>: Minimum insertions, deletions, or substitutions to transform one string to another.",
        code: "def edit_distance(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    \n    for i in range(m + 1):\n        dp[i][0] = i\n    for j in range(n + 1):\n        dp[0][j] = j\n    \n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(\n                    dp[i-1][j],    # delete\n                    dp[i][j-1],    # insert\n                    dp[i-1][j-1]   # replace\n                )\n    \n    return dp[m][n]"
      }
    },
    {
      id: "dp-patterns",
      title: "Common DP Patterns",
      type: "quiz",
      duration: "12 min",
      xp: 60,
      isCompleted: false,
      isLocked: true,
      content: {
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            prompt: "Which pattern: 'Choose or skip' each item?",
            data: { options: ["0/1 Knapsack", "Fibonacci", "LCS", "Matrix Chain"] },
            correctAnswer: "0/1 Knapsack"
          },
          {
            id: 2,
            type: "multiple-choice",
            prompt: "Which pattern: 'Match characters from two sequences'?",
            data: { options: ["String DP (LCS, Edit Distance)", "Knapsack", "Fibonacci", "Kadane"] },
            correctAnswer: "String DP (LCS, Edit Distance)"
          },
          {
            id: 3,
            type: "multiple-choice",
            prompt: "Space optimization: If dp[i] only depends on dp[i-1], you need:",
            data: { options: ["O(1) space with variables", "O(n²) space", "O(n) space", "O(log n) space"] },
            correctAnswer: "O(1) space with variables"
          }
        ]
      }
    },
    {
      id: "dp-challenge",
      title: "Challenge: House Robber",
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
            prompt: "Can't rob adjacent houses. Recurrence relation:",
            data: { 
              options: [
                "dp[i] = max(nums[i] + dp[i-2], dp[i-1])",
                "dp[i] = nums[i] + dp[i-1]",
                "dp[i] = max(nums[i], dp[i-1])",
                "dp[i] = nums[i] * dp[i-2]"
              ]
            },
            correctAnswer: "dp[i] = max(nums[i] + dp[i-2], dp[i-1])"
          },
          {
            id: 2,
            type: "code-input",
            prompt: "Base cases for house robber:",
            data: { placeholder: "dp[0] = ___\ndp[1] = ___" },
            correctAnswer: "dp[0] = nums[0]\ndp[1] = max(nums[0], nums[1])"
          }
        ]
      }
    }
  ]
};
