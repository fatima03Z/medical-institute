"use client";
import Image from "next/image";
import Link from "next/link";

export default function JobsPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#03467c] to-[#1094d1] text-white">
        <Image
          src="/images/jobs-bg.png"
          alt="Jobs Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Career Opportunities
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Join a passionate team dedicated to transforming education and healthcare training across the world.
          </p>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#073B53] mb-10 text-center">
          Current Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Frontend Developer (React.js)",
              dept: "IT Department",
              type: "Full-time | On-site",
              desc: "We’re seeking a creative frontend developer with strong React.js skills to build and maintain modern, responsive web applications.",
              location: "Karachi, Pakistan",
              img: "/images/job-2860035_1280.jpg",
            },
            {
              title: "Medical Course Instructor",
              dept: "Academic Department",
              type: "Part-time | Remote",
              desc: "Join our faculty to teach medical-related diploma and certificate programs. Prior teaching or healthcare experience preferred.",
              location: "Lahore, Pakistan",
              img: "/images/teacher-5499177_960_720.jpg",
            },
            {
              title: "Graphic Designer",
              dept: "Marketing Department",
              type: "Full-time | On-site",
              desc: "Looking for a creative designer experienced in Canva, Photoshop, and branding for educational campaigns.",
              location: "Islamabad, Pakistan",
              img: "/images/workplace-2230698_1280.jpg",
            },
            {
              title: "Admission Officer",
              dept: "Administration",
              type: "Full-time | On-site",
              desc: "Responsible for handling student admissions, queries, and enrollment follow-ups with excellent communication skills.",
              location: "Karachi, Pakistan",
              img: "/images/entrepreneur-2326419_1280.jpg",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >
              <div className="relative h-[200px]">
                <Image
                  src={job.img}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#073B53] mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">🏢 {job.dept}</p>
                <p className="text-sm text-gray-600 mb-1">📍 {job.location}</p>
                <p className="text-sm text-gray-600 mb-3">⏰ {job.type}</p>
                <p className="text-gray-700 text-sm mb-4">{job.desc}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#25B0F0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1988BC] transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Build Your Future With Us
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          We’re always on the lookout for talented professionals who want to make a real impact. Send your resume and become part of our growing team.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#073B53] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Send Resume
        </Link>
      </div>
    </section>
  );
}
