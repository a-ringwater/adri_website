import React from "react";
import styled from "styled-components";
import { techBack, techDb, techFront, techVersioning } from "../utils/tech";
import { colors } from "../assets/styleVar";

const TechSection = styled.div`
  color: ${colors.grey};
  font-size: 25px;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.green_variant};
  }
`;

const TechContainer = styled.span`
  display: flex;
  gap: 1rem;
`;

const TechItem = styled.div`
  color: ${colors.grey};
  font-size: 25px;
  padding-right: 1rem;
`;

const Skills = () => {
  function createTechItem(techArray) {
    return techArray.map((tech, i) => (
      <TechItem key={tech}>
        {tech}
      </TechItem>
    ));
  }

  const frontArray = createTechItem(techFront);
  const backArray = createTechItem(techBack);
  const dbArray = createTechItem(techDb);
  const vArray = createTechItem(techVersioning);

  return (
    <>
      <TechSection>
        front-end: <TechContainer>{frontArray}</TechContainer>
      </TechSection>

      <TechSection>
        back-end: <TechContainer>{backArray}</TechContainer>
      </TechSection>

      <TechSection>
        databases: <TechContainer>{dbArray}</TechContainer>
      </TechSection>

      <TechSection>
        versioning: <TechContainer>{vArray}</TechContainer>
      </TechSection>
    </>
  );
};

export default Skills;
