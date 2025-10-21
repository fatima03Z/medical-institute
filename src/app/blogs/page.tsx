"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white">
        <Image
          src="/images/blog-hero.png"
          alt="Blog Hero Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Insights & Inspiration
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Discover the latest healthcare, management, and leadership trends 
            shared by industry experts and professionals at London Medical Academy.
          </p>
        </div>
      </div>

      {/* ✅ Blog Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "The Future of Healthcare Leadership",
            desc: "Explore how innovative leaders are reshaping the healthcare industry with modern strategies and global perspectives.",
            img: "/images/doctor-5710152_1280.jpg",
            link: "/blogs/healthcare-leadership",
          },
          {
            title: "Effective Management in Medical Settings",
            desc: "Learn the core principles of managing medical institutions for better efficiency and patient care outcomes.",
            img: "/images/doctor-5710152_1280.jpg",
            link: "/blogs/medical-management",
          },
          {
            title: "Finance Essentials for Healthcare Professionals",
            desc: "Understand budgeting, cost control, and financial planning for hospitals and clinics worldwide.",
            img: "/images/doctor-5710152_1280.jpg",
            link: "/blogs/healthcare-finance",
          },
          {
            title: "The Role of HR in Modern Hospitals",
            desc: "Discover how effective HR practices can enhance teamwork and operational success in healthcare facilities.",
            img: "/images/doctor-2568481_1280.jpg",
            link: "/blogs/hr-hospitals",
          },
          {
            title: "Digital Transformation in Healthcare",
            desc: "Find out how AI, data analytics, and health informatics are transforming healthcare delivery globally.",
            img: "/images/doctor-5710152_1280.jpg",
            link: "/blogs/healthcare-technology",
          },
          {
            title: "Public Health and Global Change",
            desc: "Understand the growing importance of public health leadership in solving global health challenges.",
            img: "/images/publichealth.png",
            link: "/blogs/public-health",
          },
        ].map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition"
          >
            <div className="relative h-[200px]">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#073B53] mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {blog.desc}
              </p>
              <Link
                href={blog.link}
                className="inline-block bg-[#25B0F0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1988BC] transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated with Expert Insights
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Join our global network of learners and professionals to receive 
          the latest blog updates, articles, and training opportunities.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#073B53] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
}
