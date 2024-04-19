import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/BackToTop";

const Contact = lazy(() => import("./components/pages/Contact"));
const MyProjects = lazy(() => import("./components/MyProjects"));
const AboutMe = lazy(() => import("./components/AboutMe"));

export function App() {
  return (
    <div className="animate-fadeIn bg-gradient">
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
      <BackToTop />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}
