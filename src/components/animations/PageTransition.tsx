"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageTransition({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(5px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
