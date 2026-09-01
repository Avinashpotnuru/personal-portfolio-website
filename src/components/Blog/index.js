import BlogCard from "../BlogCard";
import { blogData } from "@/src/Data";

const Blog = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-10">
      <div className="mb-10 md:mb-12">
        <span className="section-kicker">Articles</span>
        <h1 className="mt-3 font-roboto-slab text-3xl font-bold tracking-tight text-[#0b2230] sm:text-4xl lg:text-5xl">
          My Blog<span className="text-[#0c7fb0]">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post, idx) => (
          <BlogCard key={post.id} data={post} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Blog;