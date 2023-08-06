import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-grey dark:bg-navy">
        <Navbar />
        <Sidebar />
        <ScrollToTop />
        <div id="content">
          <main className="main-content">
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
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
