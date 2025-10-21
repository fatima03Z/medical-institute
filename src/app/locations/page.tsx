"use client";
import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white">
        <Image
          src="/images/travel-2650303_1280.jpg"
          alt="Locations Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Global Locations
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            We’re proud to serve learners around the world with multiple training
            centers and online access to all programs.
          </p>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            city: "london",
            address: "1st Floor, Occian Trade Center, Block 5, london",
            phone: "+92 21 1234 5678",
            email: "karachi@myinstitute.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.726623108013!2d67.03164657544443!3d24.81256254761785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9d8d09f4ed%3A0x6d93f45f6e606c88!2sClifton%20Trade%20Center!5e0!3m2!1sen!2s!4v1695370015871!5m2!1sen!2s",
            img: "/images/office-730681_1280.jpg",
          },
          {
            city: "london",
            address: " Business Hub, Main Boulevard Gulberg, city",
            phone: "+92 42 9876 5432",
            email: "london@myinstitute.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.000000000000!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919049f3d2b2e05%3A0x0000000000000000!2sGulberg%20Business%20Hub!5e0!3m2!1sen!2s!4v1695370015872!5m2!1sen!2s",
            img: "/images/office-4959781_1280.jpg",
          },
          {
            city: "london",
            address: "Office #12, Blue Area, Blue Avenue, london",
            phone: "+92 51 2468 1357",
            email: "islamabad@myinstitute.com",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.000000000000!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954cd1234567%3A0x0000000000000000!2sBlue%20Area!5e0!3m2!1sen!2s!4v1695370015873!5m2!1sen!2s",
            img: "/images/iocenters-2673326_1280.jpg",
          },
        ].map((loc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition"
          >
            <div className="relative h-[200px]">
              <Image
                src={loc.img}
                alt={loc.city}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#073B53] mb-2">
                {loc.city}
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                📍 {loc.address}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                📞 {loc.phone}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                ✉️ {loc.email}
              </p>
              <div className="w-full h-[180px] rounded-xl overflow-hidden">
                <iframe
                  src={loc.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Visit or Contact Our Centers
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Whether you’re looking to enroll, inquire, or collaborate — our team is always ready to assist you in person or online.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#073B53] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
