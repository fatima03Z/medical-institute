"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
};

const CourseCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    // Dummy data (replace with API later)
    const data: Category[] = [
      { id: 1, name: "Project Management Courses", slug: "project-management" },
      { id: 2, name: "Leadership Development", slug: "leadership-development" },
      { id: 3, name: "Business Strategy", slug: "business-strategy" },
      { id: 4, name: "HR Management", slug: "hr-management" },
      { id: 5, name: "Marketing Management", slug: "marketing-management" },
      { id: 6, name: "Finance for Managers", slug: "finance-for-managers" },
      { id: 7, name: "Operations Management", slug: "operations-management" },
      { id: 8, name: "Supply Chain Management", slug: "supply-chain" },
      { id: 9, name: "Risk Management", slug: "risk-management" },
      { id: 10, name: "Time Management", slug: "time-management" },
      { id: 11, name: "Organizational Behavior", slug: "organizational-behavior" },
      { id: 12, name: "Change Management", slug: "change-management" },
    ];
    setCategories(data);
  }, []);

  // Filter + Pagination
  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-[#073B53] mb-6">
        List of Management Sub-categories
      </h2>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search a sub-category"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full  rounded-md px-4 py-2 "
        />
      </div>

      {/* Table */}
<div className="overflow-x-auto shadow-lg rounded-md">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-[#073B53] text-white text-left">
        <th className="px-6 py-3 font-semibold">Category</th>
        <th className="px-6 py-3 font-semibold text-right">Action</th>
      </tr>
    </thead>
    <tbody>
      {paginated.map((cat, index) => (
        <tr
          key={cat.id}
          className={`border-[#073B53] transition hover:bg-gray-100 ${
            index % 2 === 0 ? "bg-white" : "bg-[#073B5321]"
          }`}
        >
          <td className="px-6 py-4 font-medium text-[#073B53]">
            {cat.name}
          </td>
          <td className="px-6 py-4 text-right">
            <Link
              href={`/courses?list=${cat.slug}`}
              className="bg-[#073B53] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View Courses
            </Link>
          </td>
        </tr>
      ))}
      {paginated.length === 0 && (
        <tr>
          <td colSpan={2} className="px-6 py-4 text-center text-gray-500">
            No categories found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
