import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DataAnalysis from "./pages/DataAnalysis";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import PersonalProjects from "./pages/PersonalProjects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}