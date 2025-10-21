"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Mobile number required"),
  category: z.string().min(2, "Category required"),
  location: z.string().min(2, "Location required"),
});

export default function RequestCourseSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    console.log("Form Submitted:", data);

    // fake delay to simulate API call
    await new Promise((r) => setTimeout(r, 1000));

    setMessage("✅ Your request has been submitted successfully!");
    reset(); // clear form
  };

  return (
    <section className="relative bg-[rgba(19,111,168,0.1)] py-20 bg-[url('/bg-pattern.svg')] bg-no-repeat bg-cover">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <h3 className="text-4xl p-8 font-bold text-[#073B53] mb-2">
            Request a Course
          </h3>

          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-0"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-0"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register("phone")}
            placeholder="Mobile No"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-0"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          <select
            {...register("category")}
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-0"
          >
            <option value="">Select Category</option>
            <option value="Management">Management</option>
            <option value="Medical">Medical</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

          <select
            {...register("location")}
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-0"
          >
            <option value="">Select Location</option>
            <option value="London">London</option>
            <option value="Dubai">Dubai</option>
            <option value="New York">New York</option>
          </select>
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[150px] mx-auto block bg-gradient-to-r from-[#03467c] to-[#06415c] hover:opacity-90 text-white rounded-full py-3 text-sm font-semibold transition"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* ✅ Success Message */}
          {message && (
            <p className="text-green-600 text-center font-medium mt-4">
              {message}
            </p>
          )}
        </form>

        {/* Right Side - Info (Hidden on mobile) */}
        <div className="hidden md:block text-right pl-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#073B53] mb-6 leading-tight">
            Expert Medical <br /> Training Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-md ml-auto">
            Advancing medical skills and driving business growth through tailored training programs for companies worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
