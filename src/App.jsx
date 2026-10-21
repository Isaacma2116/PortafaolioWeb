import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import PlanetRail from './components/layout/PlanetRail'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Development from './components/sections/Development'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Infrastructure from './components/sections/Infrastructure'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import SolarBackground from './components/solar-system/SolarBackground'
import SolarSystem from './components/solar-system/SolarSystem'
import { sections } from './data/planets'
import { useActiveSection } from './hooks/useActiveSection'
import { useMediaQuery, useReducedMotion } from './hooks/useMediaQuery'
import { scrollToSection } from './hooks/scrollToSection'

const sectionIds = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(sectionIds)
  const isWide = useMediaQuery('(min-width: 1280px)')
  const isMobile = useMediaQuery('(max-width: 767px)')
  const reducedMotion = useReducedMotion()

  return (
    <>
      <SolarBackground />
      <Navbar active={active} onNavigate={scrollToSection} />
      <PlanetRail active={active} onNavigate={scrollToSection} />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:pr-20 lg:px-8 lg:pr-20 xl:grid xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:gap-12 xl:pr-8">
        {/* Escritorio: el sistema solar queda fijo y acompaña todo el recorrido. */}
        {isWide && (
          <aside className="sticky top-0 flex h-screen items-center pt-16">
            <SolarSystem active={active} onSelect={scrollToSection} staticMode={reducedMotion} tilt={0.5} />
          </aside>
        )}

        <main id="contenido" tabIndex={-1} className="min-w-0 outline-none">
          <Hero
            onNavigate={scrollToSection}
            solar={
              !isWide && (
                <SolarSystem
                  active={active}
                  onSelect={scrollToSection}
                  staticMode={isMobile || reducedMotion}
                  showLegend
                />
              )
            }
          />
          <About />
          <Experience />
          <Projects />
          <Development />
          <Infrastructure />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
