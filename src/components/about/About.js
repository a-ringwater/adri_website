import React from "react";
import Skills from "../Skills";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="title_ctr">
        <h1 className="font-primary text-xl text-dark_blue dark:text-grey">
          About me
        </h1>
      </div>
      <div className="about_ctr">
        <div className="about_item ">
          <div className="font-primary text-lg text-dark_blue dark:text-grey">
            After several years of professional experience in London, I made a
            career transition into{" "}
            <span className="highlight dark:text-green">
              web and mobile development
            </span>
            . With 3 years of experience in front-end development, I have
            specialized in
            <span className="highlight dark:text-green">
              JavaScript with React
            </span>
            . Now, I aim to further enhance my skills by learning TypeScript. My
            work approach is always focused on
            <span className="highlight dark:text-green">
              code reliability, efficiency and continuous improvement
            </span>{" "}
            .
          </div>
        </div>
        <div className="about_item skills">
          <div className="font-primary text-lg text-dark_blue dark:text-grey">
            Technologies I have been working with:
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;
