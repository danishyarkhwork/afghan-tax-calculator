// pages/index.tsx
import React from "react";
import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

const BlogPage: React.FC = () => {
  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-4 max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Blog Page
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-teal-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm mb-4">{post.excerpt}</p>
              <Link
                href={`/blog-post/${post.slug}`}
                className="text-teal-400 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
