import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home_ctr">
      <img className="home_avatar" alt="avatar" />

      <div className="home_main_content">
        <div className="home_desc_content">
          <h1>
            Hi, I am <span>Adrien</span>
            <span class="hello_hand">🤚</span>
          </h1>

          <h2>Web & Mobile developer.</h2>
          <ul className="home_list">
            <li>
              <span role="img">🌎</span>based in France.
            </li>
          </ul>

          <p>front-end developer with full-stack experiences.</p>
        </div>

        <div className="home_btn_ctr">
          <Link to="/portfolio">
            <Button className="portfolio_btn" label="portfolio" />
          </Link>
          <Link to="/contact">
            <Button className="contact_btn" label="contact me" />
          </Link>
        </div>

        <div className="social_ctr">
          <AiFillGithub size={35} className="social_el" />
          <AiFillLinkedin size={35} className="social_el" />
        </div>
      </div>
    </div>
  );
};

export default Home;
