"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBook, FaDownload } from "react-icons/fa";
import Skeleton from "../../components/common/Skeleton";
import { blogPosts } from "../../data/blogPosts";

const BlogPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading blog posts
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-200 min-h-full text-gray-900">
      <main className="container mx-auto p-4 max-w-6xl py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Tax Guidelines of Afghanistan
        </h2>
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-teal-800 p-6 rounded-lg shadow-lg">
                <Skeleton className="w-full h-48 rounded-md mb-4" />
                <Skeleton className="h-6 mb-2" />
                <Skeleton className="h-4 mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="w-1/3 h-8" />
                  <Skeleton className="w-1/3 h-8" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-3">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-teal-800 p-6 rounded-lg text-slate-100 shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={`/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                </Link>
                <Link href={`/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                </Link>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between">
                  <Link
                    href={`/${post.slug}`}
                    className="text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                  >
                    <FaBook className="mr-2" /> Read More
                  </Link>
                  <a
                    href={post.guideLink}
                    className="text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                    download
                  >
                    <FaDownload className="mr-2" /> Download Guide
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
