import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/common/ScrollToTop";
import useMobileScreen from "./hooks/useMobileScreen";

function App() {
  const { isMobile } = useMobileScreen();

  return (
    <div>
      <Navbar />
      {!isMobile && <Sidebar />}
      <ScrollToTop />
      <div className="bg-grey dark:bg-navy">
        <section id="home" className="nav_section">
          <Home />
        </section>
        <section id="about" className="nav_section">
          <About />
        </section>
        <section id="experience" className="nav_section">
          <Experience />
        </section>
        <section id="contact" className="nav_section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
