import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex flex-col fixed bottom-0 z-10 gap-4`}
  &:after {
    content: "";
    ${tw`block w-px h-90 m-auto bg-grey_blue`}
  }
`;

const GravityButton = styled.div`
  display: grid;
  width: 100px;
  place-items: center;
  aspect-ratio: 1;
  background: none;
  border-radius: 50%;
  transform: translate(var(--tx, 0), var(--ty, 0));
  transition: all 0.2s ease-out;
`;

const Github = styled(AiFillGithub)`
  cursor: pointer;
  ${tw`text-grey_blue`}
  &:hover {
    ${tw`text-blue_v2 dark:text-light_blue`}
  }
`;

const Linkedin = styled(AiFillLinkedin)`
  cursor: pointer;
  ${tw`text-grey_blue`}
  &:hover {
    ${tw`text-blue_v2 dark:text-light_blue`}
  }
`;

const Sidebar = () => {
  const githubUrl = "https://github.com/a-ringwater";
  const linkedinUrl = "https://www.linkedin.com/in/adrien-anodeau/";

  useEffect(() => {
    // handle gravity movement of the button
    const handleMouseMove = (e) => {
      const btn = e.target;
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;
      const r1 = Math.sqrt(x * x + y * y);
      const r2 = (1 - r1 / h) * r1;
      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
      const op = r2 / r1 + 0.25;

      btn.style.setProperty("--tx", `${tx}px`);
      btn.style.setProperty("--ty", `${ty}px`);
      btn.style.setProperty("--opacity", `${op}`);
    };

    const handleMouseLeave = (e) => {
      const btn = e.target;
      btn.style.setProperty("--tx", "0px");
      btn.style.setProperty("--ty", "0px");
      btn.style.setProperty("--opacity", "0.25");
    };

    document.querySelectorAll(".gravityButton").forEach((btn) => {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll(".gravityButton").forEach((btn) => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  function handleClick(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <Wrapper>
      <GravityButton className="gravityButton">
        <Github size={40} onClick={() => handleClick(githubUrl)} />
      </GravityButton>
      <GravityButton className="gravityButton">
        <Linkedin size={40} onClick={() => handleClick(linkedinUrl)} />
      </GravityButton>
    </Wrapper>
  );
};

export default Sidebar;
