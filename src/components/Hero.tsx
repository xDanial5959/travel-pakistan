"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then((mod) => mod.motion.p), { ssr: false });
const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button), { ssr: false });

export default function HeroSection() {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[85vh] md:h-screen overflow-hidden">
      {/* Background */}
      <MotionDiv
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image src="/images/hero1.jpg" alt="Hero Background" fill priority className="object-cover brightness-90" />
        <div className="absolute inset-0 bg-black/40" />
      </MotionDiv>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-8 md:px-16 space-y-6 pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-16">
        {/* Heading */}
        <MotionH1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug"
        >
          Explore the World, One Trip at a Time
        </MotionH1>

        {/* Description */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/90 text-sm sm:text-base md:text-xl max-w-xs sm:max-w-md md:max-w-2xl"
        >
          Discover unforgettable adventures, explore breathtaking destinations, and create lifelong memories with TravelCo.
        </MotionP>

        {/* Search Filters */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:max-w-4xl"
        >
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-2 sm:p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="date"
            className="p-2 sm:p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="p-2 sm:p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold w-full sm:w-auto">
            Search
          </button>
        </MotionDiv>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mt-4">
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold w-full sm:w-auto"
          >
            Book Your Journey
          </MotionButton>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-lg font-semibold w-full sm:w-auto"
          >
            Play Video
          </MotionButton>
        </div>
      </div>
    </section>
  );
}
