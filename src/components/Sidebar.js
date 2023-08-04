import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`flex flex-col w-10 fixed bottom-0 left-10 z-10 gap-4`}
  &:after {
    content: "";
    ${tw`block w-px h-90 m-auto bg-grey_blue`}
  }
`;
const Github = styled(AiFillGithub)`
  cursor: pointer;
  ${tw`text-grey_blue transition-transform duration-300 ease-in-out`}
  &:hover {
    ${tw`text-blue_v2 scale-125 dark:text-light_blue`}
  }
`;

const Linkedin = styled(AiFillLinkedin)`
  cursor: pointer;
  ${tw`text-grey_blue transition-transform duration-300 ease-in-out`}
  &:hover {
    ${tw`text-blue_v2 scale-125 dark:text-light_blue`}
  }
`;

const Sidebar = () => {
  const githubUrl = "https://github.com/a-ringwater";
  const linkedinUrl = "https://www.linkedin.com/in/adrien-anodeau/";

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <Wrapper>
        <Github size={40} onClick={() => handleClick(githubUrl)} />
        <Linkedin size={40} onClick={() => handleClick(linkedinUrl)} />
      </Wrapper>
    </>
  );
};

export default Sidebar;
