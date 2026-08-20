import { notFound } from "next/navigation";
import { blogData } from "@/src/Data";
import Fade from "@/src/components/Fade";
import BlogArticle from "@/src/components/BlogArticle";

const slugToPost = Object.fromEntries(
  blogData.map((post) => [post.slug, post])
);

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = slugToPost[slug];

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

const BlogArticlePage = ({ params }) => {
  const { slug } = params;
  const post = slugToPost[slug];

  if (!post) {
    notFound();
  }

  return (
    <Fade>
      <div className="min-h-[60vh]">
        <BlogArticle post={post} />
      </div>
    </Fade>
  );
};

export default BlogArticlePage;