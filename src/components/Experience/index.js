import React, { memo } from "react";

import { experienceData } from "@/src/Data";
// third party imports
import { motion } from "framer-motion";
import ExperienceInfo from "../ExperienceInfo";



const ExperienceComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="text-3xl text-[#0863bf] font-medium font-roboto-slab my-3 md:my-6"
        aria-label="Experience Section"
      >
        Experience
      </motion.h1>
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-2 md:w-[90%] lg:w-[80%]">
        {experienceData.map((val, index) => (
          <ExperienceInfo key={index} val={val} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const Experience = memo(ExperienceComponent);



export default Experience;
