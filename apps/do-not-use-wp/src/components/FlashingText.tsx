"use client";

import { motion, Variants } from "motion/react";

export default function FlashingText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const strings = children.split("");

  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0.1 },
    animate: {
      opacity: [0.1, 0.6, 0.1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      {strings.map((string, index) => (
        <motion.span key={index} variants={itemVariants}>
          {string}
        </motion.span>
      ))}
    </motion.span>
  );
}
