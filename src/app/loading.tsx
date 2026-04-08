"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
        />

        {/* NEXOVA Logo Text with Pulse */}
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            NEXOVA
          </h2>
          <p className="text-gray-400 text-sm mt-2">Loading...</p>
        </motion.div>
      </div>
    </div>
  );
}
