// src/app/Destinations/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const destinations = [
  {
    id: 1,
    name: "Hunza Valley",
    location: "Gilgit-Baltistan, Pakistan",
    image: "/images/mountains.jpg",
    description:
      "Snow-capped peaks, turquoise rivers, and warm local hospitality await in Hunza.",
  },
  {
    id: 2,
    name: "Skardu",
    location: "Gilgit-Baltistan, Pakistan",
    image: "/images/lake-boat.jpg",
    description:
      "Gateway to the mighty Karakoram, home to K2 and surreal alpine lakes.",
  },
  {
    id: 3,
    name: "Badshahi Mosque",
    location: "Lahore, Pakistan",
    image: "/images/badshahi.jpg",
    description:
      "A Mughal masterpiece with timeless architecture and history.",
  },
  {
    id: 4,
    name: "Karimabad",
    location: "Hunza, Pakistan",
    image: "/images/jungleHike.jpg",
    description:
      "A tranquil valley town with apricot orchards and historic forts.",
  },
  {
    id: 5,
    name: "Fairy Meadows",
    location: "Gilgit-Baltistan, Pakistan",
    image: "/images/mountain-lake.jpg",
    description:
      "A breathtaking alpine meadow at the base of Nanga Parbat.",
  },
  {
    id: 6,
    name: "Clifton Beach",
    location: "Karachi, Pakistan",
    image: "/images/beach.jpg",
    description:
      "Golden sands and Arabian Sea sunsets in Pakistan’s vibrant city.",
  },
];

export default function DestinationsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Navbar overlay with gradient */}
      <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <Image
          src="/images/hero1.jpg"
          alt="Destinations Hero"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Discover Pakistan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            From majestic mountains to serene beaches — explore the beauty of
            Pakistan like never before.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-lg transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Destinations
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Handpicked experiences to inspire your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="relative w-full h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition" />
              </div>
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-2xl font-bold">{dest.name}</h3>
                <p className="text-sm opacity-90">{dest.location}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="bg-white/90 text-gray-800 text-sm p-4 rounded-xl shadow max-w-xs text-center">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
