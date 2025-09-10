"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "TOURIST",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    
    avatar: "/images/avatar.jpg",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "TOURIST",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
    
    avatar: "/images/avatar3.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[current];

  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50 overflow-hidden">
      {/* background animation layer */}
      <div className="absolute inset-0 pattern-animation pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <p className="text-sky-500 font-medium uppercase tracking-wide text-sm sm:text-base">
            Our Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            What they are talking about
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-105">
            <Image
              src="/images/hikingGirl.png"
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white/80 backdrop-blur-md border border-sky-100 shadow-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center transition hover:shadow-xl">
            {/* Profile */}
            <div className="flex flex-col items-center -mt-12 sm:-mt-16 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tag */}
              <div className="mt-3 bg-sky-500 text-white px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow">
                {testimonial.name}
                <span className="ml-2 text-[10px] sm:text-xs opacity-90">
                  {testimonial.role}
                </span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4 sm:mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 mr-1"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              “{testimonial.text}”
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center lg:justify-end mt-8 md:mt-10 gap-3 sm:gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-md hover:shadow-lg transition"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-md hover:shadow-lg transition"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
