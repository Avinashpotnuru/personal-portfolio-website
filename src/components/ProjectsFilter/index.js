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
    [tabsId]
  );

  const Tab = ({ val, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={` text-black  py-2 px-4 rounded font-Lexend

      ${
        isActive
          ? "border-[#0c7fb0] border-b-2  pb-2 font-extrabold"
          : "font-medium"
      }
      `}
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

        <div className="flex justify-center md:space-x-10 space-y-2 items-center my-9 md:w-[79%]  mx-auto  ">
          {tabs.map((val, idx) => (
            <Tab
              key={idx}
              val={val}
              isActive={tabsId === val.category}
              onClick={() => setTabsId(val?.category)}
            />
          ))}
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
