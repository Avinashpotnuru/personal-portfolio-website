"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

const BlogCard = React.memo(({ data, idx = 0 }) => {
  if (!data) return null;

  const { title, description, slug, tags = [], date } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.12 }}
      whileHover={{ y: -6 }}
      className="flex flex-col justify-between bg-white border rounded-lg shadow-sm border-slate-200 hover:shadow-lg transition-shadow duration-300 p-6"
    >
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs font-semibold text-[#0c7fb0] bg-[#e6f4fb] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-2 text-lg font-bold text-[#0863bf] font-roboto-slab">
          {title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          {date && (
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <BiCalendar /> {date}
            </span>
          )}
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0c7fb0] hover:text-[#0863bf] transition-colors"
            aria-label={`Read article: ${title}`}
          >
            Read article <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;