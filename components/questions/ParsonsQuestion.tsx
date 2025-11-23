"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ParsonsQuestion as ParsonsQuestionType } from "@/lib/types";
import { X } from "lucide-react";

interface ParsonsQuestionProps {
  data: ParsonsQuestionType;
  onUpdateOrder: (order: string[]) => void;
  isSubmitted: boolean;
}

export default function ParsonsQuestion({
  data,
  onUpdateOrder,
  isSubmitted,
}: ParsonsQuestionProps) {
  const [availableBlocks, setAvailableBlocks] = useState<string[]>([]);
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);

  // Initialize blocks on mount or when data changes
  useEffect(() => {
    setAvailableBlocks([...data.blocks]);
    setSelectedBlocks([]);
    onUpdateOrder([]);
  }, [data, onUpdateOrder]);

  const handleSelectBlock = (block: string) => {
    if (isSubmitted) return;
    
    const newAvailable = availableBlocks.filter((b) => b !== block);
    const newSelected = [...selectedBlocks, block];
    
    setAvailableBlocks(newAvailable);
    setSelectedBlocks(newSelected);
    onUpdateOrder(newSelected);
  };

  const handleRemoveBlock = (block: string) => {
    if (isSubmitted) return;

    const newSelected = selectedBlocks.filter((b) => b !== block);
    const newAvailable = [...availableBlocks, block];
    
    setSelectedBlocks(newSelected);
    setAvailableBlocks(newAvailable);
    onUpdateOrder(newSelected);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">{data.question}</h2>
      
      {/* Solution Area */}
      <div className="min-h-[160px] p-4 bg-gray-100 rounded-2xl border-2 border-gray-200 space-y-2">
        <AnimatePresence>
          {selectedBlocks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center text-gray-400 font-medium italic"
            >
              Tap blocks to arrange code here
            </motion.div>
          )}
          {selectedBlocks.map((block, index) => (
            <motion.button
              key={`${block}-${index}`}
              layoutId={block}
              onClick={() => handleRemoveBlock(block)}
              disabled={isSubmitted}
              className="w-full p-3 bg-white rounded-xl border-2 border-b-4 border-gray-200 font-mono text-sm text-left text-gray-800 shadow-sm active:border-b-2 active:translate-y-[2px] flex justify-between items-center group"
            >
              <span>{block}</span>
              {!isSubmitted && (
                <X className="w-4 h-4 text-gray-300 group-hover:text-red-400" />
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Source Area */}
      <div className="space-y-2">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          Tap to add
        </p>
        <div className="flex flex-wrap gap-2">
          {availableBlocks.map((block, index) => (
            <motion.button
              key={`${block}-source-${index}`}
              layoutId={block}
              onClick={() => handleSelectBlock(block)}
              disabled={isSubmitted}
              className="p-3 bg-white rounded-xl border-2 border-b-4 border-gray-200 font-mono text-sm text-gray-800 shadow-sm active:border-b-2 active:translate-y-[2px]"
            >
              {block}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
