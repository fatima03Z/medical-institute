"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Course {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  price: number;
}

const CourseListContent = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("list");

  const itemsPerPage = 6;

  useEffect(() => {
    const locations = [
      "London", "Dubai", "New York", "Paris",
      "Berlin", "Toronto", "Sydney", "Tokyo"
    ];

    const dummyCourses: Course[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: i % 2 === 0 ? "Project Management" : "Leadership Development",
      category: i % 2 === 0 ? "project-management" : "leadership-development",
      date: `2024-${String((i % 12) + 1).padStart(2, "0")}-15`,
      location: locations[i % locations.length],
      price: i % 2 === 0 ? 5000 : 6000,
    }));

    setCourses(dummyCourses);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedDate, selectedLocation, selectedCategory]);

  const filteredCourses = courses.filter((course) => {
    return (
      (!selectedCategory || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedDate ? course.date === selectedDate : true) &&
      (selectedLocation ? course.location === selectedLocation : true)
    );
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full max-w-5xl mx-auto p-6 bg-[#457B9D33] mt-8 rounded-lg">
      {/* Header */}
      <div className="p-6 rounded-t-lg">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#073B53] capitalize">
          {selectedCategory
            ? `${selectedCategory.replace("-", " ")} Courses`
            : "List of Management Courses"}
        </h2>
      </div>

      {/* Search */}
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/3 lg:w-1/2 border border-gray-300 px-4 py-2 rounded-md shadow-md focus:ring-2 focus:ring-[#25B0F0] outline-none text-[#073B53] bg-white"
        />
      </div>

      {/* Course List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-[#457B9D33] rounded-md p-4 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg text-[#073B53] border-b pb-2 mb-3">
                  {course.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-[#073B53]">
                  <div>
                    <span className="font-semibold block">Available Date:</span>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <span className="font-semibold block">Location:</span>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    >
                      <option value="">All</option>
                      {["London", "Dubai", "New York", "Paris", "Berlin", "Toronto", "Sydney", "Tokyo"].map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <p className="self-end">
                    <span className="font-semibold">Price:</span> ${course.price}
                  </p>
                </div>

                {/* Updated Detail Page Link (slug instead of ID) */}
                <a
                  href={`/courses/${course.category}`}
                  className="text-sm text-[#25B0F0] underline mt-2 inline-block"
                >
                  View Details
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No courses found</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-[#25B0F0] text-white"
                    : "bg-white text-[#073B53]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const CourseList = () => (
  <Suspense fallback={<p className="text-center">Loading...</p>}>
    <CourseListContent />
  </Suspense>
);

export default CourseList;
