import React, { memo } from "react";
import { projectsData } from "@/src/Data";
import TextContainer from "../TextAnimationContainer";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

const MyProjects = () => {
  return (
    <div className="mt-2 overflow-hidden md:my-10">
      <div className="flex flex-col items-center justify-center my-6">
        <span className="section-kicker mb-2">Work</span>
        <TextContainer
          text="My Projects"
          className="text-3xl text-[#0863bf] font-roboto-slab md:text-5xl font-bold text-center"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 px-4 mx-auto sm:gap-6 lg:grid-cols-2 md:px-10 lg:px-[120px]">
        {projectsData?.slice(0, 8).map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </div>
      <div className="flex items-center justify-center my-6 group">
        <Link href={"/projects"} aria-label="View more projects">
          <div className="bg-[#0c7fb0] font-roboto-slab hover:bg-[#0369a1] flex justify-center items-center gap-2 text-white py-2.5 px-5 rounded-md transition-all duration-300 ease-in-out group-hover:shadow-md shadow-[#0c7fb0]/30">
            <span>More Projects</span>
            <AiOutlineArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default memo(MyProjects);
