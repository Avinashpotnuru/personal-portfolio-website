import Link from "next/link";

// third party imports

import { navLinks, socialLinks } from "@/src/Data";
import { memo } from "react";
import MotionWrapper from "../MotionWrapper";

const iconVariants = {
  hover: {
    scale: 1.3,
    rotateZ: 360,
    borderRadius: "50%",
    borderColor: "#0c7fb0",
    borderWidth: "2.5px",
    padding: "2.2px",
    transition: {
      duration: 0.8,
    },
  },
};

const Footer = () => {
  const navLinksMapped = navLinks?.map((link) => (
    <Link key={link.href} href={link.href}>
      <h1 className="hover:text-[#4e4ee1] hover:font-roboto-slab">
        {link.label}
      </h1>
    </Link>
  ));

  const socialLinksMapped = socialLinks?.map((link) => (
    <MotionWrapper
      as="a"
      key={link.href}
      variants={iconVariants}
      whileHover="hover"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
    </MotionWrapper>
  ));

  return (
    <div className="bg-[#061820] w-full text-white py-5">
      <div className="sm:w-[80%] md:w-[70%] lg:w-[50%] sm:mx-auto">
        <div className="flex items-center justify-around py-5">
          {navLinksMapped}
        </div>
        <div className="flex items-center justify-around py-5">
          {socialLinksMapped}
        </div>
        <h1 className="px-5 py-4 text-center">
          Copyright ©2026{" "}
          <span className="font-roboto-slab text-base hover:text-[#4e4ee1]">
            Avinash Potnuru
          </span>
          , Inc. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default memo(Footer);
