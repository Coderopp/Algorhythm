"use client";

import { motion } from "framer-motion";
import { Check, Lock, Star } from "lucide-react";
import { Mascot } from "../Mascot";

interface PathNode {
  id: number;
  status: "completed" | "active" | "locked";
  title: string;
}

interface PathViewProps {
  nodes: PathNode[];
  onNodeClick: (id: number) => void;
}

export function PathView({ nodes, onNodeClick }: PathViewProps) {
  return (
    <div className="flex flex-col items-center py-12 space-y-8 relative max-w-md mx-auto">
      {/* SVG Path Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 z-0">
        <svg className="w-full h-full overflow-visible">
          <path
            d={`M 0 0 V ${nodes.length * 120}`}
            stroke="#E2E8F0"
            strokeWidth="4"
            strokeDasharray="10 10"
            fill="none"
          />
        </svg>
      </div>

      {nodes.map((node, index) => (
        <div key={node.id} className="relative z-10 w-full flex justify-center">
          <NodeItem node={node} index={index} onClick={() => onNodeClick(node.id)} />
        </div>
      ))}
    </div>
  );
}

function NodeItem({ node, index, onClick }: { node: PathNode; index: number; onClick: () => void }) {
  const isEven = index % 2 === 0;
  const xOffset = isEven ? -20 : 20; // Zig-zag effect slightly

  return (
    <div className="relative" style={{ transform: `translateX(${xOffset}px)` }}>
      {/* Mascot sits on top of Active Node */}
      {node.status === "active" && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20">
          <Mascot state="idle" className="scale-75" />
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        disabled={node.status === "locked"}
        className={`w-20 h-20 rounded-full flex items-center justify-center border-b-4 shadow-lg transition-colors ${
          node.status === "completed"
            ? "bg-yellow-400 border-yellow-600 text-white"
            : node.status === "active"
            ? "bg-brand-green border-green-700 text-white animate-pulse-slow"
            : "bg-slate-200 border-slate-300 text-slate-400"
        }`}
      >
        {node.status === "completed" && <Check size={32} strokeWidth={4} />}
        {node.status === "active" && <Star size={32} fill="currentColor" />}
        {node.status === "locked" && <Lock size={24} />}
      </motion.button>
      
      {/* Tooltip / Label */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? "-left-32 text-right" : "-right-32 text-left"} w-28`}>
        <span className={`text-sm font-bold ${node.status === "locked" ? "text-slate-400" : "text-slate-700"}`}>
          {node.title}
        </span>
      </div>
    </div>
  );
}
