import { Course, Module, Topic } from "./schema";
import { arraysTopic } from "./content/arrays";
import { linkedListsTopic } from "./content/linked-lists";
import { stacksQueuesTopic } from "./content/stacks-queues";
import { treesTopic } from "./content/trees";
import { graphsTopic } from "./content/graphs";
import { sortingTopic } from "./content/sorting";
import { dpTopic } from "./content/dynamic-programming";

// Scraped content from HelloInterview.com
import { 
  two_pointersTopic,
  sliding_windowTopic,
  binary_searchTopic,
  linked_listTopic as scrapedLinkedListTopic,
  stackTopic as scrapedStackTopic,
  heapTopic,
  graphsTopic as scrapedGraphsTopic,
  dynamic_programmingTopic as scrapedDpTopic,
  backtrackingTopic,
  trieTopic,
  intervalsTopic,
  matricesTopic,
  prefix_sumTopic,
  greedyTopic,
  breadth_first_searchTopic,
  depth_first_searchTopic
} from "./content/scraped/index";

// This would eventually load from a DB or API
export const contentEngine = {
  getCourse: (): Course => {
    return {
      id: "dsa-python",
      title: "Data Structures & Algorithms in Python",
      modules: [
        {
          id: "fundamentals",
          title: "Fundamentals",
          description: "Core data structures you'll use every day.",
          topics: [
            arraysTopic,
            linkedListsTopic,
            scrapedLinkedListTopic,  // Additional linked list problems
            stacksQueuesTopic,
            scrapedStackTopic,  // Additional stack problems
            heapTopic
          ]
        },
        {
          id: "hierarchical",
          title: "Hierarchical Structures",
          description: "Trees and graphs for complex relationships.",
          topics: [
            treesTopic,
            graphsTopic,
            scrapedGraphsTopic,  // Additional graph problems
            trieTopic,
            breadth_first_searchTopic,
            depth_first_searchTopic
          ]
        },
        {
          id: "algorithms",
          title: "Core Algorithms",
          description: "Sorting, searching, and optimization techniques.",
          topics: [
            sortingTopic,
            binary_searchTopic,  // Scraped binary search problems
            two_pointersTopic,
            sliding_windowTopic
          ]
        },
        {
          id: "problem-patterns",
          title: "Problem Patterns",
          description: "Common problem-solving patterns and techniques.",
          topics: [
            intervalsTopic,
            matricesTopic,
            prefix_sumTopic
          ]
        },
        {
          id: "advanced",
          title: "Advanced Topics",
          description: "Dynamic programming, greedy algorithms, and more.",
          topics: [
            dpTopic,
            scrapedDpTopic,  // Additional DP problems
            greedyTopic,  // Scraped greedy problems
            backtrackingTopic  // Scraped backtracking problems
          ]
        }
      ]
    };
  },

  getTopic: (topicId: string): Topic | undefined => {
    const course = contentEngine.getCourse();
    for (const module of course.modules) {
      const topic = module.topics.find((t) => t.id === topicId);
      if (topic) return topic;
    }
    return undefined;
  }
};
