import Link from "next/link";
import { BiCalendar, BiTimeFive } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import Reveal from "../Reveal";

const BlogArticle = ({ post }) => {
  if (!post) return null;

  const { title, description, date, readTime, tags = [], sections = [] } = post;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-8 md:px-10 lg:max-w-5xl">
      <Reveal>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#0863bf]"
          aria-label="Back to all articles"
        >
          <IoIosArrowBack
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Articles
        </Link>
      </Reveal>

      <article className="mt-8">
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-[#e6f4fb] px-3 py-1 text-xs font-semibold text-[#0c7fb0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.05}
          className="mt-5 font-roboto-slab text-3xl font-bold leading-tight tracking-tight text-[#0b2230] sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            {date && (
              <span className="inline-flex items-center gap-1.5">
                <BiCalendar aria-hidden="true" className="text-[#0c7fb0]" />
                {date}
              </span>
            )}
            {readTime && (
              <span className="inline-flex items-center gap-1.5">
                <BiTimeFive aria-hidden="true" className="text-[#0c7fb0]" />
                {readTime}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <hr className="mt-6 border-slate-100" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            {description}
          </p>
        </Reveal>

        {sections.map((section, idx) => (
          <section key={idx} className="mt-12">
            <Reveal>
              <h2 className="flex items-baseline gap-3 font-roboto-slab text-2xl font-bold tracking-tight text-[#0b2230]">
                <span
                  aria-hidden="true"
                  className="font-roboto-slab text-sm font-bold tabular-nums text-[#0c7fb0]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
            </Reveal>
            {section.paragraphs?.map((paragraph, i) => (
              <Reveal
                as="p"
                key={i}
                delay={Math.min(i, 4) * 0.04}
                className="mt-4 text-base leading-8 text-gray-700"
              >
                {paragraph}
              </Reveal>
            ))}
            {section.code && (
              <Reveal>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b2230] shadow-lg">
                  <div
                    className="flex items-center justify-between border-b border-white/10 px-4 py-2.5"
                    aria-hidden="true"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Code
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-100">
                    <code>{section.code}</code>
                  </pre>
                </div>
              </Reveal>
            )}
          </section>
        ))}
      </article>
    </div>
  );
};

export default BlogArticle;