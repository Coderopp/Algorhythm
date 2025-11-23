"use client";

import { useState, useEffect } from "react";

interface GameState {
  hearts: number;
  streak: number;
  completedLessons: number[];
  lastPlayedDate: string | null;
}

const INITIAL_STATE: GameState = {
  hearts: 5,
  streak: 0,
  completedLessons: [],
  lastPlayedDate: null,
};

export function useGameState() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("algorhythm-state");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse game state", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("algorhythm-state", JSON.stringify(state));
    }
  }, [state, isLoaded]);

  const decrementHearts = () => {
    setState((prev) => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
    }));
  };

  const restoreHearts = () => {
    setState((prev) => ({
      ...prev,
      hearts: 5,
    }));
  };

  const completeLesson = (lessonId: number) => {
    setState((prev) => {
      const today = new Date().toISOString().split("T")[0];
      const isNewDay = prev.lastPlayedDate !== today;
      
      // Increment streak if it's a new day (simplified logic)
      // In a real app, we'd check if it's consecutive days
      const newStreak = isNewDay ? prev.streak + 1 : prev.streak;

      return {
        ...prev,
        completedLessons: [...new Set([...prev.completedLessons, lessonId])],
        streak: newStreak,
        lastPlayedDate: today,
      };
    });
  };

  return {
    state,
    isLoaded,
    decrementHearts,
    restoreHearts,
    completeLesson,
  };
}
