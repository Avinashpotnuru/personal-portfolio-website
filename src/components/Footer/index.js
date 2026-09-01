import Link from "next/link";
import React, { memo } from "react";

// third party imports

import { navLinks, socialLinks } from "@/src/Data";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const navLinksMapped = navLinks?.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className="relative text-sm text-slate-300 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#0c7fb0] after:transition-all after:duration-300 hover:text-white hover:after:w-full"
      >
        {link.label}
      </Link>
    </li>
  ));

  const socialLinksMapped = socialLinks?.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${new URL(link.href).hostname.replace("www.", "")}`}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0c7fb0] hover:bg-[#0c7fb0] hover:text-white"
    >
      {React.cloneElement(link.icon, { size: 20, "aria-hidden": true })}
    </a>
  ));

  return (
    <footer className="relative bg-[#061820] text-white">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#0c7fb0]/70 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-roboto-slab text-2xl font-extrabold tracking-tight"
            >
              Avinash<span className="text-[#0c7fb0]">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Frontend Developer crafting fast, responsive, and user-focused
              web experiences with React, Next.js, and modern tooling.
            </p>
            <div className="mt-6 flex gap-2.5">{socialLinksMapped}</div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3.5">{navLinksMapped}</ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Have a project in mind? Let&apos;s build something great together.
            </p>
            <Link
              href="/contact-us"
              className="group mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#0c7fb0] hover:bg-[#0c7fb0]"
            >
              Let&apos;s Talk
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row md:px-10">
          <p>
            Copyright © 2026{" "}
            <span className="font-roboto-slab font-semibold text-slate-200">
              Avinash Potnuru
            </span>{" "}
            . All rights reserved
          </p>
          <p className="flex items-center gap-2">
            Built with{" "}
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-semibold text-slate-300">
              Next.js
            </span>
            &amp;
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-semibold text-slate-300">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);