import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md min-w-[260px] sm:min-w-[280px] md:min-w-[300px] overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 hidden sm:block">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="text-white font-semibold text-sm">Read More</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative">
        <h4 className="text-base font-semibold mb-2">{course.title}</h4>

        <div className="text-sm text-gray-600">
          <p className="mb-1">Available Date:</p>
          <p className="font-medium mb-3">{course.date}</p>
        </div>

        <div className="flex justify-between items-center text-sm mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded">{course.location}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{course.price}</span>
        </div>

        {/* Register button with link */}
        <div className="flex justify-end">
          <Link
            href="/registration"
            className="px-4 py-2 text-sm bg-gradient-to-r from-[#073B53] via-[#25B0F0] to-[#B9D6F2] text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Bottom Blue Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#25B0F0]"></div>
    </div>
  );
};

export default CourseCard;
