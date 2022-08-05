import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";

const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RouterConfig;
