import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative z-10">
      <Hero />
      <Marquee />
      <Stats />
      <Projects />
      <Services />
      <Stack />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
