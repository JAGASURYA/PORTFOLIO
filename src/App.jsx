import { Navbar } from  "@/layout/Navbar"
import { Hero } from  "@/sections/Hero"
import { About } from  "@/sections/About"
import { Projects } from  "@/sections/Projects"
import { Experience } from  "@/sections/Experience"
import { Certifications } from  "@/sections/Certifications"
import { Contact } from  "@/sections/Contact"
import { BackToTop } from "@/Components/BackToTop"


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {<Navbar />}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App
