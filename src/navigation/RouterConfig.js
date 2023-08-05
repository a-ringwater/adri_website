import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import useHandleScroll from "../hooks/useHandleScroll";

const RouterConfig = () => {
  const pages = useMemo(() => ["/", "/about", "/experiences", "/contact"], []);
  useHandleScroll(pages);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experiences" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RouterConfig;
