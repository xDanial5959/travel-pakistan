"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ Correct for TS
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    title: "A Journey Through Hunza Valley",
    date: "April 15, 2024",
    image: "/images/mountains.jpg",
    excerpt:
      "Hunza Valley is one of Pakistan’s crown jewels, known for its breathtaking mountains, serene lakes, and legendary hospitality...",
  },
  {
    id: 2,
    title: "Exploring the Historic Streets of Lahore",
    date: "May 2, 2024",
    image: "/images/badshahi.jpg",
    excerpt:
      "From the grandeur of Badshahi Mosque to the bustling food streets, Lahore offers a rich blend of culture and tradition...",
  },
  {
    id: 3,
    title: "Why Skardu Should Be On Your Travel List",
    date: "June 10, 2024",
    image: "/images/lake-boat.jpg",
    excerpt:
      "Skardu is the gateway to some of the world’s highest peaks and most stunning lakes. Here’s why it should be your next destination...",
  },
  {
    id: 4,
    title: "Relaxing Getaway: Beaches of Karachi",
    date: "July 8, 2024",
    image: "/images/beach.jpg",
    excerpt:
      "Karachi isn’t just Pakistan’s business hub — it’s also home to golden beaches and unforgettable Arabian Sea sunsets...",
  },
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);

  // Render Swiper only on the client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <Image
          src="/images/hero1.jpg"
          alt="Blog Hero"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide">
            Travel Stories & Guides
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Insights, tips, and adventures from across Pakistan and beyond.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-lg transition hover:scale-105">
            Start Reading
          </button>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Latest Blogs
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-sky-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover experiences, culture, and stories from across Pakistan’s
            breathtaking destinations.
          </p>
        </div>

        {/* Mobile Swiper */}
        {mounted && (
          <div className="block lg:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.05} // Slight peek for next card
              pagination={{ clickable: true }}
              className="pb-6"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {blog.date}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-medium shadow hover:scale-105 transition-transform duration-300">
                        Read More →
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-white/90 backdrop-blur-md border border-gray-100 hover:border-sky-200 transition group"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {blog.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
                <button className="mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-sm font-medium shadow transition-all duration-300 hover:scale-105">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
