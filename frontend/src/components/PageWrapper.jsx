import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

function PageWrapper({ children, className = "" }) {
  return (
    <motion.main
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}

export default PageWrapper;
