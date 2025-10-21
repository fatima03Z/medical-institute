"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const ArticlesSection = () => {
  const [activeTab, setActiveTab] = useState<"description" | "articles">("description");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "description" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          } rounded-t`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "articles" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          } rounded-t`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
      </div>

      {/* Description Tab */}
      {activeTab === "description" && (
        <div>
          {loading ? (
            <p>Loading article...</p>
          ) : articles.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <h3 className="font-bold text-2xl text-[#073B53] mb-4">{articles[0].title}</h3>
                  <p className="text-gray-700 mb-4">{articles[0].description}</p>
                </div>
                <a
                  href={articles[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-max"
                >
                  Read More
                </a>
              </div>
            </div>
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      )}

      {/* Articles Tab */}
      {activeTab === "articles" && (
        <div className="space-y-6">
          {loading ? (
            <p>Loading articles...</p>
          ) : (
            <>
              {visibleArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>

                  {/* Text */}
                  <div className="p-6 flex flex-col justify-between md:w-2/3">
                    <div>
                      <h3 className="font-bold text-xl text-[#073B53] mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-max"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}

              {/* Load More Button */}
              {visibleCount < articles.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticlesSection;
