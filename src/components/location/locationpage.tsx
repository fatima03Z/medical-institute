"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
  location: string;
};

const LocationPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const data: Category[] = [
      { id: 1, name: "Project Management Courses", slug: "project-management", location: "London" },
      { id: 2, name: "Leadership Development", slug: "leadership-development", location: "New York" },
      { id: 3, name: "Business Strategy", slug: "business-strategy", location: "Dubai" },
      { id: 4, name: "HR Management", slug: "hr-management", location: "London" },
      { id: 5, name: "Finance for Managers", slug: "finance-for-managers", location: "London" },
      { id: 6, name: "Operations Management", slug: "operations-management", location: "New York" },
      { id: 7, name: "Marketing Management", slug: "marketing-management", location: "Dubai" },
      { id: 8, name: "Supply Chain Management", slug: "supply-chain", location: "London" },
      { id: 9, name: "Risk Management", slug: "risk-management", location: "London" },
      { id: 10, name: "Time Management", slug: "time-management", location: "New York" },
    ];
    setCategories(data);
  }, []);

  // Aggregate cities and count courses
  const citiesMap = categories.reduce((acc: Record<string, number>, cat) => {
    acc[cat.location] = (acc[cat.location] || 0) + 1;
    return acc;
  }, {});

  const cities = Object.entries(citiesMap); // [ [city, count], ...]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center text-[#073B53] mb-6">
        Cities with Courses
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#073B53] text-white text-left">
              <th className="px-6 py-3 font-semibold">City</th>
              <th className="px-6 py-3 font-semibold text-center">Courses Available</th>
              <th className="px-6 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(([city, count], index) => (
              <tr
                key={city}
                className={`border-[#073B53] transition hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#073B5321]"
                }`}
              >
                <td className="px-6 py-4 font-medium text-[#073B53]">{city}</td>
                <td className="px-6 py-4 text-center font-medium text-[#073B53]">{count}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/courses/location/${city}`}
                    className="bg-[#073B53] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Courses
                  </Link>
                </td>
              </tr>
            ))}
            {cities.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No cities available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocationPage;
