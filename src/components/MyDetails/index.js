import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { memo } from "react";
import myProfile from "../../../public/my-profile.webp";


// third party imports

import MotionWrapper from "../MotionWrapper";

const buttonVariants = {
  hover: {
    scale: 1.06,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const MyDetails = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[90%] md:w-[98%] lg:w-[85%] mx-auto justify-center items-center my-4 ">
      <MotionWrapper
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="sm:w-1/2 "
      >
        <Image
          src={myProfile}
          alt="Profile picture of Avinash Potnuru"
          width={400}
          height={400}
          priority
          className=" h-full sm:h-auto sm:my-auto mx-auto object-fill"
        />
      </MotionWrapper>
      <MotionWrapper
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="p-5 mx-auto sm:w-1/2"
      >
        <h1 className="my-1 text-2xl font-semibold uppercase">About Me</h1>
        <h1 className="text-3xl font-roboto-slab text-[#0863bf]  font-bold my-1 lg:text-[30px] lg:my-2">
          <span className="text-xl text-[black] font-semibold my-1 ">
            {"I'm "}
          </span>
          Avinash Potnuru
        </h1>
        <h1 className="my-2 text-xl font-medium lg:my-2">FrontEnd Developer</h1>
        <h1 className="my-1 text-base">
          Hello! I&#39;m Avinash Potnuru, a Frontend Developer with 5 years of
          experience crafting responsive, accessible, and user-friendly web
          interfaces. I specialize in building modern UI experiences using
          React.js, Next.js, TypeScript, and JavaScript. My expertise includes
          working with HTML5, CSS3, Tailwind CSS, Material UI, and Bootstrap to
          create pixel-perfect and mobile-first designs. I focus on performance,
          usability, and clean code to deliver seamless web applications that
          users love to interact with.
        </h1>
        <div className="  flex flex-col lg:flex-row justify-center lg:justify-around items-center my-3 w-[80%] lg:w-full  mx-auto ">
          <Link href={"/contact-us"}>
            <MotionWrapper
              as="button"
              variants={buttonVariants}
              whileHover="hover"
              className="button-background-move"
            >
              Contact Us
            </MotionWrapper>
          </Link>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default memo(MyDetails);
