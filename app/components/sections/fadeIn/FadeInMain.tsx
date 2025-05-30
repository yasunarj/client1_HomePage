"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeInMain = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.main>
  );
};

export default FadeInMain;
