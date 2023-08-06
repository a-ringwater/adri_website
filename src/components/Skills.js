import React from "react";
import CardTransition from "./card/CardTransition";
import { frontend, backend, ci, databases, others } from "../utils/techno";

const Skills = () => {
  return (
    <>
      <CardTransition title="Front-end" data={frontend} />

      <CardTransition title="Back-end" data={backend} />

      <CardTransition title="Databases" data={databases} />

      <CardTransition title="Test | CI / CD" data={ci} />

      <CardTransition title="Others" data={others} />
    </>
  );
};

export default Skills;
