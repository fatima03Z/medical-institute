"use client";
import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  { name: "MARK WESTERN | MANAGEMENT", text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage." },
  { name: "ANTHONY NORRIS & WILLIAMS | MANAGEMENT", text: "Thank you so much for helping me so much today. I was really impressed with your fast and professional response. Everything is working perfectly, and I couldn’t be happier with the result." },
  { name: "HECTOR OFFICE | MANAGEMENT", text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage." },
  { name: "M. NETTLES | MANAGEMENT", text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage." },
  { name: "KATE MILLARD", text: "I am so happy I decided to move my website to your hosting service. It’s really great how easy your websites are to update and manage. It’s just amazing how much faster and secure everything is now." },
  { name: "STANLEY ENGLAND | MANAGEMENT", text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage." },
  { name: "ZHE CHUAN | MANAGEMENT", text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage." },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(4); // show first 4

  return (
    <section className="w-full bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-12">
        
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Testimonials</h2>

          {/* Rating Card */}
          <div className="bg-[#25B0F0] text-white p-5 rounded-xl shadow-lg inline-flex items-center gap-4 w-fit mb-6">
            <Star className="w-8 h-8 fill-yellow-300 text-yellow-300" />
            <div>
              <p className="text-3xl font-bold leading-none">4.9</p>
              <p className="text-sm">OPINIONS MADE BY OUR CLIENTS</p>
            </div>
          </div>

          {/* View All Button */}
          {visible < testimonials.length && (
            <button
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#073B53] text-white font-semibold text-sm rounded-lg hover:bg-[#052A3B] transition"
              onClick={() => setVisible(testimonials.length)}
            >
              VIEW ALL TESTIMONIALS
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, visible).map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm h-44 overflow-hidden flex flex-col justify-between"
              >
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-5">
                  {item.text}
                </p>
                <span className="text-xs font-semibold text-gray-900 mt-2">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
