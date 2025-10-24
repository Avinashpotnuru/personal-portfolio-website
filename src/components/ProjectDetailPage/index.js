import Link from "next/link";

import React from "react";

// third party imports

import { IoIosArrowBack } from "react-icons/io";

import Image from "next/image";

const ProjectDetailPage = ({ data }) => {
  return (
    <div className="px-5 my-5 sm:my-20 sm:w-[95%] lg:w-[90%] sm:mx-auto ">
      <Link href={"/projects"}>
        <div className="p-3 cursor-pointer ">
          <IoIosArrowBack />
        </div>
      </Link>
      <div className="flex flex-col my-4 sm:flex-row ">
        <div className="my-auto sm:w-1/2 sm:flex sm:justify-center sm:items-center ">
          <Image
            height={500}
            width={500}
            className="w-[95%] h-full  sm:h-auto  sm:my-auto  mx-auto object-fill "
            src={data.imgUrl}
            alt={data?.title}
            priority
          />
        </div>
        <div className="sm:w-1/2 sm:px-10 ">
          <h1 className="my-2 text-3xl font-bold text-cyan-500 sm:my-4 ">
            {data?.title}
          </h1>

          <h1 className="mb-6 text-xl font-bold text-center sm:text-2xl sm:text-left ">
            Technologies
          </h1>
          <div className=" w-[90%] mx-auto overflow-x-auto overflow-desk  ">
            <div className="flex space-x-4  w-[120%] sm:w-full mx-auto  py-2 ">
              {data?.technologies.map((val, idx) => {
                return (
                  <div
                    className="my-auto hover:text-[#06b6d4] text-[60px] hover:scale-110 hover:-translate-y-1 transition duration-150 ease-in-out"
                    key={idx}
                  >
                    {val?.icon}
                  </div>
                );
              })}
            </div>
          </div>

          <h1 className="my-2 text-gray-500">{data?.description}</h1>
          {data?.keypoints?.length && (
            <ul className="p-4 space-y-1 text-gray-500 list-disc">
              {data?.keypoints?.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          )}

          {/* <div className="flex items-center mt-4">
            <BsGithub color="blue" size={12} />
            <a className="ml-2 text-blue-500 hover:text-blue-700 " href="">
              Github Source Code
            </a>
          </div> */}

          <br />
          <a
            className="text-blue-500 hover:text-blue-700 "
            href={data?.projectLink}
            target="_blank"
          >
            Project Link
          </a>
          <hr className="my-4 border-t-2 border-gray-300" />
          <h1>
            <span className="text-lg font-bold ">Creator - </span>Avinash
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
