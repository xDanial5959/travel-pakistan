"use client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "10 Best Places to Visit in Pakistan",
    date: "Sep 8, 2025",
    category: "Travel",
    excerpt:
      "Discover the most breathtaking destinations across Pakistan, from mountain valleys to bustling cities.",
    image: "/images/badsahi2.jpg",
  },
  {
    id: 2,
    title: "How to Prepare for Your First Hike",
    date: "Sep 3, 2025",
    category: "Adventure",
    excerpt:
      "New to hiking? Here are some essential tips to make your first trek safe, fun, and memorable.",
    image: "/images/mountains.jpg",
  },
  {
    id: 3,
    title: "Top 5 Beach Destinations for 2025",
    date: "Aug 28, 2025",
    category: "Lifestyle",
    excerpt:
      "Looking for a relaxing escape? These beach destinations should be at the top of your travel list this year.",
    image: "/images/beach2.jpg",
  },
];

export default function RecentArticles() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50 overflow-hidden">
      {/* Decorative gradient blur blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sky-500 font-semibold uppercase tracking-wider">
            Recent Articles & Posts
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Latest Travel Inspiration
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Stories, tips, and guides to inspire your next adventure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition transform"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="ml-3">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-sky-600 transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-md hover:shadow-lg transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
