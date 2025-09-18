"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/avatar2.jpg"
          alt="Travel Adventure"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="text-blue-400">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            We believe in creating unforgettable journeys, connecting cultures, and inspiring adventure.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/our-story.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for exploration, our travel company has been guiding adventurers to breathtaking destinations for over a decade.
              We&apos;re more than just tours — we craft experiences that inspire and transform.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it&apos;s the mountains of Hunza, the lakes of Skardu, or the valleys of Kashmir, we take pride in curating journeys filled with culture, comfort, and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide travelers with authentic, safe, and meaningful experiences that create lifelong memories.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading travel brand that connects people with nature, culture, and adventure worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Ali Raza", role: "Founder & CEO", img: "/images/avatar.jpg" },
            { name: "Sara Khan", role: "Travel Consultant", img: "/images/avatar.jpg" },
            { name: "Usman Ahmed", role: "Tour Guide", img: "/images/avatar.jpg" },
            { name: "Ayesha Malik", role: "Customer Support", img: "/images/avatar.jpg" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Plan Your Next Adventure</h2>
        <p className="mb-6 text-blue-100">
          Get in touch with us today and start your unforgettable journey.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </main>
  );
}
