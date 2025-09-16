"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`ml-2 font-bold text-gray-800 transition-all duration-300 ${
              isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            }`}
          >
            TravelPakistan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: "Home", href: "/" },
            { name: "Destinations", href: "/destinations" },
            { name: "Tours", href: "/tours" },
            { name: "About", href: "/about" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition text-sm sm:text-base"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-1">
          {[
            { name: "Home", href: "/" },
            { name: "Destinations", href: "/destinations" },
            { name: "Tours", href: "/tours" },
            { name: "About", href: "/about" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mx-4 mt-2 px-4 py-2 text-white bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
