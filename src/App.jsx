import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Context/ThemeContext"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Papers from "./components/Papers"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"

function App() {
  const { state } = useTheme()
  
  return (
    <div className={`w-full h-screen ${state.theme === 'light' ? 'bg-light text-zinc-900' : 'bg-primary text-white'}  flex flex-col gap-12 justify-between overflow-scroll hide-scroll-bar`}>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/papers" element={<Papers />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
