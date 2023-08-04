import React from "react";
import Skills from "../Skills";
import "./About.scss";

const About = () => {
  return (
    <div className="about_ctr">
      <div className="about_content">
        <h1 className="font-primary text-xl text-dark_blue dark:text-grey">
          about me
        </h1>
        <p className="font-primary text-lg text-dark_blue dark:text-grey">
          After several years of professional experience in London, I made a
          career transition into web and mobile development. With 3 years of
          experience in front-end development, I have specialized in JavaScript
          with React. Now, I aim to further enhance my skills by learning
          TypeScript. My work approach is always focused on code reliability,
          efficiency and continuous improvement.
        </p>

        <div className="font-primary text-lg text-dark_blue dark:text-grey">
          Technologies I’ve been working with:
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
