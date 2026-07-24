import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ProjectDetailPage = React.memo(({ data }) => {
  if (!data) return null;

  const {
    imgUrl,
    title,
    technologies = [],
    description,
    keypoints = [],
    projectLink,
  } = data;

  return (
    <div className="px-5 my-5 lg:px-20 sm:my-20 sm:mx-auto">
      <Link href="/projects" className="inline-block">
        <div className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-100">
          <IoIosArrowBack />
        </div>
      </Link>

      <div className="flex flex-col gap-5 py-5 my-4 lg:flex-row">
        <div className="my-auto sm:flex sm:justify-center sm:items-center">
          <Image
            height={500}
            width={500}
            className="w-[95%] h-full sm:h-auto sm:my-auto mx-auto object-fill"
            src={imgUrl}
            alt={title || "Project Image"}
            priority
            placeholder="blur"
            blurDataURL="/images/project-placeholder.png"
          />
        </div>

        <div className="sm:px-10">
          <h1 className="my-2 text-3xl font-bold text-center lg:text-left text-cyan-500 sm:my-4">
            {title}
          </h1>

          <h2 className="mb-6 text-2xl font-bold text-center sm:text-xl lg:text-left">
            Technologies
          </h2>

          <div className="w-[90%] mx-auto overflow-x-auto overflow-desk">
            <div className="flex space-x-4 w-[120%] sm:w-full mx-auto py-2">
              {technologies.map((tech, idx) => (
                <div
                  className="my-auto hover:text-[#06b6d4] text-[60px] hover:scale-110 hover:-translate-y-1 transition duration-150 ease-in-out"
                  key={tech.id || idx}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <p className="my-2 text-gray-500">{description}</p>

          {keypoints.length > 0 && (
            <ul className="p-4 space-y-1 text-gray-500 list-disc">
              {keypoints.map((point, idx) => (
                <li key={point.id || idx}>{point}</li>
              ))}
            </ul>
          )}

          <br />
          <a
            className="inline-block text-blue-500 transition-colors hover:text-blue-700"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>

          <hr className="my-4 border-t-2 border-gray-300" />

          <h1>
            <span className="text-lg font-bold">Creator - </span>Avinash
          </h1>
        </div>
      </div>
    </div>
  );
});

ProjectDetailPage.displayName = "ProjectDetailPage";

export default ProjectDetailPage;
