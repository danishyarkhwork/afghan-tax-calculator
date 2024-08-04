"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaBook, FaDownload } from "react-icons/fa";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { subtitle: string; paragraph: string }[];
  image: string;
  author: string;
  date: string;
  keywords: string[];
  guideLink?: string; // Optional guide link
}

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      image: post.image,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.date,
      description: post.excerpt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta
          property="og:url"
          content={`https://afghantaxcalculator.com/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta
          name="twitter:url"
          content={`https://afghantaxcalculator.com/${post.slug}`}
        />
      </Head>
      <div className="bg-teal-700 min-h-screen text-white">
        <main className="container mx-auto p-4 max-w-6xl">
          <article>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={628}
              className="w-full h-96 object-cover mb-8 rounded-md shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
              {post.title}
            </h1>
            <p className="text-lg text-center mb-4">{post.excerpt}</p>
            <div className="prose lg:prose-xl prose-invert mx-auto">
              {post.content.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {section.subtitle}
                  </h2>
                  <p className="text-lg">{section.paragraph}</p>
                </section>
              ))}
            </div>
            <footer className="text-center mt-12">
              <p className="text-sm mb-6">
                Written by <span className="font-semibold">{post.author}</span>{" "}
                on{" "}
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </p>
              <div className="flex justify-center gap-4 mb-5">
                <a
                  href={post.guideLink}
                  className="bg-teal-500 text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                  download
                >
                  <FaDownload className="mr-2" /> Download Guidelines
                </a>
                <a
                  href="https://afghantaxcalculator.com/"
                  className="bg-teal-500 text-white py-2 px-4 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                >
                  <FaBook className="mr-2" /> Calculate Tax
                </a>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogPostContent;
