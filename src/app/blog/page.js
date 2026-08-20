import Fade from "@/src/components/Fade";
import Blog from "@/src/components/Blog";

export const metadata = {
  title: "Blog",
  description:
    "Technical articles and write-ups by Avinash Potnuru on React.js, Next.js, state management, performance optimization, and modern frontend development.",
};

const BlogPage = () => {
  return (
    <Fade>
      <div className="min-h-[60vh]">
        <Blog />
      </div>
    </Fade>
  );
};

export default BlogPage;