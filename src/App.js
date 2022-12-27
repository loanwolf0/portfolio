import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}
