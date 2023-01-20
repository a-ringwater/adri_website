import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  const githubUrl = "https://github.com/AAdrien-A";
  const linkedinUrl = "https://www.linkedin.com/in/adrien-anodeau/";

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <div className="home_ctr">
      <div className="home_main_content">
        <div className="home_desc_content">
          <h1 className="hello_typewriter">
            Hello, I am <span>Adrien</span>
          </h1>

          <h2 className="home_role">web & mobile developer.</h2>

          <p className="home_short">based in France.</p>

          <p className="home_short">
            specialized in front-end development with full-stack experiences.
          </p>
        </div>

        <div className="home_btn_ctr">
          <Link to="/about">
            <Button className="about_btn" label="about" />
          </Link>
          <Link to="/contact">
            <Button className="contact_btn" label="contact me" />
          </Link>
        </div>

        <div className="social_ctr">
          <AiFillGithub
            size={50}
            className="social_el"
            onClick={() => handleClick(githubUrl)}
          />
          <AiFillLinkedin
            size={50}
            className="social_el"
            onClick={() => handleClick(linkedinUrl)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
