import React from "react";
import { Link } from "react-router-dom";
import colors from "../../assets/colors";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  display: flex;
  padding: 1rem;
`;

const LogoLink = styled.div`
  color: ${colors.black};
  text-transform: uppercase;
`;

const HeaderRoutes = styled.div`
  display: flex;
  padding: 1rem;
`;

const RoutesLink = styled.div`
  color: ${colors.black};
  margin: 0 1rem 0 1rem;
  &:hover { 
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <LogoLink>Adrien</LogoLink>
        </Link>
      </HeaderLogo>
      <HeaderRoutes>
        <Link to="/about">
          <RoutesLink>About</RoutesLink>
        </Link>
        <Link to="/skills">
          <RoutesLink>Skills</RoutesLink>
        </Link>
        <Link to="/portfolio">
          <RoutesLink>Portfolio</RoutesLink>
        </Link>
        <Link to="/contact">
          <RoutesLink>Contact</RoutesLink>
        </Link>
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Navbar;
