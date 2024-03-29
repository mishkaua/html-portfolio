import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/pages/Contact";
import { MyProjects } from "./components/MyProjects";
import { AboutMe } from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export function App() {
  return (
    <div className="animate-fadeIn bg-gradient">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <BackToTop />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}
