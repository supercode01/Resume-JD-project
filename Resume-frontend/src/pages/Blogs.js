// src/pages/Blogs.js
import { Link } from "react-router-dom";
import blogPosts from "../blogs/blogData";

export default function Blogs() {
  return (
    <div className="mt-20 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center">Blog Articles</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Practical guides and tutorials — updated regularly.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <Link to={`/blogs/${post.slug}`} className="block">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-fit"
                loading="lazy"
              />
            </Link>

            <div className="p-5">
              <h2 className="mt-2 text-xl font-semibold">
                <Link to={`/blogs/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-1 text-gray-600 dark:text-gray-300">{post.desc}</p>

              <div className="mt-4">
                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
