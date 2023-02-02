import React, { useContext } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const titleClass = theme === "" ? "welcome" : "welcome_light";
  const buttonClass = theme === "" ? "home_btn" : "home_btn_light";

  return (
    <div className="home_ctr">
      <div className="home_main_content">
        <div className="home_desc_content">
          <h1 className={titleClass}>
            Welcome.
          </h1>

          <p className="home_short">
            My name is Adrien, I am a web & mobile developer specialized in
            front-end development with full-stack experiences. based in France.
          </p>
        </div>

        <div className="home_btn_ctr">
          <Link to="/about">
            <Button className={buttonClass}>about</Button>
          </Link>
          <Link to="/contact">
            <Button className={buttonClass}>contact me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
