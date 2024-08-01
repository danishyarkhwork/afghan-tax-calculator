import { blogPosts } from "../data/blogPosts";
import BlogPostContent from "./BlogPostContent";

export async function generateStaticParams() {
  const paths = blogPosts.map((post) => ({
    slug: post.slug,
  }));

  return paths;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { subtitle: string; paragraph: string }[];
  image: string;
}

interface BlogPostPageProps {
  params: { slug: string };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const { slug } = params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPostContent post={post} />;
};

export default BlogPostPage;
