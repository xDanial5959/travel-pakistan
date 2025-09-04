"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 lg:p-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Are They <span className="text-blue-600">Talking About?</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            See what our happy travelers have to say about their journeys with TravelPakistan.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/testimonials/user1.jpg"
                alt="Ali Khan"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Ali Khan</h3>
            <p className="text-sm text-gray-500">Traveler from Lahore</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              “My trip to Hunza with TravelPakistan was unforgettable. Everything was arranged perfectly!”
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/testimonials/user2.jpg"
                alt="Sarah Ahmed"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Sarah Ahmed</h3>
            <p className="text-sm text-gray-500">Traveler from Karachi</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              “From booking to the end, the experience was smooth. Highly recommended for families!”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/testimonials/user3.jpg"
                alt="John Doe"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Traveler from Islamabad</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              “Skardu was magical! The guides were professional, and the trip was hassle-free.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
