import React from "react";
import ExpItem from "./ExpItem";
import "./Experience.scss";
import { experiencesEN, experiencesFR } from "../../utils/experience";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.languages[0];
  const selectedExperiences = selectedLanguage === 'fr' ? experiencesFR : experiencesEN;

  return (
    <div className="exp_ctr">
      <h1 className="about_title font-primary text-dark_blue dark:text-grey">
        {t("experiences.experiences")}
      </h1>
      {selectedExperiences.map((experience, index) => (
        <ExpItem key={index} {...experience} />
      ))}
    </div>
  );
};

export default Experience;
