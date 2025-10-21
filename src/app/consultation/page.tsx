"use client";
import Image from "next/image";
import Link from "next/link";

export default function ConsultationPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white">
        <Image
          src="/images/herobg.png"
          alt="Consultation Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Expert Consultation Services
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Get personalized guidance from our certified professionals to advance your career
            and make informed decisions in healthcare and management.
          </p>
        </div>
      </div>

      {/* Consultation Types */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Career Guidance",
            desc: "Receive expert advice on choosing the right healthcare specialization, job role, or study path that matches your goals.",
            img: "/images/entrepreneur-1340649_960_720.jpg",
          },
          {
            title: "Academic Consultation",
            desc: "Get assistance with course selection, admissions, and professional diploma programs to boost your credentials.",
            img: "/images/doctor-5710152_1280.jpg",
          },
          {
            title: "Healthcare Management",
            desc: "Consult with professionals to learn about efficient hospital administration, leadership, and patient care strategies.",
            img: "/images/blood-test-5906818_960_720.jpg",
          },
          {
            title: "Research Assistance",
            desc: "Discuss your research projects, learn about proposal writing, ethics, and publication opportunities with experts.",
            img: "/images/man-2562325_1280.jpg",
          },
          {
            title: "Professional Development",
            desc: "Plan your career advancement with workshops, certifications, and mentorship in your chosen field.",
            img: "/images/technology-7111761_1280.jpg",
          },
          {
            title: "One-on-One Mentorship",
            desc: "Book personalized mentorship sessions to gain real-world insights and career transformation support.",
            img: "/images/online-4668930_640.jpg",
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
                href="/apply"
                className="inline-block bg-[#25B0F0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1988BC] transition"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Talk to Our Experts Today
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Schedule your consultation session and get expert advice tailored to your academic
          and professional journey.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#073B53] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
