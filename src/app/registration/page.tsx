"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [tab, setTab] = useState<"person" | "company">("person");
  const [form, setForm] = useState<any>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 🔹 Replace this with your API route
      // Example: await fetch("/api/register", { method: "POST", body: JSON.stringify(form) });
      console.log("Submitted:", form);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="border-[#25B0F0] px-6 py-4 bg-gradient-to-r from-[#1988BC] to-[#073B53] text-white">
          <h2 className="text-2xl font-semibold">Registration Form</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 py-4 border-b">
          <button
            onClick={() => setTab("person")}
            className={`px-6 py-2 rounded-md font-medium ${
              tab === "person" ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Person
          </button>
          <button
            onClick={() => setTab("company")}
            className={`px-6 py-2 rounded-md font-medium ${
              tab === "company" ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Company
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person Fields */}
          {tab === "person" && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact No."
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
            </>
          )}

          {/* Company Fields */}
          {tab === "company" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
                required
              />
              <input
                type="text"
                name="companyEmail"
                placeholder="Company Email"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
                required
              />
              <input
                type="text"
                name="companyPhone"
                placeholder="Company Phone"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
              <input
                type="text"
                name="companyAddress"
                placeholder="Company Address"
                onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
              />
            </>
          )}

          {/* Common Fields */}
          <select
            name="category"
            onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
          >
            <option>Management</option>
            <option>Environment</option>
            <option>Finance</option>
          </select>

          <select
            name="location"
            onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
          >
            <option>London</option>
            <option>New York</option>
            <option>Dubai</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
          />

          <select
            name="duration"
            onChange={handleChange}
className="bg-gray-50 border-[#25B0F0] rounded-md px-4 py-2 shadow-md focus:ring-2 focus:ring-[#1988BC] focus:bg-white"
          >
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
          </select>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1988BC] to-[#073B53] text-white px-8 py-2 rounded-md shadow hover:opacity-90 transition"
            >
              Register
            </button>
          </div>
        </form>

        {/* Notifications */}
        {status === "success" && (
          <p className="text-green-600 text-center py-2">✅ Registration successful!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center py-2">❌ Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
}
