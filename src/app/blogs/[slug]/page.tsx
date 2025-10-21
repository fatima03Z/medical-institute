import Image from "next/image";

const blogs = {
  "healthcare-trends-2025": {
    title: "Top Healthcare Management Trends in 2025",
    img: "/images/blog1.jpg",
    content: `
      The year 2025 brings revolutionary changes in healthcare management.
      With the rise of digital health, AI-based diagnostics, and telemedicine,
      healthcare systems are becoming more efficient and patient-centric.
      Hospitals now rely on data-driven insights to improve treatment outcomes.
    `,
  },
  "leadership-in-medicine": {
    title: "Leadership in Modern Medicine",
    img: "/images/doctor-2568481_1280.jpg",
    content: `
      Leadership in medicine is no longer just about seniority.
      It’s about teamwork, empathy, and continuous improvement.
      Doctors and healthcare managers must balance clinical expertise
      with strong interpersonal and decision-making skills.
    `,
  },
  "digital-healthcare": {
    title: "Digital Transformation in Healthcare",
    img: "/images/blog3.jpg",
    content: `
      Digital tools are transforming healthcare delivery.
      From remote monitoring to AI-driven diagnostics,
      technology is helping reduce human error and improve accessibility.
    `,
  },
};

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug as keyof typeof blogs];

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Blog not found 😢
      </div>
    );
  }

  return (
    <section className="font-['Plus_Jakarta_Sans'] bg-white">
      <div className="relative w-full h-[50vh]">
        <Image src={blog.img} alt={blog.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-gray-700 leading-relaxed text-justify">
        {blog.content}
      </div>
    </section>
  );
}
