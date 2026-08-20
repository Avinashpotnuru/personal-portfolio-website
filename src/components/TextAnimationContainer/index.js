"use client";

import React from "react";
import { motion } from "framer-motion";

const letterAnimation = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const wordsContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 5,
      staggerChildren: 0.08,
      // delayChildren: 0.5 * i,
    },
  },
};

const TextContainer = ({ text, className }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      variants={wordsContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={letterAnimation}
          key={index}
          className={className}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextContainer;
