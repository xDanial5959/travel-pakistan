"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Offer = {
  id: string;
  title: string;
  location: string;
  nights: string;
  price: string;
  rating: number;
  image: string;
  href: string;
  tag?: string;
};

const offers: Offer[] = [
  {
    id: "hunza",
    title: "Hunza Valley Escape",
    location: "Gilgit-Baltistan",
    nights: "5 Days • 4 Nights",
    price: "PKR 45,000",
    rating: 4.8,
    image: "/images/adventure.jpg",
    href: "/tours/hunza-valley",
    tag: "Adventure",
  },
  {
    id: "skardu",
    title: "Skardu & Shangrila",
    location: "Gilgit-Baltistan",
    nights: "6 Days • 5 Nights",
    price: "PKR 58,000",
    rating: 4.7,
    image: "/images/culture.jpg",
    href: "/tours/skardu-shangrila",
    tag: "Scenic",
  },
  {
    id: "swat",
    title: "Swat Valley Retreat",
    location: "KPK",
    nights: "4 Days • 3 Nights",
    price: "PKR 32,000",
    rating: 4.6,
    image: "/images/family.jpg",
    href: "/tours/swat-valley",
    tag: "Family",
  },
  {
    id: "kashmir",
    title: "Neelum Valley Highlights",
    location: "AJK",
    nights: "3 Days • 2 Nights",
    price: "PKR 26,000",
    rating: 4.5,
    image: "/images/lake-boat.jpg",
    href: "/tours/neelum-valley",
    tag: "Getaway",
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const count = 5;

  return (
    <div className="flex items-center gap-1" aria-label={`${value} star rating`}>
      {Array.from({ length: count }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && half;
        return (
          <span key={i} className="inline-block align-middle">
            {isFull && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-yellow-400">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            )}
            {!isFull && isHalf && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-400">
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192L12 .587z"
                  fill={`url(#half-${i})`}
                  stroke="currentColor"
                />
              </svg>
            )}
            {!isFull && !isHalf && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-300">
                <path
                  d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192L12 .587z"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            )}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-gray-200">{value.toFixed(1)}</span>
    </div>
  );
}

export default function OffersToInspire() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Offers To <span className="text-blue-600">Inspire You</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Handpicked trips with great value — perfect for your next escape.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="block sm:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.1}>
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <Link
                  href={offer.href}
                  className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      sizes="100vw"
                      quality={100}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {offer.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
                        {offer.tag}
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-white text-lg font-semibold leading-tight">
                        {offer.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {offer.location} • {offer.nights}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <Stars value={offer.rating} />
                        <div className="text-right">
                          <p className="text-xs text-gray-300">From</p>
                          <p className="text-white font-semibold">{offer.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={offer.href}
              className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {offer.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
                    {offer.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {offer.location} • {offer.nights}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <Stars value={offer.rating} />
                    <div className="text-right">
                      <p className="text-xs text-gray-300">From</p>
                      <p className="text-white font-semibold">{offer.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
}
