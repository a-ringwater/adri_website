import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { colors } from "../../assets/variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  gap: 2rem;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.grey};
  }
`;
const Github = styled(AiFillGithub)`
  cursor: pointer;
  color: ${colors.grey};
  transition: transform 0.3s ease-in-out;
  &:hover {
    color: ${colors.green_variant};
    transform: scale(1.2);
  }
`;

const Linkedin = styled(AiFillLinkedin)`
  cursor: pointer;
  color: ${colors.grey};
  transition: transform 0.3s ease-in-out;
  &:hover {
    color: ${colors.green_variant};
    transform: scale(1.2);
  }
`;

const Sidebar = () => {
  const githubUrl = "https://github.com/AAdrien-A";
  const linkedinUrl = "https://www.linkedin.com/in/adrien-anodeau/";

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <Wrapper>
        <Github
          size={40}
          onClick={() => handleClick(githubUrl)}
        />
        <Linkedin
          size={40}
          onClick={() => handleClick(linkedinUrl)}
        />
      </Wrapper>
    </>
  );
};

export default Sidebar;
