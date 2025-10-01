// src/app/tours/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { title: "Adventure Tours", img: "/images/adventure.jpg" },
  { title: "Cultural Tours", img: "/images/culture.jpg" },
  { title: "Beach Getaways", img: "/images/beach.jpg" },
  { title: "Luxury Escapes", img: "/images/luxury.jpg" },
  { title: "Family Vacations", img: "/images/family.jpg" },
  { title: "Wildlife Expeditions", img: "/images/wildlife.jpg" },
];

const popularTours = [
  {
    title: "Romantic Getaway to Paris",
    days: "5 Days, 4 Nights",
    price: "$1400",
    img: "/images/tours/paris.jpg",
  },
  {
    title: "Santorini Escape",
    days: "4 Days, 3 Nights",
    price: "$1200",
    img: "/images/tours/santorini.jpg",
  },
  {
    title: "Tokyo Cultural Immersion",
    days: "7 Days, 6 Nights",
    price: "$2000",
    img: "/images/tours/tokyo.jpg",
  },
];

export default function ToursPage() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center pt-32"
        style={{ backgroundImage: "url('/images/hero-tours.jpg')" }}
      >
        <div className="bg-black/50 w-full h-full absolute"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Explore Our Tours</h1>
          <p className="max-w-2xl mx-auto mb-6">
            Choose from our wide range of tours and adventures, designed to make
            your journey unforgettable.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 shadow-lg max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Destination"
              className="flex-1 border border-gray-200 rounded px-4 py-2"
            />
            <select className="border border-gray-200 rounded px-4 py-2">
              <option>Tour Type</option>
              <option>Adventure</option>
              <option>Luxury</option>
              <option>Cultural</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Tour Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                width={300}
                height={200}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center font-semibold">{cat.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Most Popular Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <Image
                  src={tour.img}
                  alt={tour.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{tour.days}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">
                      {tour.price}
                    </span>
                    <Link
                      href="/tours/details"
                      className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
