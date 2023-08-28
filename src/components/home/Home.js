import React from "react";
import "./Home.scss";
import Button from "../common/Button";
import { Link } from "react-scroll";
import hi from "../../assets/hi.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home_ctr">
      <div className="wrapper_img">
        <div className="image_home_ctr border-8 border-grey_blue border-solid dark:border-grey">
          <img className="image_home" src={hi} alt="hello" />
        </div>
      </div>
      <div className="home_desc_content">
        <h1 className="font-primary text-xxl text-dark_blue dark:text-grey">
          <div className="welcome_title border-r-4 border-green border-solid">
            {t("home.welcome")}
            <span className="text-green">.</span>
          </div>
        </h1>

        <p className="welcome_text font-primary text-dark_blue dark:text-grey">
          {t("home.myName")}
          <span className="highlight dark:text-green">Adrien</span>, {t("home.intro")}{" "}
          <span className="highlight dark:text-green">JavaScript</span> {t("home.and")}{" "}
          <span className="highlight dark:text-green">React</span>. {t("home.based")}
        </p>
      </div>

      <div className="home_btn_ctr">
        <Link to="about">
          <Button className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey">
          {t("button.about")}
          </Button>
        </Link>
        <Link to="contact">
          <Button className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey">
          {t("button.contact")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
