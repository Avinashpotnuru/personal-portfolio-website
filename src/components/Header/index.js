

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiInformationLine, RiContactsBookLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TextContainer from "../TextAnimationContainer";

const Header = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "HOME", link: "/", icon: <FaRegUser /> },
    { name: "ABOUT", link: "/about", icon: <RiInformationLine /> },
    { name: "CERTIFICATES", link: "/course-certificates", icon: <CiMedal /> },
    { name: "CONTACT", link: "/contact-us", icon: <RiContactsBookLine /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-red-500 text-white shadow-lg backdrop-blur-md"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center absolute md:static left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-16 bg-white md:bg-transparent" : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <li key={idx} className="flex items-baseline">
              {/* Mobile Icons */}
              <div className="md:hidden text-[21px] text-[#0c7fb0] transition ease-in-out delay-150 hover:mb-2 hover:scale-105">
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
                className={`ml-2 md:ml-8 text-lg md:my-0 my-4 font-roboto ${
                  path === link.link
                    ? "sm:border-[#0c7fb0] sm:border-b-2 font-bold pb-1"
                    : ""
                }`}
              >
                <Link
                  href={link.link}
                  className={`duration-500 hover:text-gray-400 ${
                    scrolled ? "text-white" : "text-gray-800"
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

export default Header;
