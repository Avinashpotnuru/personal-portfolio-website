import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const CATEGORY_LABELS = {
  react: "React / Next.js",
  javascript: "JavaScript",
  android: "Android / iOS",
  fullstack: "Full Stack",
};

const ProjectCard = React.memo(({ data }) => {
  if (!data) return null;

  const {
    id,
    imgUrl = "/images/project-placeholder.png",
    title = "Untitled Project",
    description = "No description available.",
    Link: readMoreLink,
    deploylink,
    category,
  } = data;

  const categoryLabel = CATEGORY_LABELS[category];

  return (
    <Reveal
      delay={(id % 3) * 0.08}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0c7fb0]/30 hover:shadow-xl hover:shadow-[#0c7fb0]/10 sm:flex-row"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#eef6fb] sm:w-[45%] sm:shrink-0 sm:self-stretch sm:aspect-auto">
        <Image
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 45vw"
          priority={id < 3}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#061820]/25 transition-colors duration-500 group-hover:bg-[#061820]/40"
        />
        <span
          className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0863bf] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 scale-75"
        >
          <FiArrowRight size={20} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
          <span className="font-roboto-slab text-base font-bold leading-none tracking-tight text-[#0c7fb0] tabular-nums">
            {String(id).padStart(2, "0")}
          </span>
          <span
            aria-hidden="true"
            className="h-px w-4 bg-slate-200"
          />
          {categoryLabel && <span>{categoryLabel}</span>}
        </div>

        <h2 className="mt-3 font-roboto-slab text-xl font-bold leading-snug text-[#0b2230] transition-colors duration-300 group-hover:text-[#0863bf]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            href={readMoreLink || "#"}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0c7fb0] transition-colors hover:text-[#0863bf]"
            aria-label={`Read more about ${title}`}
          >
            Case Study
            <FiArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {deploylink && (
            <Link
              href={deploylink}
              aria-label={`View live demo of ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#0c7fb0] transition-all duration-300 hover:border-[#0c7fb0] hover:bg-[#0c7fb0] hover:text-white"
            >
              <FiExternalLink size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;