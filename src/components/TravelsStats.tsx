"use client";

import Image from "next/image";

export default function TravelStats() {
  return (
    <section className="relative py-20">
      {/* Centered Background Container */}
      <div className="relative max-w-6xl mx-auto px-6 rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/luxury.jpg"
            alt="Travel Background"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-blac" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-10">
              <div className="grid grid-cols-2 divide-x divide-gray-300 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-blue-600">30k+</h3>
                  <p className="text-gray-700 mt-2">Satisfied Customers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-600">5480+</h3>
                  <p className="text-gray-700 mt-2">Awesome Tours</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-300 text-center mt-8 pt-8">
                <div>
                  <h3 className="text-4xl font-bold text-blue-600">6,562+</h3>
                  <p className="text-gray-700 mt-2">Destinations Worldwide</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-600">26+</h3>
                  <p className="text-gray-700 mt-2">Years of Experience</p>
                </div>
              </div>
            </div>

            {/* Circle CTA */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-full bg-blue-600 flex flex-col items-center justify-center text-center text-white shadow-xl">
                <h2 className="text-4xl font-bold">Travel</h2>
                <p className="text-lg">Journey</p>
                <button className="mt-5 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Join With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
