import React, { memo } from "react";
import { projectsData } from "@/src/Data";
import TextContainer from "../TextAnimationContainer";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import ProjectCard from "../ProjectCard";
import MotionWrapper from "../MotionWrapper";

const MyProjects = () => {
  return (
    <div className="mt-2 overflow-hidden md:my-10">
      <TextContainer
        text="My Projects"
        className="text-2xl text-[#0863bf] font-roboto-slab md:text-5xl font-bold text-center mb-5 md:my-10"
      />

      <MotionWrapper
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="grid grid-cols-1 gap-4 px-4 mx-auto sm:grid-cols-2 sm:gap-5 lg:grid-cols-3  md:px-10 lg:px-[120px]  lg:gap-10"
      >
        {projectsData?.slice(0, 8).map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </MotionWrapper>
      <div className="flex items-center justify-center my-4 group ">
        <Link href={"/projects"} aria-label="View more projects">
          <div className="bg-[#0c7fb0] font-roboto-slab hover:bg-[#0369a1] flex justify-center items-center space-x-2 text-white py-2 px-4 rounded transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-lg shadow-[#0c7fb0]/30">
            <h1 className="">More Projects</h1>
            <AiOutlineArrowRight className="opacity-0 -translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default memo(MyProjects);
