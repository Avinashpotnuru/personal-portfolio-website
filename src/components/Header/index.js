"use client";

import Link from "next/link";
import React, { useState, useEffect, memo } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiInformationLine, RiContactsBookLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiMedal, CiPen } from "react-icons/ci";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TextContainer from "../TextAnimationContainer";
const Links = [
  { name: "HOME", link: "/", icon: <FaRegUser /> },
  { name: "ABOUT", link: "/about", icon: <RiInformationLine /> },
  { name: "CERTIFICATES", link: "/course-certificates", icon: <CiMedal /> },
  { name: "BLOG", link: "/blog", icon: <CiPen /> },
  { name: "CONTACT", link: "/contact-us", icon: <RiContactsBookLine /> },
];

const Header = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > window.innerHeight * 0.3);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#061820] text-white shadow-lg backdrop-blur-md"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between py-4 md:px-10 px-7">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold cursor-pointer">
          <Link href={"/"}>
            <TextContainer
              text="Avinash"
              className={`font-roboto-slab font-extrabold ${
                scrolled ? "text-white" : "text-[#0863bf]"
              }`}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl transition-all duration-500 cursor-pointer md:hidden"
        >
          {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        {/* Menu Links */}
        <ul
          className={`w-full md:w-auto flex flex-col md:flex-row md:items-center bg-white md:bg-transparent overflow-hidden md:overflow-visible transition-all duration-500 ease-in ${
            open ? "max-h-[480px] mt-4" : "max-h-0 mt-0"
          } md:max-h-none md:mt-0`}
        >
          {Links.map((link, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 md:gap-0 md:items-baseline px-7 py-4 md:px-0 md:py-0 hover:bg-slate-50 md:hover:bg-transparent"
            >
              {/* Mobile Icons */}
              <div className="md:hidden text-[21px] text-[#0c7fb0] transition ease-in-out delay-150 hover:scale-105">
                {link.icon}
              </div>

              {/* Animated Link */}
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                onClick={() => setOpen(false)}
                className={`ml-2 md:ml-8 text-lg md:my-0 font-roboto ${
                  path === link.link
                    ? "sm:border-[#0c7fb0] sm:border-b-2 font-bold pb-1"
                    : ""
                }`}
              >
                <Link
                  href={link.link}
                  className={`duration-500 hover:text-gray-400 ${
                    scrolled
                      ? "text-white max-md:text-gray-700"
                      : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
