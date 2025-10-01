"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

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
    <header className="fixed w-full top-0 left-0 z-50">
      {/* Top Info Bar */}
      <div className="w-full bg-[#2E2D3A] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="tel:+923001814440"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+92 300 1814440</span>
            </a>
            <a  
              href="mailto:muhammaddanial5959@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>muhammaddanial5959@gmail.com</span>
            </a>
          </div>

          {/* Right Side - Socials & Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Twitter, Youtube, FaTiktok, Linkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-black rounded-full 
                             transition transform hover:scale-110 hover:bg-yellow-500 shadow-md hover:shadow-yellow-400/50"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
            <button
              className="ml-3 px-4 py-2 bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold 
                         rounded-md shadow-md transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
            >
              CUSTOMIZE A TOUR
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white shadow-md transition-all duration-300 ${
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
              { name: "Destinations", href: "./Destinations" },
              { name: "Tours", href: "./Tours" },
              { name: "About", href: "./About-us" },
              { name: "Testimonials", href: "./Testimonials" },
              { name: "Blog", href: "./Blog" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 hover:text-blue-600 transition text-sm sm:text-base group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition text-sm sm:text-base shadow-md hover:shadow-lg"
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
              { name: "Destinations", href: "./Destinations" },
              { name: "Tours", href: "./Tours" },
              { name: "About", href: "./About-us" },
              { name: "Testimonials", href: "./Testimonials" },
              { name: "Blog", href: "./Blog" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-2 px-4 py-2 text-white bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition text-sm shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
