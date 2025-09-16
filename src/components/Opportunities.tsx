"use client";

import Image from "next/image";
import { Users, Target } from "lucide-react";

export default function OpportunitySection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Images + Experience Card */}
        <div className="grid grid-cols-2 gap-6 sm:gap-4 lg:gap-6">
          {/* First Image + Experience Card */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative w-full h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/mountain-lake.jpg"
                alt="Adventure"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="bg-blue-500 text-white rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-md">
              <div className="text-3xl sm:text-4xl font-bold">25</div>
              <p className="text-sm sm:text-lg font-medium">
                Years Of Experiences
              </p>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/images/lake-boat.jpg"
              alt="Travel"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text + Info */}
        <div className="flex flex-col">
          <p className="text-blue-500 font-semibold mb-2 text-sm sm:text-base">
            About Company
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Great Opportunity for <br /> Adventure & Travels
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-full sm:max-w-lg">
            Embark on a journey filled with breathtaking landscapes, thrilling
            experiences, and unforgettable memories. Whether you’re an explorer
            or a leisure traveler, this is the perfect opportunity to discover
            the world’s wonders.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Trusted travel guide
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Discover the world with a guide you can trust.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Mission & Vision
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Discover the world with a guide you can trust.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + Founder Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition w-full sm:w-auto text-center">
              Start Your Journey
            </button>
            <div className="flex items-center gap-3">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Danial AKbar
                </h5>
                <p className="text-xs sm:text-sm text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Plane (optional) */}
      {/* Decorative Plane */}
      <Image
        src="/images/plane.jpg"
        alt="Plane"
        width={80}
        height={80}
        className="hidden sm:block absolute top-5 right-10"
      />
    </section>
  );
}
