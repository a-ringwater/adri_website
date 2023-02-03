import React from "react";
import { Link } from "react-router-dom";
import { colors, fonts } from "../assets/styleVar";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.navy};
  height: 80px;
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

const LogoLink = styled.div`
  color: ${colors.green_variant};
`;

const HeaderRoutes = styled.div`
  display: flex;
  padding-right: 1rem;
`;

const RoutesLink = styled.div`
  color: ${colors.lightgrey};
  font-family: ${fonts.primary};
  font-size: 25px;
  margin: 0 1rem 0 1rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    color: ${colors.green_variant};
    text-decoration: underline;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <LogoLink>home</LogoLink>
        </Link>
      </HeaderLogo>

      <Wrapper>
        <HeaderRoutes>
          <Link to="/about">
            <RoutesLink>about</RoutesLink>
          </Link>
          <Link to="/portfolio">
            <RoutesLink>experiences</RoutesLink>
          </Link>
          <Link to="/contact">
            <RoutesLink>contact</RoutesLink>
          </Link>
        </HeaderRoutes>

        <ThemeToggle />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Navbar;
