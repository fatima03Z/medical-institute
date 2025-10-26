"use client";

import { useState } from "react";
import Image from "next/image";

type BlogType = {
  slug: string;
  title: string;
  desc: string;
  full: string;
  img: string;
};

const blogs: BlogType[] = [
  {
    slug: "healthcare-leadership",
    title: "The Future of Healthcare Leadership",
    desc: "Explore how innovative leaders are reshaping the healthcare industry...",
    full: `
      Leadership in healthcare is evolving rapidly. Modern leaders focus on
      empathy, collaboration, data-based decisions and digital transformation.
    `,
    img: "/images/doctor-5710152_1280.jpg",
  },
  {
    slug: "medical-management",
    title: "Effective Management in Medical Settings",
    desc: "Learn the core principles of managing medical institutions...",
    full: `
      Healthcare management requires operational excellence, teamwork,
      resource optimization and patient care quality improvement.
    `,
    img: "/images/doctor-5710152_1280.jpg",
  },
  {
    slug: "healthcare-finance",
    title: "Finance Essentials for Healthcare Professionals",
    desc: "Financial planning and cost control in medical institutions.",
    full: `
      Financial literacy empowers hospitals to operate with efficiency,
      reduce waste and improve patient outcomes.
    `,
    img: "/images/doctor-5710152_1280.jpg",
  },
];

export default function BlogPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const selectedBlog = blogs.find((b) => b.slug === activeSlug);


  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-white">

      {/* ✅ Show Blog Detail Section */}
      {selectedBlog && (
        <>
          <div className="relative w-full h-[50vh]">
            <Image
              src={selectedBlog.img}
              alt={selectedBlog.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl text-white font-bold px-6">
                {selectedBlog.title}
              </h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 text-gray-700 text-justify">
            {selectedBlog.full.split("\n").map((line, i) => (
              <p key={i} className="mb-3">{line}</p>
            ))}

            <button
              onClick={() => setActiveSlug(null)}
              className="mt-6 inline-block bg-[#25B0F0] text-white px-5 py-2 rounded-full hover:bg-[#1988BC] transition"
            >
              ← Back to Blogs
            </button>
          </div>
        </>
      )}

      {/* ✅ Related Blog Cards (always below details) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-8">
        {blogs
          .filter(blog => activeSlug !== blog.slug)
          .map(blog => (
            <div
              key={blog.slug}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition"
            >
              <div className="relative h-[200px]">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#073B53] mb-2">{blog.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{blog.desc}</p>

                <button
                  onClick={() => {
                    setActiveSlug(blog.slug);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-[#25B0F0] text-white px-5 py-2 rounded-full hover:bg-[#1988BC] transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
