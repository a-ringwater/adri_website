import React from "react";
import "./Home.scss";
import Button from "../common/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home_ctr">
      <div className="home_desc_content">
        <h1 className="font-primary text-xxl text-dark_blue dark:text-grey">
          <div className="welcome_title">
            Welcome<span className="text-green">.</span>
          </div>
        </h1>

        <p className="welcome_text font-primary text-dark_blue dark:text-grey">
          My name is <span className="highlight dark:text-green">Adrien</span>,
          I am a web & mobile developer specialized in front-end development
          using technologies like{" "}
          <span className="highlight dark:text-green">JavaScript</span> and{" "}
          <span className="highlight dark:text-green">React</span>. Based in
          France.
        </p>
      </div>

      <div className="home_btn_ctr">
        <Link to="about">
          <Button className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey">
            about
          </Button>
        </Link>
        <Link to="contact">
          <Button className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey">
            contact me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
