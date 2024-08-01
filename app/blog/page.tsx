import Link from "next/link";
import { blogPosts } from "../data/blogPosts";
import { FaBook, FaDownload } from "react-icons/fa";

const BlogPage: React.FC = () => {
  return (
    <div className="bg-teal-700 min-h-screen text-white">
      <main className="container mx-auto p-4 max-w-6xl py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Tax Guidelines of Afghanistan
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-3">
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
              <div className="flex justify-between">
                <Link
                  href={`/blog/blog-post/${post.slug}`}
                  className="bg-teal-500 text-white py-1 px-3 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                >
                  <FaBook className="mr-2" /> Read More
                </Link>
                <a
                  href={post.guideLink}
                  className="bg-teal-500 text-white py-1 px-3 rounded flex items-center text-sm hover:bg-teal-400 transition-colors"
                  download
                >
                  <FaDownload className="mr-2" /> Download Guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
