import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  techBack,
  techDb,
  techFront,
  techCICD,
  techOthers,
} from "../utils/tech";

const TechSection = styled.div`
  ${tw`text-dark_blue text-lg relative pl-10 mb-10 dark:text-grey`}
  &:before {
    content: "▹";
    ${tw`text-green text-lg absolute left-0 dark:text-green`}
  }
`;

const TechContainer = styled.span`
  display: flex;
  gap: 1rem;
`;

const TechItem = styled.div`
  ${tw`text-dark_blue text-lg relative pr-1 dark:text-grey`}
`;

const Skills = () => {
  function createTechItem(techArray) {
    return techArray.map((tech, i) => <TechItem key={tech}>{tech}</TechItem>);
  }

  const frontArray = createTechItem(techFront);
  const backArray = createTechItem(techBack);
  const dbArray = createTechItem(techDb);
  const cicd = createTechItem(techCICD);
  const vArray = createTechItem(techOthers);

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
        test | CI / CD: <TechContainer>{cicd}</TechContainer>
      </TechSection>

      <TechSection>
        others: <TechContainer>{vArray}</TechContainer>
      </TechSection>
    </>
  );
};

export default Skills;
