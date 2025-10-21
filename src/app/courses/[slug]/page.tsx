"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Course = {
  title: string;
  slug: string;
  schedule: { date: string; venue: string; price: string }[];
  summary: string;
  learningOutcomes: string[];
  whoShouldAttend: string[];
  modules: string[];
};

type RelatedCourse = {
  title: string;
  dates: string[];
  venue: string;
  price: string;
};

type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const tabs = ["Summary", "Learning Outcomes", "Who Should Attend", "Course Modules"];

export default function CourseDetailPage() {
  const { slug } = useParams();

  // ------------------- Hooks -------------------
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState("Summary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [articleIndex, setArticleIndex] = useState(0);

  // ------------------- Related Courses -------------------
  const relatedCourses: RelatedCourse[] = [
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
  ];

  // ------------------- Fetch Course -------------------
  useEffect(() => {
    async function fetchCourse() {
      const res = await fetch(`/api/courses/${slug}`);
      const data = await res.json();
      setCourse(data);
    }
    fetchCourse();
  }, [slug]);

  // ------------------- Fetch Articles -------------------
  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  // ------------------- Sliders -------------------
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? relatedCourses.length - 3 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev >= relatedCourses.length - 3 ? 0 : prev + 1));

  const prevArticle = () =>
    setArticleIndex((prev) => (prev === 0 ? articles.length - 3 : prev - 1));
  const nextArticle = () =>
    setArticleIndex((prev) => (prev >= articles.length - 3 ? 0 : prev + 1));

  // ------------------- Loading -------------------
  if (!course) return <p className="text-center py-10">Loading...</p>;

  return (
    <main className="w-full">
     {/* Hero Section */}
<section className="relative w-full bg-white overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-6 px-6 py-16">
    {/* Left Text Content */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-[#073B53]">
        Latest <br /> Healthcare & <br /> Management Blogs
      </h1>
      <p className="mt-4 text-gray-600 max-w-md">
        Explore expert insights, professional tips, and the latest industry updates 
        to help you grow in your healthcare and management career.
      </p>
    </div>

    {/* Right Info Card */}
    <div className="flex justify-center md:justify-end">
      <div className="bg-[#073B53] text-white rounded-xl shadow-xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Featured Article
        </h3>
        <p className="mb-2">
          <span className="font-medium">Title:</span>{" "}
          “Top Healthcare Management Trends in 2025”
        </p>
        <p className="mb-2">
          <span className="font-medium">Category:</span> Healthcare
        </p>
        <p className="mb-4">
          <span className="font-medium">Author:</span> Dr. Sarah Ahmed
        </p>
        <Link
          href="/blog/healthcare-trends-2025"
          className="w-full inline-block text-center bg-white text-blue-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Read Now
        </Link>
      </div>
    </div>
  </div>

</section>

      {/* Schedule */}
      <div className="max-w-7xl mx-auto px-6 py-15">
        <div className="bg-slate-100 rounded-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              Project Management
            </h2>
            <Link
              href="/registration"
              className="px-5 py-2 rounded-md bg-[#073B53] text-white font-semibold shadow-sm hover:bg-[#0b6f86]"
            >
              Register
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
              <thead>
                <tr className="bg-[#073B53] text-white">
                  <th className="px-6 py-4 text-sm">Available Dates</th>
                  <th className="px-6 py-4 text-sm">Venue</th>
                  <th className="px-6 py-4 text-sm">Price</th>
                  <th className="px-6 py-4 text-sm text-center">Select</th>
                </tr>
              </thead>
              <tbody>
                {course.schedule.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#073B5321]"
                    } text-sm hover:bg-[#B9D6F233] transition`}
                  >
                    <td className="px-6 py-4 border-t border-[#457B9D33]">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 border-t border-[#457B9D33]">
                      {row.venue}
                    </td>
                    <td className="px-6 py-4 border-t border-[#457B9D33]">
                      {row.price}
                    </td>
                    <td className="px-6 py-4 border-t border-[#457B9D33] text-center">
                      <input
                        type="radio"
                        name="select-schedule"
                        className="w-4 h-4 text-[#073B53] accent-[#073B53]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-8 min-w-[140px] text-sm font-semibold rounded-md border transition-all duration-200
          ${
            activeTab === tab
              ? "bg-[#457B9DDE] text-white border-[#073B53]"
              : "bg-[#073B53] text-white border-[#457B9D33] hover:bg-[#457B9DDE]"
          }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 rounded-md shadow-md p-20 mb-10 mx-14 ">
        {activeTab === "Summary" && (
          <div className="text-slate-700 leading-relaxed">
            <p>{course.summary}</p>
          </div>
        )}

        {activeTab === "Learning Outcomes" && (
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {course.learningOutcomes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "Who Should Attend" && (
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {course.whoShouldAttend.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "Course Modules" && (
          <div className="text-slate-700">
            <p className="mb-4 font-medium">
              The course is structured into the following modules:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              {course.modules.map((mod, idx) => (
                <li key={idx}>
                  <p className="font-semibold">{mod}</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-slate-600">
                    <li>Overview and key concepts related to the module.</li>
                    <li>Practical examples and application in the workplace.</li>
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <Link 
            href="/registration"

 className="px-5 py-2 rounded-md bg-[#073B53] text-white font-semibold shadow-sm hover:bg-[#0b6f86]">
            Register
</Link>
        </div>
      </div>

{/* Related Courses Slider */}
<section className="mb-16 m-8 relative px-7">
  <h3 className="text-4xl font-bold m-8 p-6 text-[#073B53]">Related Courses</h3>

  <div className="relative">
    {/* Slides wrapper */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          width: `${(relatedCourses.length / 3) * 100}%`,
        }}
      >
        {relatedCourses.map((rc, i) => (
          <div
            key={i}
            className="w-1/3 px-3 flex-shrink-0"
          >
            <div className="bg-white border border-[#457B9D33] rounded-lg shadow-sm flex flex-col">
              {/* Card Header */}
              <div className="bg-[#457B9D1C] text-center py-5 rounded-t-lg">
                <h4 className="font-semibold text-lg">{rc.title}</h4>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Available Dates:
                  </label>
                  <select className="w-full  border- rounded-md text-sm p-2">
                    {rc.dates.map((d, idx) => (
                      <option key={idx}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-[#457B9D33]">
                <span className="bg-[#457B9D33] px-3 py-1 rounded text-sm">
                  {rc.venue}
                </span>
                <span className="font-medium text-sm">{rc.price}</span>

<Link
  href="/registration"
  className="px-3 py-1.5 rounded-md bg-gradient-to-r from-[#2b98c6] to-[#0b66a1] text-white text-xs inline-block text-center"
>
  Register
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Arrows */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/images/sliderleft.png"
        alt="Previous"
        width={36}
        height={36}
      />
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/images/slideright.png"
        alt="Next"
        width={36}
        height={36}
      />
    </button>
  </div>
</section>
{/* Articles Slider Section */}
<section className="mb-16 relative px-6">
  <h3 className="text-4xl font-bold m-8 p-6 ">Read Related Articles</h3>

  <div className="relative">
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${articleIndex * (100 / 3)}%)`,
        }}
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="min-w-full sm:min-w-[33.33%] px-3 flex justify-center"
          >
            <div className="bg-white border border-[#457B9D33] rounded-lg shadow-sm flex flex-col w-full max-w-sm">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <a
                  href={article.link}
                  className="text-[#073B53] font-semibold hover:text-[#457B9D]"
                >
                  {article.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Arrows */}
    <button
      onClick={prevArticle}
      className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/images/sliderleft.png"
        alt="Previous"
        width={36}
        height={36}
      />
    </button>
    <button
      onClick={nextArticle}
      className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/images/slideright.png"
        alt="Next"
        width={36}
        height={36}
      />
    </button>
  </div>
</section>

    </main>
  );
}
