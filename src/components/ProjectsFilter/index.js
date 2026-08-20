"use client";

import ProjectCard from "../ProjectCard";
import { tabs, projectsData } from "@/src/Data";
import { motion } from "framer-motion";
import { memo, useMemo, useState } from "react";

const ProjectsFilter = () => {
  const [tabsId, setTabsId] = useState("");

  const filterData = useMemo(
    () =>
      !tabsId
        ? projectsData
        : projectsData.filter((item) => item.category === tabsId),
    [tabsId],
  );

  const Tab = ({ val, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex-shrink-0 whitespace-nowrap text-black py-2 px-4 rounded font-Lexend ${
        isActive ? "border-[#0c7fb0] border-b-2 font-extrabold" : "font-medium"
      }`}
    >
      {val.tab}
    </button>
  );

  return (
    <div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-around sm:items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1 }}
          className="text-3xl text-[#0863bf] font-roboto-slab font-bold   sm:my-4 text-center my-2 sm:w-1/2"
        >
          My Projects
        </motion.h1>

      
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 px-4 py-2 min-w-max">
            {tabs.map((val, idx) => (
              <div key={idx} className="flex-shrink-0">
                <Tab
                  val={val}
                  isActive={tabsId === val.category}
                  onClick={() => setTabsId(val.category)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {filterData.length ? (
        <div className="grid grid-cols-1 gap-4 px-4 mx-auto sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 md:px-10 lg:px-20 lg:gap-10">
          {filterData.map((item, idx) => (
            <MemoizedProjectCard data={item} key={idx} />
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex justify-center items-center">
          <h1 className="m-auto font-semibold text-center text-red-600">
            No projects found
          </h1>
        </div>
      )}
    </div>
  );
};

const MemoizedProjectCard = memo(ProjectCard);

export default ProjectsFilter;
