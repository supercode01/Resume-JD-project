// src/pages/BlogDetails.js
import { useParams, Link } from "react-router-dom";
import blogPosts from "../blogs/blogData";

export default function BlogDetails() {
  // ✅ Route param se slug ya id pick kar lo (dono support ke liye):
  const params = useParams();
  const key = params.slug ?? params.id; // route name chahe :slug ho ya :id, dono chalenge

  // slug ya id dono me se jis se match ho jaye:
  const blog =
    blogPosts.find((p) => p.slug === key) ||
    blogPosts.find((p) => String(p.id) === String(key));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600">Blog not found.</p>
          <Link to="/blogs" className="text-blue-600 underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <article className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{blog.title}</h1>
        </header>

        {/* Cover Image */}
        <div className="mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-auto max-h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        {/* whitespace-pre-line => multiline string me line breaks ko respect karta hai */}
        <div className="prose prose-blue dark:prose-invert max-w-none whitespace-pre-line">
          {blog.content}
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link to="/blogs" className="text-blue-600 hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
