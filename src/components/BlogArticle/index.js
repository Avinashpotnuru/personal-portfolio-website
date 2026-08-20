import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const BlogArticle = ({ post }) => {
  if (!post) return null;

  const { title, description, date, readTime, tags = [], sections = [] } = post;

  return (
    <div className="w-[95%] sm:w-[85%] lg:w-[80%] mx-auto py-6">
      <Link href="/blog" className="inline-block">
        <div className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-100">
          <IoIosArrowBack />
        </div>
      </Link>

      <article className="mt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs font-semibold text-[#0c7fb0] bg-[#e6f4fb] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#0863bf] font-roboto-slab">
          {title}
        </h1>

        <div className="flex items-center gap-4 my-4 text-sm text-gray-500">
          {date && (
            <span className="flex items-center gap-1">
              <BiCalendar /> {date}
            </span>
          )}
          {readTime && <span>{readTime}</span>}
        </div>

        <p className="mb-8 text-lg text-gray-600">{description}</p>

        {sections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-800 font-roboto-slab">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-7 text-gray-700">
                {paragraph}
              </p>
            ))}
            {section.code && (
              <pre className="p-4 my-4 overflow-x-auto text-sm text-white bg-[#061820] rounded-lg">
                <code>{section.code}</code>
              </pre>
            )}
          </section>
        ))}
      </article>
    </div>
  );
};

export default BlogArticle;