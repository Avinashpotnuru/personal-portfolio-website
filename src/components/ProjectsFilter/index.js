"use client";

import ProjectCard from "../ProjectCard";
import { tabs, projectsData } from "@/src/Data";
import Reveal from "../Reveal";
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
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex-shrink-0 whitespace-nowrap py-2.5 px-5 rounded-full font-Lexend text-sm transition-colors duration-200 ${
        isActive
          ? "bg-[#0c7fb0] text-white font-semibold shadow-sm"
          : "text-gray-600 hover:text-[#0863bf] hover:bg-[#e6f4fb] font-medium"
      }`}
    >
      {val.tab}
    </button>
  );

  return (
    <div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:items-center px-4 md:px-10 lg:px-20 pt-8">
        <Reveal
          as="h1"
          className="text-3xl md:text-4xl text-[#0863bf] font-roboto-slab font-bold sm:my-4 text-center my-2 sm:w-auto"
        >
          My Projects
        </Reveal>

        <div className="w-full overflow-x-auto hide-scrollbar sm:w-auto">
          <div className="flex gap-3 px-2 py-2 min-w-max">
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
        <div className="grid grid-cols-1 gap-5 px-4 mx-auto sm:gap-6 lg:grid-cols-2 md:px-10 lg:px-20 py-8">
          {filterData.map((item, idx) => (
            <MemoizedProjectCard data={item} key={idx} />
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex justify-center items-center">
          <h2 className="m-auto font-semibold text-center text-red-600">
            No projects found
          </h2>
        </div>
      )}
    </div>
  );
};

const MemoizedProjectCard = memo(ProjectCard);

export default ProjectsFilter;
