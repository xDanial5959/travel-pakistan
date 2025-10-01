"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800 pt-16 sm:pt-20">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-colors duration-300">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] w-full flex items-center justify-center pt-20">
        {/* Background Image */}
        <Image
          src="/images/aboutus.jpg"
          alt="About Us Hero"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-75"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInUp">
            About <span className="text-green-400">Us</span>
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-gray-200 text-base sm:text-lg md:text-xl animate-fadeInUp delay-200">
            Discover our journey, meet our team, and explore how we’re reshaping
            tourism in Pakistan with love for nature and adventure.
          </p>
          <a
            href="#our-team"
            className="mt-5 sm:mt-6 inline-block px-5 sm:px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            Meet the Team
          </a>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-16 sm:py-20 items-center">
        {/* Image */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/avatar.jpg"
            alt="Founders"
            fill
            quality={100}
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-600 mb-3">
            Who we are?
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Hi, I am <span className="font-semibold">Neha Tahir</span>. I
            started this venture back in 2018 after gathering my experience for
            over two years and now a total of almost seven years in this full of
            potential industry of Pakistan, the{" "}
            <span className="font-semibold">Tourism Industry</span>, by the name
            of{" "}
            <span className="font-semibold text-green-600">
              NatureHikePakistan.pk
            </span>
            .
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Together, with this team of wild travelers, we are committed to
            bringing more sustainable and yet exciting tourism in Pakistan,
            playing our part in showcasing its beauty.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="our-team" className="bg-gray-50 py-16 sm:py-20 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-10 sm:mb-12">
          Our Team
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {[
            { name: "Neha Tahir", role: "Founder", img: "/images/avatar3.jpg" },
            { name: "Nouman Ali", role: "Co-Founder", img: "/images/avatar2.jpg" },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative h-[350px] sm:h-[450px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-semibold">
                  {member.name}
                </h4>
                <p className="text-green-600 font-medium uppercase text-xs sm:text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-6">
          Who are our clients?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
          Our clients include families, couples, students, friends, and
          corporate groups. Whoever you are, we build the best packages for you
          and always welcome you.
        </p>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-black text-center py-16 sm:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
          Ready for an unforgettable tour?
        </h2>
        <p className="text-white mb-6 text-sm sm:text-base">
          Plan your trips with us
        </p>
        <a
          href="/contact"
          className="px-5 sm:px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          Customize a Tour
        </a>
      </section>

      <Footer />
    </main>
  );
}
