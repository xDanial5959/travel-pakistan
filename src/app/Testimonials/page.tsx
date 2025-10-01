"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Users, Globe2, MapPin, Award } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Khan",
      role: "Travel Enthusiast",
      img: "/images/avatar1.jpg",
      quote:
        "NatureHikePakistan made our trip unforgettable! From the planning to the execution, everything was smooth and stress-free.",
    },
    {
      name: "Ali Raza",
      role: "Corporate Client",
      img: "/images/avatar2.jpg",
      quote:
        "Professional, well-organized, and fun! Our corporate retreat was exactly what we needed. Highly recommend them!",
    },
    {
      name: "Amna Tariq",
      role: "Adventure Lover",
      img: "/images/avatar3.jpg",
      quote:
        "The team knows the best spots in Pakistan. I’ve traveled with them twice and can’t wait for my next adventure.",
    },
    {
      name: "Usman Malik",
      role: "Backpacker",
      img: "/images/avatar4.jpg",
      quote:
        "What stood out the most was their hospitality. It never felt like a service, it felt like traveling with friends.",
    },
  ];

  const milestones = [
    {
      icon: <Users className="w-10 h-10 text-sky-600" />,
      value: 10000,
      suffix: "+",
      label: "Happy Travelers",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-sky-600" />,
      value: 25,
      suffix: "+",
      label: "Destinations Covered",
    },
    {
      icon: <MapPin className="w-10 h-10 text-sky-600" />,
      value: 500,
      suffix: "+",
      label: "Adventures Organized",
    },
    {
      icon: <Award className="w-10 h-10 text-sky-600" />,
      value: 8,
      suffix: "+",
      label: "Years of Experience",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="relative bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 via-sky-50 to-sky-100 animate-pulse-slow" />

        {/* Floating blurred circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-200/30 rounded-full blur-2xl animate-float" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <Image
          src="/images/testimonial-hero.jpg"
          alt="Testimonials Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 via-sky-900/50 to-sky-900/90" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInUp">
            What Our <span className="text-sky-400">Travelers</span> Say
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-sky-100 text-lg md:text-xl leading-relaxed animate-fadeInUp delay-200">
            Real voices from people who’ve explored Pakistan with us — their
            trust is our proudest milestone.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="bg-gradient-to-r from-sky-50 to-white p-12 rounded-3xl shadow-lg relative overflow-hidden hover:shadow-2xl transition">
          <span className="absolute text-9xl text-sky-200 font-serif -top-10 left-10 select-none">
            “
          </span>
          <p className="text-2xl md:text-3xl italic text-slate-700 leading-relaxed relative z-10">
            Traveling with NatureHikePakistan was more than a trip — it was an
            experience of connection, culture, and discovery. Their attention to
            detail and passion for tourism is unmatched.
          </p>
          <div className="flex items-center gap-5 mt-8 relative z-10">
            <Image
              src="/images/avatar2.jpg"
              alt="Ali Raza"
              width={75}
              height={75}
              className="rounded-full object-cover border-4 border-sky-200 shadow-md"
            />
            <div>
              <h4 className="text-xl font-bold text-slate-900">Ali Raza</h4>
              <p className="text-sky-700 text-sm font-medium">
                Corporate Client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition p-8 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-sky-200 shadow-md">
              <Image
                src={t.img}
                alt={t.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-slate-600 italic mb-6 leading-relaxed text-lg">
              “{t.quote}”
            </p>
            <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
            <p className="text-sky-600 font-medium text-sm">{t.role}</p>
          </div>
        ))}
      </section>

      {/* Milestones Section */}
      <section
        ref={ref}
        className="relative py-24 bg-gradient-to-b from-sky-50 via-white to-sky-100"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-14">
            Our Journey in <span className="text-sky-600">Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-10 transition transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{m.icon}</div>
                <h3 className="text-3xl font-extrabold text-sky-600">
                  {inView ? (
                    <CountUp end={m.value} duration={2} suffix={m.suffix} />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="mt-2 text-slate-700 font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-sky-600 to-sky-700 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug">
            Ready for Your Next{" "}
            <span className="text-amber-300">Adventure?</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-sky-100 leading-relaxed">
            Thousands of happy travelers trusted us to craft their perfect trip.
            Let’s make yours unforgettable.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-300 text-black font-bold rounded-full shadow-lg hover:bg-amber-400 hover:shadow-xl transition"
          >
            Plan Your Journey
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
