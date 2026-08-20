"use client";

import { motion } from "framer-motion";

const MotionWrapper = ({ as = "div", children, ...props }) => {
  const Tag = motion[as] || motion.div;
  return <Tag {...props}>{children}</Tag>;
};

export default MotionWrapper;
