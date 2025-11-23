"use client";

import { motion, Reorder } from "framer-motion";
import { useState, useEffect } from "react";

interface ParsonsProblemProps {
  blocks: string[];
  solution: string[] | null;
  onUpdate: (solution: string[]) => void;
  disabled?: boolean;
}

export function ParsonsProblem({ blocks, solution, onUpdate, disabled }: ParsonsProblemProps) {
  // Initialize with shuffled blocks if no solution yet
  const [items, setItems] = useState(solution || blocks);

  useEffect(() => {
    if (solution) {
      setItems(solution);
    }
  }, [solution]);

  const handleReorder = (newOrder: string[]) => {
    if (disabled) return;
    setItems(newOrder);
    onUpdate(newOrder);
  };

  return (
    <div className="w-full">
      <p className="text-slate-500 mb-4 text-sm">Drag and drop the blocks to reorder them correctly.</p>
      <Reorder.Group axis="y" values={items} onReorder={handleReorder} className="space-y-3">
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className={`p-4 bg-white rounded-xl border-2 border-slate-200 shadow-sm cursor-grab active:cursor-grabbing font-mono text-slate-700 ${
              disabled ? "cursor-default" : ""
            }`}>
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
