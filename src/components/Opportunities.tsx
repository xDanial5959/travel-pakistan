"use client";

import Image from "next/image";
import { Users, Target } from "lucide-react";

export default function OpportunitySection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Images + Experience Card */}
        <div className="grid grid-cols-2 gap-6">
          {/* First Image + Experience Card */}
          <div className="flex flex-col gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/mountain-lake.jpg"
                alt="Adventure"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Card */}
            <div className="bg-blue-500 text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md">
              <div className="text-4xl font-bold">25</div>
              <p className="text-lg font-medium">Years Of Experiences</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/images/lake-boat.jpg"
              alt="Travel"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text + Info */}
        <div>
          <p className="text-blue-500 font-semibold mb-2">About Company</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Great Opportunity for <br /> Adventure & Travels
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Embark on a journey filled with breathtaking landscapes, thrilling
            experiences, and unforgettable memories. Whether you’re an explorer
            or a leisure traveler, this is the perfect opportunity to discover
            the world’s wonders.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Trusted travel guide
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover the world with a guide you can trust.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Mission & Vision</h4>
                <p className="text-gray-600 text-sm">
                  Discover the world with a guide you can trust.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + Founder Info */}
          <div className="flex items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition">
              Start Your Journey
            </button>
            <div className="flex items-center gap-3">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h5 className="font-semibold text-gray-800">Danial AKbar</h5>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Plane (optional) */}
      <Image
        src="/images/plane.png"
        alt="Plane"
        width={120}
        height={120}
        className="absolute top-10 right-10"
      />
    </section>
  );
}
