import React from "react";
import ExpItem from "./ExpItem";
import { experiences } from "../utils/experience";

const Experience = () => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <ExpItem key={index} {...experience} />
      ))}
    </div>
  );
};
export default Experience;
