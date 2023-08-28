import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/common/ScrollToTop";
import useMobileScreen from "./hooks/useMobileScreen";
import "./i18n";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";


function App() {
  const { isMobile } = useMobileScreen();

  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
}

export default App;
