import React from "react";
import Skills from "../Skills";
import "./About.scss";
import styled from "styled-components";
import tw from "twin.macro";

const About = () => {
  const Highlight = styled.span`
    ${tw`font-bold text-dark_blue dark:text-green`}
  `;

  return (
    <div className="about_ctr">
      <div className="about_content">
        <h1 className="font-primary text-xl text-dark_blue dark:text-grey">
          About me
        </h1>
        <div className="font-primary text-lg text-dark_blue dark:text-grey">
          After several years of professional experience in London, I made a
          career transition into{" "}
          <Highlight>web and mobile development</Highlight>. With 3 years of
          experience in front-end development, I have specialized in{" "}
          <Highlight>JavaScript with React</Highlight>. Now, I aim to further
          enhance my skills by learning TypeScript. My work approach is always
          focused on{" "}
          <Highlight>
            code reliability, efficiency and continuous improvement
          </Highlight>
          .
        </div>

        <div className="font-primary text-lg text-dark_blue dark:text-grey">
          Technologies I have been working with:
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
