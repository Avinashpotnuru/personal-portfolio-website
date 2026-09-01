import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { IoIosArrowBack } from "react-icons/io";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const CATEGORY_LABELS = {
  react: "React / Next.js",
  reactNative: "React Native",
  "react-native": "React Native",
  javascript: "JavaScript",
  android: "Android / iOS",
  fullstack: "Full Stack",
};

const ProjectDetailPage = React.memo(({ data }) => {
  if (!data) return null;

  const {
    imgUrl,
    title,
    technologies = [],
    description,
    keypoints = [],
    projectLink,
    githubLink,
    category,
  } = data;

  const categoryLabel = CATEGORY_LABELS[category];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-10">
      <div className="mt-6 flex items-center justify-between">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#0863bf]"
          aria-label="Back to all projects"
        >
          <IoIosArrowBack
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>
        <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 sm:block">
          Case Study
        </span>
      </div>

      <Reveal delay={0.05} className="mt-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#061820]">
          <div className="relative aspect-[16/9] min-h-[280px] sm:aspect-[21/10] lg:aspect-[2.5/1]">
            <Image
              src={imgUrl}
              alt={title || "Project Image"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#061820]/95 via-[#061820]/40 to-[#061820]/20"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <Reveal delay={0.15} className="flex flex-wrap items-center gap-3">
                {categoryLabel && (
                  <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {categoryLabel}
                  </span>
                )}
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Featured Project
                </span>
              </Reveal>
              <Reveal
                delay={0.2}
                as="h1"
                className="mt-4 max-w-3xl font-roboto-slab text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {title}
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
        <article className="min-w-0">
          <Reveal>
            <span className="section-kicker mb-2">Overview</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-roboto-slab text-2xl font-bold tracking-tight text-[#0b2230] sm:text-3xl">
              About this project
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 whitespace-pre-line leading-relaxed text-gray-600">
              {description}
            </p>
          </Reveal>

          {keypoints.length > 0 && (
            <>
              <Reveal delay={0.05} className="mt-12">
                <span className="section-kicker mb-2">Highlights</span>
              </Reveal>
              <Reveal delay={0.1} as="h2" className="mt-3 font-roboto-slab text-2xl font-bold tracking-tight text-[#0b2230] sm:text-3xl">
                Key features
              </Reveal>

              <ol className="mt-6 border-t border-slate-100">
                {keypoints.map((point, idx) => (
                  <Reveal
                    as="li"
                    key={point.id || idx}
                    delay={Math.min(idx, 5) * 0.04}
                    className="group flex gap-5 border-b border-slate-100 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="font-roboto-slab text-sm font-bold tabular-nums text-[#0c7fb0]/35 transition-colors duration-300 group-hover:text-[#0c7fb0]"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-relaxed text-gray-700">{point}</p>
                  </Reveal>
                ))}
              </ol>
            </>
          )}
        </article>

        <aside className="w-full self-start lg:sticky lg:top-24">
          <Reveal
            delay={0.1}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Technology Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {technologies.map((tech, idx) => (
                <span
                  key={tech.id || idx}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef6fb] text-3xl text-[#0b2230] transition-all duration-200 hover:-translate-y-1 hover:bg-[#0c7fb0] hover:text-white hover:shadow-md"
                >
                  {tech.icon}
                </span>
              ))}
            </div>

            <hr className="my-6 border-slate-100" />

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Project
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6fb] text-[#0c7fb0]">
                <FaUserAlt size={14} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#0b2230]">Avinash</p>
                <p className="text-xs text-gray-500">Creator &amp; Developer</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {projectLink && (
                <a
                  className="button-background-move w-full text-center"
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <FiExternalLink aria-hidden="true" className="ml-1 inline" />
                </a>
              )}
              {githubLink && (
                <a
                  className="button-background-move w-full text-center"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <FiArrowUpRight aria-hidden="true" className="ml-1 inline" />
                </a>
              )}
              <Link
                href="/projects"
                className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#0c7fb0] transition-colors hover:text-[#0863bf]"
              >
                <IoIosArrowBack aria-hidden="true" />
                All Projects
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
});

ProjectDetailPage.displayName = "ProjectDetailPage";

export default ProjectDetailPage;