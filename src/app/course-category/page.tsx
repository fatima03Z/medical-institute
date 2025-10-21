import CourseCategoryHero from "@/components/course/CourseCategoryHero";
import CourseCategories from "@/components/course/CourseCategories";
import ArticlesSection from "@/components/articles/ArticlesSection"; // ✅ import

export default function Page() {
  return (
    <main>
      {/* Hero section */}
      <CourseCategoryHero />

      {/* Course list with filters, search, pagination */}
      <CourseCategories />

      {/* Articles section (dynamic fetching) */}
      <ArticlesSection />
    </main>
  );
}