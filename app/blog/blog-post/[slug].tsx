import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blogPosts";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find((post) => post.slug === slug);
      setPost(foundPost || null);
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
          <p>{post.content}</p>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
