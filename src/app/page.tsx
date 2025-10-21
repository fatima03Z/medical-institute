import Hero from "../components/Hero";
import CourseCategories from "../components/CourseCategories";
import LatestCourses from "../components/LatestCourses"; 
import VenueSlider from "../components/VenueSlider";
import RequestCourseSection from "../components/RequestCourseSection";
import Testimonials from "../components/Testimonials"; // 👈 import it

export default function Home() {
  return (
    <>
      <Hero />
      <CourseCategories />
      <LatestCourses />
      <VenueSlider />
      <RequestCourseSection />
      <Testimonials /> {/* 👈 added here */}
    </>
  );
}
