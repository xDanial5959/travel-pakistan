// components/TourCategories.tsx
"use client";

import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Adventure Tours",
    image: "/images/adventure.jpg",
  },
  {
    id: 2,
    title: "Cultural Tours",
    image: "/images/culture.jpg",
  },
  {
    id: 3,
    title: "Beach Getaways",
    image: "/images/beach.jpg",
  },
  {
    id: 4,
    title: "Luxury Escapes",
    image: "/images/luxury.jpg",
  },
  {
    id: 5,
    title: "Family Vacations",
    image: "/images/family.jpg",
  },
  {
    id: 6,
    title: "Wildlife Expeditions",
    image: "/images/wildlife.jpg",
  },
];

export default function TourCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unforgettable Trips for You
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from a wide variety of tours designed to give you the best travel experience.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="h-56 w-full relative">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
