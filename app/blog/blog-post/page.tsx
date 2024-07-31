// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { blogPosts } from "../../data/blogPosts";

const BlogPostPage: React.FC<{ post: (typeof blogPosts)[0] }> = ({ post }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Create paths for each blog post
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want to handle new paths dynamically
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const post = blogPosts.find((post) => post.slug === slug);

  return {
    props: {
      post: post || null, // Ensure post is available
    },
  };
};

export default BlogPostPage;
