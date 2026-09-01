import { memo } from "react";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TextContainer from "../TextAnimationContainer";
import Reveal from "../Reveal";
import myProfile from "../../../public/my-profile.webp";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#eef6fb] via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0c7fb0]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-[#0863bf]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-[#0c7fb0]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(12,127,176,0.13) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:items-center md:gap-10 md:px-10 md:py-24">
        <div className="flex w-full flex-col items-center text-center md:w-[52%] md:items-start md:text-left">
          <Reveal>
            <span className="section-kicker mb-4">Hello, I&apos;m</span>
          </Reveal>

          <Reveal delay={0.05} className="w-full">
            <TextContainer
              className="text-4xl font-bold leading-tight text-[#061820] font-roboto-slab sm:text-5xl lg:text-6xl"
              text="Avinash Potnuru"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-3 flex items-center gap-3 sm:mt-4">
              <span
                aria-hidden="true"
                className="h-[3px] w-12 rounded-full bg-[#0c7fb0]"
              />
              <h1 className="text-xl font-bold text-[#0c7fb0] font-roboto sm:text-2xl">
                FrontEnd Developer
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Hi, I&apos;m Avinash Potnuru, a Frontend Developer with 5+ years
              of experience building fast, responsive, and user-focused web
              applications. I specialize in React.js, Next.js, TypeScript,
              Tailwind CSS, and Material UI, and I create clean, accessible UIs
              with a focus on performance and usability.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start sm:gap-5">
              <Link
                className="button-background-move w-full sm:w-auto text-center my-1"
                href={"/contact-us"}
                passHref
              >
                <button>Contact Us</button>
              </Link>
              <a
                className="button-background-move w-full sm:w-auto text-center my-1"
                href="/AvinashPotnurufrontenddeveloper.docx"
                download
                rel="noopener noreferrer"
              >
                <button>Download Resume</button>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex w-full justify-center md:w-[48%]">
          <Reveal delay={0.15} className="relative">
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

              <div className="absolute -bottom-3 left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:-left-8 sm:bottom-2">
                <span
                  aria-hidden="true"
                  className="relative flex h-3 w-3"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0c7fb0]/50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#0c7fb0]" />
                </span>
                <div>
                  <p className="text-lg font-bold leading-tight text-[#0863bf]">
                    5+ Years
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    Frontend Experience
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 right-0 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-md sm:-right-8">
                <p className="text-sm font-semibold text-[#0b2230] font-roboto">
                  React.js
                </p>
                <span
                  aria-hidden="true"
                  className="text-sm font-bold text-[#0c7fb0]"
                >
                  &amp; Next.js
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default memo(About);