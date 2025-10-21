"use client";
import Image from "next/image";
import Link from "next/link";

export default function DiplomasPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white">
        <Image
          src="/images/graduation-995042_1280.jpg"
          alt="Diploma Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Professional Diploma Programs
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Gain international recognition and practical expertise with our accredited
            diploma programs designed for healthcare and management professionals.
          </p>
        </div>
      </div>

      {/* Diploma Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Diploma in Healthcare Management",
            desc: "Develop leadership, financial, and administrative skills to manage modern healthcare organizations effectively.",
            img: "/images/blogs-book-2646768_1280.png",
          },
          {
            title: "Diploma in Medical Leadership",
            desc: "Train to lead medical teams, improve patient outcomes, and inspire innovation in healthcare services.",
            img: "/images/blogs-book-2646768_1280.png",
          },
          {
            title: "Diploma in Clinical Research",
            desc: "Learn about research design, ethics, and analysis to contribute effectively to global medical advancements.",
            img: "/images/blogs-book-2646768_1280.png",
          },
          {
            title: "Diploma in Hospital Administration",
            desc: "Master the art of hospital operations, HR, and patient care coordination for efficient service delivery.",
            img: "/images/blogs-book-2646768_1280.png",
          },
          {
            title: "Diploma in Public Health",
            desc: "Understand epidemiology, health policies, and community engagement to make a lasting impact in public health.",
            img: "/images/blogs-book-2646768_1280.png",
          },
          {
            title: "Diploma in Health Informatics",
            desc: "Learn to integrate IT and healthcare for smarter data-driven decision-making and patient care improvement.",
            img: "/images/blogs-book-2646768_1280.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition"
          >
            <div className="relative h-[200px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#073B53] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#25B0F0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1988BC] transition"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Begin Your Journey Toward Excellence
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Join our globally recognized diploma programs and elevate your professional
          growth in the field of healthcare and management.
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
