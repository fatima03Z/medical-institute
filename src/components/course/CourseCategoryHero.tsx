"use client";
import { useState } from "react";
import Image from "next/image";

interface CourseCategoryHeroProps {
  title?: string;
  categories?: string[];
  venues?: string[];
  durations?: string[];
  months?: string[];
}

export default function CourseCategoryHero({
  title = "Management and Leadership Courses",
  categories = ["Management", "Finance", "Medical"],
  venues = ["London", "Dubai", "Online"],
  durations = ["1 Week", "2 Weeks", "1 Month"],
  months = ["January", "March", "June"],
}: CourseCategoryHeroProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Category");
  const [venue, setVenue] = useState("Venue");
  const [duration, setDuration] = useState("Duration");
  const [month, setMonth] = useState("Month");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [first, second] = title.split("and");

  const handleSearch = () => {
    alert(
      `Searching for:\nCourse: ${search}\nCategory: ${category}\nVenue: ${venue}\nDuration: ${duration}\nMonth: ${month}`
    );
  };

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center font-['Plus_Jakarta_Sans'] overflow-hidden bg-white">
      {/* ✅ Background Image */}
      <Image
        src="/images/herobg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-30 -z-10"
      />

      {/* ✅ Gradient Overlay with Right-Side Curve */}
      <svg
        className="absolute right-0 top-0 h-full w-[60%] hidden md:block"
        viewBox="0 0 500 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="categoryHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#25B0F0" />
            <stop offset="0.5" stopColor="#1988BC" />
            <stop offset="1" stopColor="#073B53" />
          </linearGradient>
        </defs>
        <path
          d="M500,0 C250,200 300,600 0,800 L0,0 Z"
          fill="url(#categoryHeroGradient)"
          transform="scale(-1,1) translate(-500,0)"
        />
      </svg>

      {/* ✅ Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 py-12">
        {/* Left Text */}
        <div className="max-w-lg mb-10 md:mb-0 text-center md:text-left text-[#073B53]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {first} <br /> and{second}
          </h1>
          <p className="text-gray-700 text-base md:text-lg mt-4">
            Explore professional programs designed for leaders and healthcare experts
            seeking to advance their careers globally.
          </p>
        </div>

        {/* Right Search Card */}
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl p-6">
          <h3 className="font-bold text-xl sm:text-2xl mb-6 text-center text-[#073B53]">
            Search Training Courses
          </h3>

          {/* Search Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in specific course"
            className="w-full border border-gray-300 px-4 py-2 rounded-md mb-3 text-black focus:ring-2 focus:ring-[#25B0F0] focus:outline-none"
          />

          {/* Dropdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { label: "category", value: category, options: categories, setter: setCategory },
              { label: "venue", value: venue, options: venues, setter: setVenue },
              { label: "duration", value: duration, options: durations, setter: setDuration },
              { label: "month", value: month, options: months, setter: setMonth },
            ].map(({ label, value, options, setter }) => (
              <div key={label} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === label ? null : label)
                  }
                  className="w-full flex justify-between items-center px-4 py-2 rounded-md bg-gray-50 border border-gray-300 text-black focus:outline-none"
                >
                  {value}
                  <span>▼</span>
                </button>
                {openDropdown === label && (
                  <ul className="absolute bg-white mt-1 rounded-md shadow-lg w-full z-20 text-black">
                    {options.map((opt, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          setter(opt);
                          setOpenDropdown(null);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="flex justify-center items-center gap-2 w-[130px] bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              <Image
                src="/images/arrow-right.png"
                alt="Search"
                width={30}
                height={18}
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
