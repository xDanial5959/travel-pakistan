"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Romantic Getaway to Paris",
    days: "5 Days / 4 Nights",
    price: "$140",
    image: "/images/luxury.jpg",
  },
  {
    id: 2,
    title: "Santorini Escape",
    days: "7 Days / 6 Nights",
    price: "$180",
    image: "/images/beach.jpg",
  },
  {
    id: 3,
    title: "Tokyo Cultural Immersion",
    days: "6 Days / 5 Nights",
    price: "$220",
    image: "/images/culture.jpg",
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    days: "8 Days / 7 Nights",
    price: "$260",
    image: "/images/family.jpg",
  },
  {
    id: 5,
    title: "Safari in Kenya",
    days: "10 Days / 9 Nights",
    price: "$310",
    image: "/images/adventure.jpg",
  },
  {
    id: 6,
    title: "Maldives Luxury Stay",
    days: "6 Days / 5 Nights",
    price: "$400",
    image: "/images/family.jpg",
  },
];

export default function PopularTours() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Most Popular Tours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our travelers’ favorite tours, crafted for unforgettable experiences.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-12"
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id} className="transition-transform duration-500">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group h-full">
                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{tour.days}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold text-lg">
                      {tour.price}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button
            ref={prevRef}
            className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button
            ref={nextRef}
            className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
