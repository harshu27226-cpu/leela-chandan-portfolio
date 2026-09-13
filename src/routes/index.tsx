import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Certifications,
  Contact,
  Education,
  Footer,
  Goals,
  Hero,
  Projects,
  Skills,
} from "@/components/portfolio/sections";
import { profile } from "@/lib/portfolio-data";

const title = `${profile.name} — Computer Science (AI) Student & AI Enthusiast`;
const description =
  "Portfolio of Sidagam Leela Chandana, B.Tech CSE (AI) student and AI enthusiast skilled in Python, C, HTML, Data Structures and DBMS. Building the future with code.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
