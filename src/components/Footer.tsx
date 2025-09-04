"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <Image src="/images/logo.png" alt="Logo" width={40} height={40} /> */}
            <span className="text-white font-bold text-xl">TravelCo</span>
          </div>
          <p className="text-gray-400 text-sm">
            Explore the world with us. We provide curated tours, adventure
            packages, and unforgettable travel experiences.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Tours</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@travelco.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Adventure Road, New York, USA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TravelCo. All Rights Reserved.
      </div>
    </footer>
  );
}
