import React from "react";
import Skills from "../Skills";
import "./About.scss";
import useMobileScreen from "../../hooks/useMobileScreen";
import { useTranslation } from "react-i18next";

const About = () => {
  const { isMobile } = useMobileScreen();
  const { t } = useTranslation();

  return (
    <div className="about_ctr">
      <div className="about_item">
        <h1 className="about_title font-primary text-dark_blue dark:text-grey">
          {t("about.about")}
        </h1>
        <div className="about_text font-primary text-dark_blue dark:text-grey">
          <p>
            {t("about.content1")}
            <span className="highlight dark:text-green">
              {t("about.content2")}
            </span>
            .{" "}
          </p>
          <p>
            {t("about.content3")}
            <span className="highlight dark:text-green">
              {t("about.content4")}
            </span>
            .{" "}
          </p>
          <p>
            {t("about.content5")}
            <span className="highlight dark:text-green">
              {t("about.content6")}
            </span>
            .{" "}
          </p>
        </div>
      </div>
      {!isMobile && (
        <div className="about_item">
          <div className="font-primary text-lg text-dark_blue dark:text-grey">
            {t("about.technologies")}
          </div>
          <Skills />
        </div>
      )}
    </div>
  );
};

export default About;
