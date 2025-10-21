"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Management",
    icon: "/images/management.png",
    link: "/courses/management",
  },
  {
    title: "Environment",
    icon: "/images/environment.png",
    link: "/courses/environment",
  },
  {
    title: "Media & Public",
    icon: "/images/media.png",
    link: "/courses/media",
  },
  {
    title: "Finance",
    icon: "/images/media.png",
    link: "/courses/finance",
  },
  {
    title: "Health & Safety",
    icon: "/images/environment.png",
    link: "/courses/health",
  },
  {
    title: "IT & Digital",
    icon: "/images/media.png",
    link: "/courses/it",
  },
  {
    title: "Leadership",
    icon: "/images/environment.png",
    link: "/courses/leadership",
  },
  {
    title: "HR & Training",
    icon: "/images/environment.png",
    link: "/courses/hr",
  },
];

export default function CourseCategories() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 font-['Plus_Jakarta_Sans'] flex flex-col justify-center">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#073B53] mb-4">
          Course Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Advancing employee skills and driving business growth through tailored
          training programs for companies worldwide.
        </p>
      </div>

      {/* Grid with vertical divider */}
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Divider in center for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={'/course?category=${cat.slug'}
              className="bg-[#25B0F012] p-6 rounded-lg shadow-sm hover:shadow-md transition flex items-center gap-4 group h-full"
            >
              <Image
                src={cat.icon}
                alt={cat.title}
                width={60}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#073B53] group-hover:underline">
                  {cat.title}
                </h3>
                <span className="text-sm text-[#25B0F0] mt-1 underline">
                  View Categories
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center mt-8">
        <Link
          href="/courses"
          className="text-[#25B0F0] text-sm underline font-medium float-right"
        >
          All Courses
        </Link>
      </div>
    </section>
  );
}
