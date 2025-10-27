"use client";
import Image from "next/image";
import Link from "next/link";
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
    <section className="relative w-full min-h-screen flex items-center justify-center font-['Plus_Jakarta_Sans']">
      <Image
        src="/images/herobg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full bg-gradient-to-b from-[#25B0F0]/40 via-[#1988BC]/40 to-[#073B53]/40 clip-path-curve" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 gap-10 md:gap-0">
        {/* Text Left */}
        <div className="text-white max-w-lg z-10 text-center md:text-left mt-20 md:mt-0">
          <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
            Welcome to <br /> Medical Website <br /> Excellence Academy
          </h1>

          {/* ✅ Link added */}
          <Link href="/courses">
            <button className="bg-[#25B0F0] px-6 py-3 rounded-full font-semibold hover:bg-[#1988BC] transition w-full sm:w-auto">
              EXPLORE MEDICAL TRAINING COURSES
            </button>
          </Link>
        </div>

        {/* Search Right */}
        <div className="w-full max-w-lg z-10 text-white bg-black/20 backdrop-blur-md p-4 sm:p-6 rounded-lg">
          <h3 className="font-bold text-xl sm:text-2xl mb-6 text-center">
            Search Training Courses
          </h3>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in specific course"
            className="w-full bg-white px-3 py-2 rounded-md mb-3 text-black focus:ring-2 focus:ring-[#25B0F0]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* Dropdowns (unchanged UI, just fixed responsive spacing) */}
            {[
              { type: "category", list: categories, value: category, set: setCategory },
              { type: "venue", list: venues, value: venue, set: setVenue },
              { type: "duration", list: durations, value: duration, set: setDuration },
              { type: "month", list: months, value: month, set: setMonth },
            ].map((dropdown, index) => (
              <div className="relative" key={index}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === dropdown.type ? null : dropdown.type as DropdownType)
                  }
                  className="w-full flex justify-between items-center px-4 py-2 rounded-md bg-white text-black"
                >
                  {dropdown.value}
                  <img src="/images/dropdown.png" alt="▼" className="w-4 h-4 ml-2" />
                </button>

                {openDropdown === dropdown.type && (
                  <ul className="absolute bg-white mt-1 rounded-md shadow-lg w-full z-20 text-black max-h-40 overflow-y-auto">
                    {dropdown.list.map((item, i) => (
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

          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() =>
                alert(`Searching: ${search}, ${category}, ${venue}, ${duration}, ${month}`)
              }
              className="flex justify-center items-center gap-2 w-[120px] bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white py-3 rounded-4xl font-semibold hover:opacity-90 transition"
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
