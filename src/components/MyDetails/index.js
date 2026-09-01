import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { memo } from "react";
import myProfile from "../../../public/my-profile.webp";

import Reveal from "../Reveal";

const MyDetails = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-tr from-[#eef6fb] via-white to-[#f6fbfe]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#0863bf]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#0c7fb0]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:items-center md:gap-14 md:px-10 md:py-20">
        <div className="flex w-full justify-center md:w-[45%]">
          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#0c7fb0]/25 via-transparent to-[#0863bf]/25 blur-lg"
            />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border-2 border-dashed border-[#0c7fb0]/30 animate-[spin_45s_linear_infinite]"
              />
              <div className="relative rounded-full bg-white p-2 shadow-2xl shadow-[#0c7fb0]/20 ring-4 ring-white">
                <Image
                  src={myProfile}
                  alt="Profile picture of Avinash Potnuru"
                  width={400}
                  height={400}
                  priority
                  decoding="async"
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="h-auto w-56 rounded-full object-cover sm:w-72 lg:w-80"
                />
              </div>

              <div className="absolute -bottom-3 -right-2 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-md sm:-right-6">
                <span
                  aria-hidden="true"
                  className="relative flex h-3 w-3"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0c7fb0]/50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#0c7fb0]" />
                </span>
                <p className="text-sm font-semibold text-[#0b2230] font-roboto">
                  Open to work
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex w-full flex-col md:w-[55%]">
          <Reveal>
            <span className="section-kicker mb-2">About</span>
          </Reveal>

         

          <Reveal delay={0.1}>
            <h1 className="mt-3 font-roboto-slab text-3xl font-bold leading-tight text-[#0863bf] lg:text-[34px]">
              <span className="text-xl font-semibold text-[#1a2430]">
                {"I'm "}
              </span>
              Avinash Potnuru
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-3 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[3px] w-12 rounded-full bg-[#0c7fb0]"
              />
              <h2 className="text-xl font-bold text-[#0b2230] font-roboto">
                FrontEnd Developer
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Hello! I&#39;m Avinash Potnuru, a Frontend Developer with 5 years
              of experience crafting responsive, accessible, and user-friendly
              web interfaces. I specialize in building modern UI experiences
              using React.js, Next.js, TypeScript, and JavaScript. My expertise
              includes working with HTML5, CSS3, Tailwind CSS, Material UI, and
              Bootstrap to create pixel-perfect and mobile-first designs. I
              focus on performance, usability, and clean code to deliver
              seamless web applications that users love to interact with.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="w-full">
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
              <Link href={"/contact-us"}>
                <button type="button" className="button-background-move">
                  Contact Us
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default memo(MyDetails);