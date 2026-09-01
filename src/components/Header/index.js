
"use client";

import Link from "next/link";
import React, { useState, useEffect, memo } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  RiInformationLine,
  RiContactsBookLine,
} from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiMedal, CiPen } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    link: "/",
    icon: <FaRegUser />,
  },
  {
    name: "About",
    link: "/about",
    icon: <RiInformationLine />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <HiOutlineBriefcase />,
  },
  {
    name: "Certificates",
    link: "/course-certificates",
    icon: <CiMedal />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <CiPen />,
  },
  {
    name: "Contact",
    link: "/contact-us",
    icon: <RiContactsBookLine />,
  },
];

const Header = () => {
  const path = usePathname();

  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container =
      document.getElementById("scroll-container");

    if (!container) return;

    const handleScroll = () => {
      const maxScroll =
        container.scrollHeight - container.clientHeight;

      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.min(
        container.scrollTop / maxScroll,
        1
      );

      setScrollProgress(progress);
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Maximum top border = 3px
  const borderWidth = Math.min(
    scrollProgress * 3,
    3
  );

  const scrolled = scrollProgress > 0.05;

  const isActive = (link) =>
    path === link;

  return (
    <header
      style={{
        borderTopWidth: `${borderWidth}px`,
      }}
      className={`sticky top-0 left-0 right-0 z-50 border-b border-t backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "border-white/10 bg-[#061820]/90 text-white shadow-lg shadow-[#0b2230]/20"
          : "border-slate-100 bg-white/80 text-[#0b2230] shadow-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Avinash Potnuru — Home"
          className={`font-roboto-slab text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
            scrolled
              ? "text-white"
              : "text-[#061820]"
          }`}
        >
          Avinash
          <span className="text-[#0c7fb0]">
            .
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="items-center hidden gap-1 md:flex">
          {Links.map((link) => {
            const active = isActive(link.link);

            return (
              <Link
                key={link.link}
                href={link.link}
                aria-current={
                  active ? "page" : undefined
                }
                className={`relative rounded-md px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[2px] after:origin-center after:rounded-full after:bg-[#0c7fb0] after:transition-transform after:duration-300 ${
                  active
                    ? "text-[#0c7fb0] after:scale-x-100"
                    : `after:scale-x-0 hover:after:scale-x-100 ${
                        scrolled
                          ? "text-slate-200 hover:text-white"
                          : "text-gray-600 hover:text-[#0c7fb0]"
                      }`
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">

          {/* Desktop CTA */}
          <Link
            href="/contact-us"
            className="group hidden items-center gap-1.5 rounded-full bg-[#0c7fb0] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#0863bf] hover:shadow-lg hover:shadow-[#0c7fb0]/30 md:inline-flex"
          >
            Let&apos;s Talk

            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            className={`rounded-lg p-2 text-2xl transition-colors duration-300 md:hidden ${
              scrolled
                ? "text-white"
                : "text-[#0b2230]"
            }`}
          >
            {!open ? (
              <AiOutlineMenu
                aria-hidden="true"
              />
            ) : (
              <AiOutlineClose
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <ul
        id="primary-nav"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {Links.map((link) => {
          const active = isActive(link.link);

          return (
            <li key={link.link}>
              <Link
                href={link.link}
                onClick={() =>
                  setOpen(false)
                }
                aria-current={
                  active ? "page" : undefined
                }
                className={`flex w-full items-center gap-3 border-b px-5 py-3.5 transition-colors ${
                  scrolled
                    ? "border-white/10 text-slate-200 hover:text-white"
                    : "border-slate-100 text-gray-700 hover:text-[#0863bf]"
                } ${
                  active
                    ? "border-l-2 border-l-[#0c7fb0] bg-[#0c7fb0]/10 pl-[18px] text-[#0c7fb0]"
                    : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`text-[18px] ${
                    active
                      ? "text-[#0c7fb0]"
                      : "text-[#0c7fb0]/70"
                  }`}
                >
                  {link.icon}
                </span>

                <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}

        {/* Mobile CTA */}
        <li className="px-5 py-4">
          <Link
            href="/contact-us"
            onClick={() =>
              setOpen(false)
            }
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#0c7fb0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0863bf]"
          >
            Let&apos;s Talk

            <FiArrowUpRight
              aria-hidden="true"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default memo(Header);

