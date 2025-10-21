"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="font-['Plus_Jakarta_Sans']">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-[#073B53] text-white">
        <Image
          src="/images/herobg.png"
          alt="About Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About London Medical Excellence Academy
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Empowering healthcare professionals worldwide with innovative and accredited
            training programs to shape the future of medical excellence.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[#073B53] text-2xl md:text-3xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <strong>London Medical Excellence Academy</strong>, we specialize in delivering
            world-class training programs designed for professionals in the healthcare, management,
            and leadership sectors. Our mission is to bridge the gap between theoretical knowledge
            and real-world expertise.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a presence in over 30 countries, we are proud to be among the top providers of
            specialized professional education. Our courses are accredited, flexible, and taught by
            global experts to ensure your success.
          </p>

          <Link
            href="/courses"
            className="inline-block bg-[#25B0F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1988BC] transition"
          >
            Explore Our Courses
          </Link>
        </div>

        <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/executive-3461929_1280.jpg"
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-[#25B0F012] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#073B53] text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver impactful training that empowers professionals to lead with
              confidence and make informed decisions in the medical and business sectors.
            </p>
          </div>
          <div>
            <h3 className="text-[#073B53] text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the world’s most trusted and recognized provider of professional medical and
              management training — inspiring continuous learning and innovation globally.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-[#073B53] text-center mb-10">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/images/employees-885338_1280.jpg"
              alt="Expert Trainers"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#073B53] mb-2">Expert Trainers</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn from industry experts and certified trainers with years of practical experience.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/images/employees-885338_1280.jpg"
              alt="Global Access"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#073B53] mb-2">Global Access</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access our training courses in major global cities and online — learn anytime,
              anywhere.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/images/employees-885338_1280.jpg"
              alt="Certified Programs"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-[#073B53] mb-2">
              Certified Programs
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Earn globally recognized certifications that enhance your career and credibility.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#03467c] to-[#1094d1] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Advance Your Career?
        </h3>
        <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Join thousands of professionals who have transformed their future through our accredited
          courses and world-class training programs.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#073B53] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
