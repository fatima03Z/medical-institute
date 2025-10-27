"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// ✅ Disable prerender and build failures
export const dynamic = "force-dynamic";

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

function CourseContent() {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState("Summary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [articleIndex, setArticleIndex] = useState(0);

  const relatedCourses: RelatedCourse[] = [
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
    { title: "Project Management", dates: ["02/02/25", "03/03/25"], venue: "London", price: "$2000" },
  ];

  useEffect(() => {
    async function fetchCourse() {
      const res = await fetch(`/api/courses/${slug}`);
      const data = await res.json();
      setCourse(data);
    }
    fetchCourse();
  }, [slug]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? relatedCourses.length - 3 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev >= relatedCourses.length - 3 ? 0 : prev + 1));

  const prevArticle = () =>
    setArticleIndex((prev) => (prev === 0 ? articles.length - 3 : prev - 1));
  const nextArticle = () =>
    setArticleIndex((prev) => (prev >= articles.length - 3 ? 0 : prev + 1));

  if (!course) return <p className="text-center py-16 text-lg">Loading course details...</p>;

  return (
    <main className="w-full">

      {/* ✅ Title Now Dynamic */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#073B53]">{course.title}</h1>
        </div>
      </section>

      {/* ✅ Schedule */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-slate-100 rounded-md p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              Course Schedule
            </h2>
            <Link
              href="/registration"
              className="px-5 py-2 rounded-md bg-[#073B53] text-white font-semibold shadow-sm hover:bg-[#0b6f86]"
            >
              Register
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#073B53] text-white">
                  <th className="px-6 py-3 text-sm">Available Dates</th>
                  <th className="px-6 py-3 text-sm">Venue</th>
                  <th className="px-6 py-3 text-sm">Price</th>
                  <th className="px-6 py-3 text-sm text-center">Select</th>
                </tr>
              </thead>

              <tbody>
                {course.schedule.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#073B5314]"}
                  >
                    <td className="px-6 py-3">{row.date}</td>
                    <td className="px-6 py-3">{row.venue}</td>
                    <td className="px-6 py-3">{row.price}</td>
                    <td className="px-6 py-3 text-center">
                      <input type="radio" name="select-schedule" className="accent-[#073B53]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-semibold rounded-md transition ${
              activeTab === tab
                ? "bg-[#073B53] text-white"
                : "bg-white text-[#073B53] border border-[#073B53] hover:bg-[#073B53] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-md shadow-md p-10 mb-12">
        {activeTab === "Summary" && <p>{course.summary}</p>}
        {activeTab === "Learning Outcomes" && (
          <ul className="list-disc pl-6 space-y-2">{course.learningOutcomes.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
        )}
        {activeTab === "Who Should Attend" && (
          <ul className="list-disc pl-6 space-y-2">{course.whoShouldAttend.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
        )}
        {activeTab === "Course Modules" && (
          <ol className="list-decimal pl-6 space-y-4">{course.modules.map((m, idx) => <li key={idx} className="font-medium">{m}</li>)}</ol>
        )}

        <div className="flex justify-end mt-6">
          <Link href="/registration" className="bg-[#073B53] text-white px-6 py-2 rounded-md">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

// ✅ Suspense wrapper fixes server prerendering
export default function PageWrapper() {
  return (
    <Suspense fallback={<p className="text-center py-16 text-lg">Loading course...</p>}>
      <CourseContent />
    </Suspense>
  );
}
