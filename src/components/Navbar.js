import React from "react";
import { fonts } from "../assets/styleVar";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  width: 100%;
`;

const HeaderLogo = styled.div`
  display: flex;
  font-family: ${fonts.primary};
  font-size: 25px;
  padding-left: 1rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeaderContainer className="bg-dark_blue">
      <HeaderLogo>
        <div className="text-grey cursor-pointer" onClick={goToTop}>
          home
        </div>
      </HeaderLogo>

      <Wrapper>
        <div className="flex pr-4">
          <Link to="about">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:scale-120 cursor-pointer">
              about
            </div>
          </Link>
          <Link to="experience">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:scale-120 cursor-pointer">
              experiences
            </div>
          </Link>
          <Link to="contact">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:scale-120 cursor-pointer">
              contact
            </div>
          </Link>
        </div>

        <ThemeToggle />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Navbar;
