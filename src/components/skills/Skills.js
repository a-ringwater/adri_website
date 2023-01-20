import React from "react";
import "./Skills.scss";
import { techBack, techDb, techFront, techVersioning } from "../../utils/tech";

const Skills = () => {
  function createTechItem(techArray) {
    return techArray.map((t, i) => (
      <div className="tech_item" key={t.tech}>
        <span>{t.tech}</span>
        <img src={t.icon} alt={t.icon} className="tech_icon" />
      </div>
    ));
  }

  const frontArray = createTechItem(techFront);
  const backArray = createTechItem(techBack);
  const dbArray = createTechItem(techDb);
  const vArray = createTechItem(techVersioning);

  return (
    <>
      <h2 className="skills_title">technologies I work with:</h2>

      <h3>front-end:</h3>
      <div className="tech_ctr">{frontArray}</div>

      <h3>back-end:</h3>
      <div className="tech_ctr">{backArray}</div>

      <h3>databases:</h3>
      <div className="tech_ctr">{dbArray}</div>

      <h3>versioning:</h3>
      <div className="tech_ctr">{vArray}</div>
    </>
  );
};

export default Skills;
