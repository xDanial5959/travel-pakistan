"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  { id: 1, src: "/images/luxury.jpg", alt: "Luxury Travel", location: "Dubai, UAE", date: "2024-04-15" },
  { id: 2, src: "/images/adventure.jpg", alt: "Adventure", location: "Hunza, Pakistan", date: "2024-05-10" },
  { id: 3, src: "/images/culture.jpg", alt: "Culture", location: "Istanbul, Turkey", date: "2024-06-20" },
  { id: 4, src: "/images/family.jpg", alt: "Family Trips", location: "Bali, Indonesia", date: "2024-07-12" },
  { id: 5, src: "/images/beach2.jpg", alt: "Beach Relax", location: "Maldives", date: "2024-08-05" },
  { id: 6, src: "/images/lake-boat.jpg", alt: "Lake Boat", location: "Skardu, Pakistan", date: "2024-09-01" },
];

export default function Gallery() {
  const [selectedSrc, setSelectedSrc] = useState(null);

  // close on Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelectedSrc(null);
    }
    if (selectedSrc) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedSrc]);

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* heading */}
        <div className="text-center mb-10">
          <p className="text-sky-500 font-medium uppercase tracking-wide text-sm">
            Recent Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
            Our Travel Collage
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            A curated selection of moments — click to view larger.
          </p>
        </div>

        {/* collage grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          {/* big feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="sm:col-span-4 h-64 sm:h-[420px] rounded-3xl overflow-hidden relative cursor-pointer shadow-2xl group"
            onClick={() => setSelectedSrc(gallery[0].src)}
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              width={1600}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">{gallery[0].alt}</h3>
              <p className="text-gray-200 text-sm">
                {gallery[0].location} • {gallery[0].date}
              </p>
            </div>
          </motion.div>

          {/* two stacked tiles */}
          <div className="sm:col-span-2 grid grid-rows-2 gap-4">
            {gallery.slice(1, 3).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative h-40 sm:h-[200px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                onClick={() => setSelectedSrc(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-lg font-medium">{item.alt}</p>
                  <span className="text-gray-200 text-xs">
                    {item.location} • {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bottom three tiles */}
          {gallery.slice(3, 6).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 relative h-44 sm:h-[220px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setSelectedSrc(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-base font-medium">{item.alt}</p>
                <span className="text-gray-200 text-xs">
                  {item.location} • {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {selectedSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedSrc(null)}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <div
            className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setSelectedSrc(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <div className="w-full h-[60vh] sm:h-[75vh] md:h-[80vh] relative bg-black">
              <Image
                src={selectedSrc}
                alt="Selected"
                width={1600}
                height={1000}
                className="w-full h-full object-contain bg-black"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
