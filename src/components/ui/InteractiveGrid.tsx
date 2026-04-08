"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface GridCell {
  id: string;
  x: number;
  y: number;
  opacity: number;
}

export default function InteractiveGrid() {
  const [cells, setCells] = useState<GridCell[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const fadingCellsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const GRID_SIZE = 20; // 20x20px cells
  const FADE_DURATION = 2000; // 2 seconds

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / GRID_SIZE) * GRID_SIZE;
      const y = Math.floor((e.clientY - rect.top) / GRID_SIZE) * GRID_SIZE;

      const cellId = `${x}-${y}`;

      // Clear existing fade timeout for this cell
      if (fadingCellsRef.current.has(cellId)) {
        clearTimeout(fadingCellsRef.current.get(cellId));
      }

      // Add or update cell
      setCells((prevCells) => {
        const existingCell = prevCells.find((c) => c.id === cellId);
        if (existingCell) {
          return prevCells.map((c) =>
            c.id === cellId ? { ...c, opacity: 1 } : c
          );
        }
        return [...prevCells, { id: cellId, x, y, opacity: 1 }];
      });

      // Set fade timeout
      const timeout = setTimeout(() => {
        setCells((prevCells) =>
          prevCells.filter((c) => c.id !== cellId)
        );
        fadingCellsRef.current.delete(cellId);
      }, FADE_DURATION);

      fadingCellsRef.current.set(cellId, timeout);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      fadingCellsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute w-5 h-5 rounded-sm"
          style={{
            left: cell.x,
            top: cell.y,
            background: "rgba(0, 240, 255, 0.6)",
            boxShadow: "0 0 12px rgba(0, 240, 255, 0.8)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION / 1000, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
