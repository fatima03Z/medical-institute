import CourseCategoryHero from "@/components/course/CourseCategoryHero";
import CourseList from "@/components/course/CourseList";
import ArticlesSection from "@/components/articles/ArticlesSection";

export default function CoursesPage() {
  return (
    <main>
      <CourseCategoryHero />
      <CourseList />   {/* ✅ This loads your course list */}
      <ArticlesSection />
    </main>
  );
}
