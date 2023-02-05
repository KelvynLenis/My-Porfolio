import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import Papers from "./components/Papers"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col gap-12">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Papers />
      <Footer />
    </div>
  )
}

export default App
