"use client";

import Image from "next/image";

export default function TravelStats() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden shadow-2xl">
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
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-15 p-4 sm:p-8 lg:p-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-10 lg:gap-16 items-center justify-items-center">
            {/* Stats Card */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-3 sm:p-6 lg:p-10 w-full max-w-xs sm:max-w-md">
              <div className="grid grid-cols-2 divide-x divide-gray-300 text-center">
                <div>
                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-bold text-blue-600">
                    30k+
                  </h3>
                  <p className="text-gray-700 mt-1 sm:mt-2 text-[10px] sm:text-sm lg:text-base">
                    Satisfied Customers
                  </p>
                </div>
                <div>
                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-bold text-blue-600">
                    5480+
                  </h3>
                  <p className="text-gray-700 mt-1 sm:mt-2 text-[10px] sm:text-sm lg:text-base">
                    Awesome Tours
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-300 text-center mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8">
                <div>
                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-bold text-blue-600">
                    6,562+
                  </h3>
                  <p className="text-gray-700 mt-1 sm:mt-2 text-[10px] sm:text-sm lg:text-base">
                    Destinations Worldwide
                  </p>
                </div>
                <div>
                  <h3 className="text-sm sm:text-2xl lg:text-4xl font-bold text-blue-600">
                    26+
                  </h3>
                  <p className="text-gray-700 mt-1 sm:mt-2 text-[10px] sm:text-sm lg:text-base">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Circle CTA */}
            <div className="flex justify-center">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full bg-blue-600 flex flex-col items-center justify-center text-center text-white shadow-xl">
                <h2 className="text-base sm:text-2xl lg:text-4xl font-bold">
                  Travel
                </h2>
                <p className="text-[10px] sm:text-sm lg:text-lg">Journey</p>
                <button className="mt-2 sm:mt-4 px-2 sm:px-5 lg:px-6 py-1 sm:py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition text-[10px] sm:text-sm lg:text-base">
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
