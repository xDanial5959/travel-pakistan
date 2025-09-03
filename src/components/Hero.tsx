// components/HeroSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import heroImage from '/mnt/data/15587557-e59e-4289-b0e8-fe95244e5f56.webp';

export default function HeroSection() {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.jpg" 
          alt="Hero Background"
          fill
         
          className="brightness-90 object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Explore the World, One Trip at a Time
        </h1>
        <p className="text-white/90 text-lg md:text-2xl mb-8 max-w-2xl">
          Discover unforgettable adventures, explore breathtaking destinations, and create lifelong memories with TravelCo.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Book Your Journey
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
            Play Video
          </button>
        </div>

        {/* Search Filters */}
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-3 w-full max-w-4xl">
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="date"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
