"use client";
import Image from "next/image";
import { useState } from "react";

type DropdownType = "category" | "venue" | "duration" | "month" | null;

const Hero = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Category");
  const [venue, setVenue] = useState("Venue");
  const [duration, setDuration] = useState("Duration");
  const [month, setMonth] = useState("Month");

  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  const categories = ["Management", "Finance", "Medical"];
  const venues = ["London", "Dubai", "Online"];
  const durations = ["1 Week", "2 Weeks", "1 Month"];
  const months = ["January", "March", "June"];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/herobg.png" alt="Hero Background" fill priority className="object-cover" />
      </div>

      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full bg-gradient-to-b from-[#25B0F0]/40 via-[#1988BC]/40 to-[#073B53]/40 md:clip-path-curve" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 py-16">
        
        {/* LEFT SIDE */}
        <div className="text-white max-w-lg text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
            Welcome to <br /> Medical Website <br /> Excellence Academy
          </h1>
          <button className="bg-[#25B0F0] px-6 py-3 rounded-full font-semibold hover:bg-[#1988BC] transition">
            EXPLORE MEDICAL TRAINING COURSES
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-lg text-white backdrop-blur-sm">
          <h3 className="font-bold text-xl sm:text-2xl mb-6 text-center">
            Search Training Courses
          </h3>

          {/* Search Field */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in specific course"
            className="w-full bg-white px-3 py-2 rounded-md mb-3 text-black focus:ring-2 focus:ring-[#25B0F0]"
          />

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            
            {/* Reusable Dropdown Component */}
            {[
              { label: category, set: setCategory, items: categories, id: "category" },
              { label: venue, set: setVenue, items: venues, id: "venue" },
              { label: duration, set: setDuration, items: durations, id: "duration" },
              { label: month, set: setMonth, items: months, id: "month" },
            ].map((dropdown, index) => (
              <div className="relative" key={index}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === dropdown.id ? null : dropdown.id as DropdownType)
                  }
                  className="w-full flex justify-between items-center px-4 py-2 rounded-md bg-white text-black"
                >
                  {dropdown.label}
                  <Image src="/images/dropdown.png" alt="▼" width={14} height={14} />
                </button>

                {openDropdown === dropdown.id && (
                  <ul className="absolute bg-white mt-1 rounded-md shadow-lg w-full z-50 text-black">
                    {dropdown.items.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          dropdown.set(item);
                          setOpenDropdown(null);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Search Button */}
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() =>
                alert(`Searching: ${search}, ${category}, ${venue}, ${duration}, ${month}`)
              }
              className="flex justify-center items-center gap-2 w-[140px] bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              <Image src="/images/arrow-right.png" alt="Search" width={30} height={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
