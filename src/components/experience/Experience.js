import React from "react";
import ExpItem from "./ExpItem";
import "./Experience.scss";
import { experiences } from "../../utils/experience";

const Experience = () => {
  return (
    <div className="exp_ctr">
      {experiences.map((experience, index) => (
        <ExpItem key={index} {...experience} />
      ))}
    </div>
  );
};
export default Experience;
