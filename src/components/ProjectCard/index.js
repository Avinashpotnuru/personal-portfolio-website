import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = React.memo(({ data }) => {
  if (!data) return null;

  const {
    id,
    imgUrl = "/images/project-placeholder.png",
    title = "Untitled Project",
    description = "No description available.",
    Link: readMoreLink,
    deploylink: deployLink = "#",
  } = data;

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 100,
      x: id % 2 === 1 ? -100 : 100,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  const transitionProps = {
    duration: 0.8,
    delay: id * 0.1,
    ease: "easeOut",
  };

  return (
    <motion.div
      initial={animationVariants.initial}
      whileInView={animationVariants.whileInView}
      transition={transitionProps}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      layout
      className="relative flex flex-col my-6 transition-shadow duration-300 bg-[#0c7fb0] border rounded-lg shadow-sm cursor-pointer group border-slate-200 hover:shadow-lg"
    >
      <div className="relative m-2.5 overflow-hidden text-white rounded-md aspect-video">
        <Image
          className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:scale-110"
          src={imgUrl}
          alt={title}
          fill
          priority={id < 3}
        />
      </div>

      <div className="px-3 text-black transition-all duration-500 h-1/2 group-hover:text-white font-roboto-slab">
        <h2 className="my-4 text-lg font-extrabold text-center group-hover:text-white">
          {title}
        </h2>
        <p className="text-center group-hover:text-white card__preview-text">
          {description}
        </p>

        <div className="p-5 transition-all duration-500 md:flex md:justify-around md:items-center">
          <div className="text-center">
            <Link href={readMoreLink || "#"}>
              <button
                className="text-white btn from-left"
                aria-label={`Read more about ${title}`}
              >
                Read more
              </button>
            </Link>
          </div>
          <div className="mt-2 text-center sm:mt-0">
            <Link
              href={deployLink}
              aria-label={`View project ${title} deployment`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white btn from-left">View project</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
