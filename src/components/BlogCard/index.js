import React from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

const BlogCard = React.memo(({ data, idx = 0 }) => {
  if (!data) return null;

  const { title, description, slug, tags = [], date, readTime } = data;

  return (
    <Reveal
      as="article"
      delay={(idx % 3) * 0.1}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0c7fb0]/30 hover:shadow-xl hover:shadow-[#0c7fb0]/10"
    >
      <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
        <span className="font-roboto-slab text-base font-bold leading-none tracking-tight text-[#0c7fb0] tabular-nums">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="h-px w-4 bg-slate-200" />
        {readTime && <span>{readTime}</span>}
        {tags.length > 0 && (
          <span className="ml-auto flex flex-wrap justify-end gap-1.5 normal-case tracking-normal">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-[#e6f4fb] px-2 py-0.5 text-[11px] font-semibold text-[#0c7fb0]"
              >
                {tag}
              </span>
            ))}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-3 font-roboto-slab text-xl font-bold leading-snug text-[#0b2230] transition-colors duration-300 group-hover:text-[#0863bf]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        {date && (
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <BiCalendar aria-hidden="true" /> {date}
          </span>
        )}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0c7fb0] transition-colors hover:text-[#0863bf]"
          aria-label={`Read article: ${title}`}
        >
          Read article
          <AiOutlineArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Reveal>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;