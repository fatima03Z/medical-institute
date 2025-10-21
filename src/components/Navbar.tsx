"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname(); // To detect active link

  const linkClasses = (href: string) =>
    `hover:text-blue-600 transition-colors ${
      pathname === href ? "text-blue-600 font-semibold" : ""
    }`;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Education.jpg"
            alt="London Medical"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 text-[15px] font-medium text-gray-900">
          <li><Link href="/" className={linkClasses("/")}>Home</Link></li>
          <li><Link href="/about" className={linkClasses("/about")}>About</Link></li>

          {/* Courses Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:text-blue-600"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Courses <ChevronDown size={16} />
            </button>
            {openDropdown && (
              <ul className="absolute bg-white shadow-lg p-3 mt-2 rounded-md space-y-2 z-50 text-sm w-max">
                <li><Link href="/courses" className={linkClasses("/courses")}>All Courses</Link></li>
                <li><Link href="/course-category" className={linkClasses("/course-category")}>Course Categories</Link></li>
                <li><Link href="/courses/project-management" className={linkClasses("/courses/project-management")}>Project Management</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/diplomas" className={linkClasses("/diplomas")}>Diplomas</Link></li>
          <li><Link href="/locations" className={linkClasses("/locations")}>Locations</Link></li>
          <li><Link href="/jobs" className={linkClasses("/jobs")}>Jobs</Link></li>
          <li><Link href="/consultation" className={linkClasses("/consultation")}>Consultation</Link></li>
          <li><Link href="/inhouse-training" className={linkClasses("/inhouse-training")}>In-House Training</Link></li>
          <li><Link href="/blogs" className={linkClasses("/blogs")}>Blogs</Link></li>
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block ml-4">
          <Link
            href="/contact"
            className="bg-blue-500 mr-10 text-white px-4 py-2 hover:bg-blue-600 text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     {/* Mobile Menu */}
{mobileMenu && (
  <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-3 text-[15px] font-medium text-gray-800">
    <Link href="/" className={`${linkClasses("/")} block`}>
      Home
    </Link>
    <Link href="/about" className={`${linkClasses("/about")} block`}>
      About
    </Link>

    {/* Mobile Dropdown */}
    <div>
      <button
        className="flex items-center justify-between w-full hover:text-blue-600"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <span>Courses</span>
        <ChevronDown size={16} className={`${openDropdown ? "rotate-180 transition-transform" : ""}`} />
      </button>
      {openDropdown && (
        <ul className="pl-4 mt-2 space-y-2">
          <li>
            <Link href="/courses" className={`${linkClasses("/courses")} block`}>
              All Courses
            </Link>
          </li>
          <li>
            <Link href="/course-category" className={`${linkClasses("/course-category")} block`}>
              Course Categories
            </Link>
          </li>
          <li>
            <Link
              href="/courses/project-management"
              className={`${linkClasses("/courses/project-management")} block`}
            >
              Project Management
            </Link>
          </li>
        </ul>
      )}
    </div>

    <Link href="/diplomas" className={`${linkClasses("/diplomas")} block`}>
      Diplomas
    </Link>
    <Link href="/locations" className={`${linkClasses("/locations")} block`}>
      Locations
    </Link>
    <Link href="/jobs" className={`${linkClasses("/jobs")} block`}>
      Jobs
    </Link>
    <Link href="/consultation" className={`${linkClasses("/consultation")} block`}>
      Consultation
    </Link>
    <Link href="/inhouse-training" className={`${linkClasses("/inhouse-training")} block`}>
      In-House Training
    </Link>
    <Link href="/blogs" className={`${linkClasses("/blogs")} block`}>
      Blogs
    </Link>

    <Link
      href="/contact"
      className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Contact Us
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
