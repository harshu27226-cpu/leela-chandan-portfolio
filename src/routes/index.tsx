import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Contact,
  Education,
  Footer,
  Goals,
  Hero,
  Projects,
  Skills,
} from "@/components/portfolio/sections";
import { profile } from "@/lib/portfolio-data";

const title = `${profile.name} — Full Stack Developer Portfolio`;
const description =
  "Futuristic portfolio of a fresher Full Stack Developer skilled in Java, Spring Boot, React, Node.js and MongoDB. Building future with code.";

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
        <Goals />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
