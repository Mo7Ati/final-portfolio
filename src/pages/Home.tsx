import Hero from "../components/Hero"
import Photo from "../components/Photo"
import StatsBlock from "../components/StatsBlock"
import About from "../components/About"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Reveal from "../components/Reveal"

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_320px] lg:gap-12 lg:items-start">
        <div className="lg:col-start-1 lg:row-start-1">
          <Reveal direction="left">
            <Hero />
          </Reveal>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 mx-auto w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-none lg:w-[320px] lg:sticky lg:top-24">
          <Reveal direction="right" delay={100}>
            <Photo />
          </Reveal>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <Reveal direction="left" delay={80}>
            <StatsBlock />
          </Reveal>
        </div>
      </section>

      <Reveal direction="left">
        <About />
      </Reveal>
      <Reveal direction="right">
        <Skills />
      </Reveal>
      <Reveal direction="left">
        <Experience />
      </Reveal>
      <Reveal direction="right">
        <Education />
      </Reveal>
      <Reveal direction="left">
        <Projects />
      </Reveal>
      <Reveal direction="right">
        <Contact />
      </Reveal>
    </>
  )
}
