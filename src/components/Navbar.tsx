"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-800">
              TravelPakistan
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition">
              Destinations
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-blue-600 transition">
              Tours
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 transition">
              Testimonials
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 py-2">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/destinations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Destinations
          </Link>
          <Link href="/tours" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Tours
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About
          </Link>
          <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Testimonials
          </Link>
          <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-white bg-blue-600 rounded-lg mx-4 text-center hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
