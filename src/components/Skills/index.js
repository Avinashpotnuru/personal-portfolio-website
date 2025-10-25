import React, { memo } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "@/src/Data";

const SkillsComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-5 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="text-3xl font-medium my-3 md:my-6 font-roboto-slab text-[#0863bf]"
      >
        Technical Skills
      </motion.h1>
      <div className="flex flex-col border-2 border-gray-500 rounded-md lg:py-10  w-[95%] mx-auto sm:w-[90%] ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="text-2xl font-medium my-3 md:my-6 text-[#0863bf] font-roboto-slab text-center"
        >
          Skills
        </motion.h1>
        <div className="grid w-full grid-cols-3 sm:grid-cols-5 lg:grid-cols-8">
          {Array.isArray(skillsData) && skillsData.length > 0
            ? skillsData.map((item, idx) => (
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                    translateX: idx % 2 == 1 ? "-100vh" : "100vh",
                  }}
                  animate={{ scale: 1, opacity: 1, translateX: 0 }}
                  transition={{ delay: idx * 0.2, duration: idx * 0.3 }}
                  key={idx}
                  className="flex flex-col items-center justify-center p-9"
                >
                  <Image
                    width={40}
                    height={40}
                    src={`/skills/skills${idx + 1}.png`}
                    alt={`skills${idx + 1}`}
                    priority
                  />
                  <h1 className="my-2 font-semibold text-center">{item}</h1>
                </motion.div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

const Skills = memo(SkillsComponent);



export default Skills;
