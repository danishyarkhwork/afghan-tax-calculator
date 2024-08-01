"use client";

import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { subtitle: string; paragraph: string }[];
  image: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-4 max-w-6xl">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={192}
          className="w-full h-96 object-cover mb-4 rounded-md"
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

export default BlogPostContent;
