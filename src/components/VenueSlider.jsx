"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const venues = [
  { id: 1, city: "London", image: "/images/london.png", link: "/courses/london" },
  { id: 2, city: "Dubai", image: "/images/london.png", link: "/courses/dubai" },
  { id: 3, city: "New York", image: "/images/london.png", link: "/courses/newyork" },
  { id: 4, city: "Toronto", image: "/images/london.png", link: "/courses/toronto" },
];

export default function VenueSlider() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white relative">
      {/* Heading & description */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#073B53] leading-snug">
          Choose Your Venue, Start Your <br className="hidden md:block" /> Training Journey Today
        </h2>
        <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed px-2">
          We are the world’s largest provider of professional development training courses and 
          certified programmes operating in 30+ cities worldwide. From the Middle East, Asia, Africa, 
          North America, Europe and beyond, our global reach offers you unrivalled access to courses.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {venues.map((venue, index) => (
            <SwiperSlide key={venue.id}>
              <div className="rounded-lg overflow-hidden shadow-md bg-white group transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 md:h-56">
                  <Image
                    src={venue.image}
                    alt={venue.city}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#073B53] text-white text-center py-3 md:py-4 group-hover:bg-[#25B0F0] transition">
                  <Link
                    href={venue.link}
                    className="font-medium block text-base md:text-lg"
                    aria-label={`View courses in ${venue.city}`}
                  >
                    View Courses in {venue.city}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-[-40px] hidden md:flex items-center z-20">
          <button className="swiper-prev">
            <img
              src="/images/sliderleft.png"
              alt="Previous"
              className="w-10 h-10 hover:opacity-80 transition"
            />
          </button>
        </div>
        <div className="absolute inset-y-0 right-[-40px] hidden md:flex items-center z-20">
          <button className="swiper-next">
            <img
              src="/images/slideright.png"
              alt="Next"
              className="w-10 h-10 hover:opacity-80 transition"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
