import React from "react";
import "./Navbar.scss";
import { fonts } from "../assets/styleVar";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";
import useMobileScreen from "../hooks/useMobileScreen";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 9999;
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
  const { isMobile } = useMobileScreen();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isMobile ? (
        <HeaderContainer className="bg-dark_blue">
          <HeaderLogo>
            <div className="text-grey cursor-pointer" onClick={goToTop}>
              home
            </div>
          </HeaderLogo>

          <Wrapper>
            <ThemeToggle />
          </Wrapper>
        </HeaderContainer>
      ) : (
        <HeaderContainer className="bg-dark_blue">
          <HeaderLogo>
            <div className="text-grey cursor-pointer" onClick={goToTop}>
              home
            </div>
          </HeaderLogo>

          <div className="container">
            <p className="nav_availability text-green">
              Available for work
              <span className="dot">&nbsp;.&nbsp;</span>
              Available for work
              <span className="dot">&nbsp;.&nbsp;</span>
              Available for work
              <span className="dot">&nbsp;.&nbsp;</span>
            </p>
          </div>
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
      )}
    </>
  );
};

export default Navbar;
