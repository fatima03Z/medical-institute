"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or want to know more? Reach out — we’d love to hear from you!
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Or email us directly at{" "}
          <Link
            href="mailto:info@yourdomain.com"
            className="text-blue-600 hover:underline"
          >
            info@yourdomain.com
          </Link>
        </p>
      </div>
    </section>
  );
}
