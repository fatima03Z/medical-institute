import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { slug } = context.params;

  // Mock data (same as before)
  const courses: Record<string, any> = {
    "project-management": {
      title: "Project Management Professional (PMP)",
      slug: "project-management",
      schedule: [
        { date: "2025-10-10", venue: "London", price: "$5000" },
        { date: "2025-11-05", venue: "Dubai", price: "$5200" },
        { date: "2025-12-15", venue: "New York", price: "$5500" },
      ],
      summary:
        "This Project Management course equips professionals with strategies, tools, and techniques to effectively manage complex projects and deliver results.",
      learningOutcomes: [
        "Understand PMI project framework",
        "Plan and execute projects efficiently",
        "Manage risks and resources effectively",
        "Apply leadership in project environments",
      ],
      whoShouldAttend: [
        "Project Managers",
        "Team Leaders",
        "Business Analysts",
        "Aspiring PM Professionals",
      ],
      modules: [
        "Module 1: Introduction to Project Management",
        "Module 2: Planning & Execution",
        "Module 3: Risk & Stakeholder Management",
        "Module 4: Monitoring & Controlling",
        "Module 5: Closing Projects",
      ],
    },
    "leadership-development": {
      title: "Leadership Development Program",
      slug: "leadership-development",
      schedule: [
        { date: "2025-10-20", venue: "Berlin", price: "$4800" },
        { date: "2025-11-18", venue: "Toronto", price: "$5000" },
      ],
      summary:
        "A program designed to transform managers into leaders by building confidence, decision-making, and team motivation skills.",
      learningOutcomes: [
        "Develop leadership mindset",
        "Improve decision-making",
        "Enhance team motivation",
      ],
      whoShouldAttend: [
        "Mid-level Managers",
        "Team Leads",
        "HR Professionals",
      ],
      modules: [
        "Module 1: Foundations of Leadership",
        "Module 2: Communication & Influence",
        "Module 3: Emotional Intelligence",
        "Module 4: Strategic Leadership",
      ],
    },
  };

  const course =
    courses[slug] || {
      title: "Generic Course",
      slug,
      schedule: [{ date: "TBD", venue: "Online", price: "$0" }],
      summary: "Course details will be available soon.",
      learningOutcomes: ["Stay tuned for learning outcomes."],
      whoShouldAttend: ["Professionals", "Students"],
      modules: ["Course modules will be announced later."],
    };

  return NextResponse.json(course);
}
