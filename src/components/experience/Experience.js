import React from "react";
import ExpItem from "./ExpItem";
import "./Experience.scss";
import { experiences } from "../../utils/experience";

const Experience = () => {
  return (
    <div className="exp_ctr">
      <h1 className="about_title font-primary text-dark_blue dark:text-grey">
        Experiences
      </h1>
      {experiences.map((experience, index) => (
        <ExpItem key={index} {...experience} />
      ))}
    </div>
  );
};
export default Experience;
