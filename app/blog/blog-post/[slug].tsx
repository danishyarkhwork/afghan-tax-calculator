// src/app/blog/blog-post/[slug].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blogPosts";

// Define the BlogPost type, assuming content is an array of objects
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { subtitle: string; paragraph: string }[]; // Content is an array of objects
  image: string;
}

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      // Ensure slug is a string
      const foundPost = blogPosts.find((post) => post.slug === slug) || null;
      setPost(foundPost);
    }
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-4 max-w-6xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-60 object-cover mb-4 rounded-md"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="prose lg:prose-xl">
          {post.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{section.subtitle}</h2>
              <p>{section.paragraph}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
