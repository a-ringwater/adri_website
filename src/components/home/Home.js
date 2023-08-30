import React from "react";
import "./Home.scss";
import Button from "../common/Button";
import { Link } from "react-scroll";
import hi from "../../assets/hi.png";
import { useTranslation } from "react-i18next";
import Typewriter from "../common/Typewriter";

const Home = () => {
  const { t } = useTranslation();
  const str = [
    "Web & mobile dev",
    "Front-end dev",
    "JavaScript",
    "TypeScript",
    "React",
  ];

  return (
    <div className="home_ctr">
      <div className="wrapper_img">
        <div className="image_home_ctr border-4 border-green border-solid">
          <img className="image_home" src={hi} alt="hello" />
        </div>
      </div>
      <div className="home_desc_content">
        <div className="font-primary text-xl text-dark_blue dark:text-grey">
          Adrien A.
        </div>
        <Typewriter strings={str} />
      </div>

      <div className="home_btn_ctr">
        <Link to="about">
          <Button className="font-primary text-dark_blue md:text-lg sm:text-md mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-green hover:text-grey dark:text-grey dark:border-green">
            {t("button.about")}
          </Button>
        </Link>
        <Link to="contact">
          <Button className="font-primary text-dark_blue md:text-lg sm:text-md mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-green hover:text-grey dark:text-grey dark:border-green">
            {t("button.contact")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
