import React from "react";
import Skills from "../skills/Skills";
import "./About.scss";

const About = () => {
  return (
    <div className="about_ctr">
      <div className="about_content">
        <h1 className="about_title">about me</h1>
        <p className="about_txt">
          I am a web and mobile developer focusing on front-end with full-stack
          experiences. I am mainly working with JavaScript technologies such as
          React, React Native, Vue, TypeScript. I am enthusiast about creating
          and developing clean and efficient websites & web applications.
        </p>
        <div className="skills_intro">Technologies I’ve been working with:</div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
