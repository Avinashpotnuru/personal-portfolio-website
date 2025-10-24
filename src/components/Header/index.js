import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiInformationLine, RiContactsBookLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiMedal } from "react-icons/ci";

import { usePathname } from "next/navigation";
import TextContainer from "../TextAnimationContainer";

const Header = () => {
  const path = usePathname();

  let Links = [
    { name: "HOME", link: "/", icon: <FaRegUser /> },
    { name: "ABOUT", link: "/about", icon: <RiInformationLine /> },
    {
      name: "CERTIFICATES",
      link: "/course-certificates",
      icon: <CiMedal />,
    },
    { name: "CONTACT", link: "/contact-us", icon: <RiContactsBookLine /> },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="relative w-full shadow-md ">
      <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 bg-white md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800"
        >
          <Link href={"/"}>
            <TextContainer
              text="Avinash"
              className="font-roboto-slab font-extrabold text-[#0863bf]"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="transition-all duration-500 md:hidden "
        >
          {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <ul
          className={` md:flex md:items-center bg-white md:pb-0  absolute md:static pl-9  md:z-auto z-20 left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <li key={idx} className="flex items-baseline ">
              <div className="md:hidden text-[21px] text-[#0c7fb0] transition ease-in-out delay-150 hover:mb-2 hover:scale-105">
                {link?.icon}
              </div>
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  duration: 1.2,
                  type: "spring",
                  shiftiness: 140,
                }}
                onClick={() => setOpen(false)}
                key={link.name}
                className={` ml-2 md:ml-8 text-lg md:my-0 my-4 font-roboto ${
                  path == link.link
                    ? " sm:border-[#0c7fb0] sm:border-b-2 font-bold pb-1"
                    : ""
                }`}
              >
                <Link
                  href={link.link}
                  className="text-gray-800 duration-500 hover:text-gray-400"
                >
                  {link.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
