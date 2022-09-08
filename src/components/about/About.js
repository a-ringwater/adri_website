import React from "react";
import Skills from "../skills/Skills";
import "./About.scss";

const About = () => {
  return (
    <div className="about_ctr">
      <h1 className="about_title">About me</h1>
      <p className="about_content">
        I am a web and mobile developer focusing on front-end with full-stack
        experiences.
      </p>
      <p className="about_content">
        I am mainly working with JavaScript technologies such as React, React
        Native, Vue, TypeScript.
      </p>
      <p className="about_content">
        I am enthusiast about creating and developing clean and efficient
        websites & web applications.
      </p>
      <Skills />
    </div>
  );
};

export default About;
