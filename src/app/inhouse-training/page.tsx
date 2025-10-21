"use client";
import Image from "next/image";
import Link from "next/link";

export default function InHouseTrainingPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-[#EAF7FF] to-[#ffffff]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#076cbe] to-[#1094d1] text-white overflow-hidden">
        <Image
          src="/images/computer-2788918_1280.jpg"
          alt="In-House Training Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            In-House Training Programs
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-lg leading-relaxed">
            Empower your healthcare and management teams with customized
            professional training — designed to inspire, educate, and perform.
          </p>
        </div>
      </div>

      {/* Training Categories */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Leadership & Management Skills",
            desc: "Develop leadership and communication skills that create high-performing teams and improve overall outcomes.",
            img: "/images/job-5382501_1280.jpg",
          },
          {
            title: "Healthcare Quality Improvement",
            desc: "Train your workforce to improve patient safety, optimize operations, and implement quality frameworks.",
            img: "/images/doctor-2568481_1280.jpg",
          },
          {
            title: "Patient Safety & Risk Management",
            desc: "Learn risk identification, safety protocols, and compliance standards for safer healthcare delivery.",
            img: "/images/doctor-563429_1280.jpg",
          },
          {
            title: "Communication & Team Collaboration",
            desc: "Strengthen your team’s collaboration, conflict resolution, and cross-department communication skills.",
            img: "/images/team-5842784_640.jpg",
          },
          {
            title: "Health Informatics & Data Skills",
            desc: "Leverage health data, EHR systems, and analytics to drive data-informed decision-making.",
            img: "/images/meeting-4784909_640.jpg",
          },
          {
            title: "Customized Corporate Workshops",
            desc: "Tailor-made programs built to meet your organization’s unique training and performance needs.",
            img: "/images/engineer-4925135_1280.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-[220px] overflow-hidden rounded-t-3xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#03467c] mb-3 group-hover:text-[#25B0F0] transition">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link
                href="/apply"
                className="inline-block bg-[#25B0F0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1988BC] transition duration-300"
              >
                Request Training
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-repeat"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Bring the Training to Your Workplace
          </h3>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Let us design and deliver training programs that match your
            organization’s mission, culture, and professional growth goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#03467c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
