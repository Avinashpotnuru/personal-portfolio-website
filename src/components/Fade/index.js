// third party imports

import dynamic from "next/dynamic";
import React from "react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Fade = ({ children }) => (
  <MotionDiv
    initial={{ opacity: 0, y: "100vh" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </MotionDiv>
);

export default Fade;

