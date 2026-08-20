"use client";

import { motion } from "framer-motion";

const Fade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: "100vh" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default Fade;

