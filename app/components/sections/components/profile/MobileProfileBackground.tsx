"use client";
import { motion } from "framer-motion";

const MobileProfileBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden sm:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(249,115,22,0.18),transparent_36%)]" />

      <motion.div
        className="absolute -left-28 top-[12%] h-80 w-80 rounded-full bg-orange-500/25 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 80, 160, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 top-[34%] h-96 w-96 rounded-full bg-red-500/20 blur-3xl"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, -60, 120, 0],
          scale: [1, 0.9, 1.18, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[52%] h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/15 blur-3xl"
        animate={{
          x: ["-50%", "-42%", "-58%", "-50%"],
          y: [0, 100, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-20 bottom-[12%] h-80 w-80 rounded-full bg-red-600/15 blur-3xl"
        animate={{
          x: [0, 70, 30, 0],
          y: [0, -80, -160, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(251,146,60,0.10),transparent_32%),radial-gradient(circle_at_80%_55%,rgba(239,68,68,0.10),transparent_34%),radial-gradient(circle_at_50%_78%,rgba(249,115,22,0.08),transparent_36%)]" />
    </div>
  );
};

export default MobileProfileBackground;
