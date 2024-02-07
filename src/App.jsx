import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Papers from "./components/Papers"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="w-full h-screen bg-primary flex flex-col gap-12 justify-between overflow-scroll hide-scroll-bar">
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
