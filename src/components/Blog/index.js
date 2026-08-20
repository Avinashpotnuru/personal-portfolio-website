import BlogCard from "../BlogCard";
import { blogData } from "@/src/Data";

const Blog = () => {
  return (
    <div className="w-[95%] mx-auto md:w-[90%]">
      <h1 className="text-2xl md:text-5xl font-bold text-[#0863bf] text-center mb-5 md:my-10 font-roboto-slab">
        My Blog
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post, idx) => (
          <BlogCard key={post.id} data={post} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Blog;