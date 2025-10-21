"use client";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Project Management Courses",
    date: "02-05-25",
    location: "London",
    price: "$2,500",
    image: "/images/course4.png",
  },
  {
    id: 2,
    title: "Finance Basics",
    date: "12-06-25",
    location: "Dubai",
    price: "$1,800",
    image: "/images/course4.png",
  },
  {
    id: 3,
    title: "Medical Training",
    date: "20-07-25",
    location: "Online",
    price: "$3,200",
    image: "/images/course4.png",
  },
  {
    id: 4,
    title: "Leadership Essentials",
    date: "05-08-25",
    location: "London",
    price: "$2,000",
    image: "/images/course4.png",
  },
  {
    id: 5,
    title: "Business Analytics",
    date: "15-09-25",
    location: "Dubai",
    price: "$2,200",
    image: "/images/course4.png",
  },
  {
    id: 6,
    title: "Healthcare Management",
    date: "25-09-25",
    location: "Online",
    price: "$3,500",
    image: "/images/course4.png",
  },
];

export default function LatestCourses() {
  return (
    <section
      className="py-18 px-10 relative overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#457B9D1A" }}
    >
      {/* SVG background with closer lines */}
      <svg
        className="absolute top-0 bottom-30 left-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 400"
      >
        <path
          d="M0,80 C200,150 400,50 800,80"
          fill="none"
          stroke="#457B9D"
          strokeWidth="1"
        />
        <path
          d="M0,160 C300,230 500,120 800,160"
          fill="none"
          stroke="#457B9D"
          strokeWidth="1"
        />
        <path
          d="M0,240 C400,310 600,190 800,240"
          fill="none"
          stroke="#457B9D"
          strokeWidth="1"
        />
        <path
          d="M0,320 C500,390 700,260 800,320"
          fill="none"
          stroke="#457B9D"
          strokeWidth="1"
        />
      </svg>

      <h2 className="relative text-[#073B53] text-2xl font-bold mb-6 z-10">
        Latest Courses
      </h2>

      {/* Scrollable Cards */}
      <div
        className="relative flex gap-4 overflow-x-auto pb-4 z-10 scrollbar-thin 
        scrollbar-thumb-[#073B53]/60 scrollbar-track-gray-200 snap-x snap-mandatory"
      >
        {courses.map((course) => (
          <div key={course.id} className="snap-start">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
