import Hero from "../components/Hero.jsx";
import Photo from "../components/Photo.jsx";
import StatsBlock from "../components/StatsBlock.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_320px] lg:gap-12 lg:items-start">
        <div className="lg:col-start-1 lg:row-start-1">
          <Hero />
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 mx-auto w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-none lg:w-[320px] lg:sticky lg:top-24">
          <Photo />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <StatsBlock />
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
