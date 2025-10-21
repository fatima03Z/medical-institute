import { NextResponse } from "next/server";

export async function GET() {
  const articles = [
    {
      id: "1",
      title: "Unlocking the Power of Intelligence",
      description:
        "London Medical has long been synonymous with world-class education and cutting-edge research.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "2",
      title: "New Advances in Medical Science",
      description:
        "Exploring groundbreaking innovations that are transforming the healthcare industry.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "3",
      title: "Healthcare Innovations 2025",
      description:
        "AI and robotics are reshaping surgery and patient care worldwide.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "4",
      title: "Global Medical Breakthroughs",
      description:
        "Recent discoveries in genetics and biotechnology are changing lives.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "5",
      title: "The Future of Medical Training",
      description:
        "Virtual reality and simulations are enhancing how doctors learn.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "6",
      title: "AI in Healthcare Diagnostics",
      description:
        "Machine learning models now assist in early disease detection.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "7",
      title: "Sustainable Healthcare Practices",
      description:
        "Green hospitals and eco-friendly medical solutions are on the rise.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "8",
      title: "Telemedicine and Patient Access",
      description:
        "Remote consultations are making healthcare more accessible worldwide.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "9",
      title: "Genomics and Personalized Medicine",
      description:
        "Tailored treatments are revolutionizing patient outcomes.",
      image: "/images/article.png",
      link: "#",
    },
    {
      id: "10",
      title: "Next-Gen Medical Devices",
      description:
        "Wearables and IoT are tracking patient health in real-time.",
      image: "/images/article.png",
      link: "#",
    },
  ];

  return NextResponse.json(articles);
}
