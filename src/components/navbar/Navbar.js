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
          <LogoLink>home</LogoLink>
        </Link>
      </HeaderLogo>
      <HeaderRoutes>
        <Link to="/about">
          <RoutesLink>about</RoutesLink>
        </Link>
        <Link to="/skills">
          <RoutesLink>skills</RoutesLink>
        </Link>
        <Link to="/portfolio">
          <RoutesLink>portfolio</RoutesLink>
        </Link>
        <Link to="/contact">
          <RoutesLink>contact</RoutesLink>
        </Link>
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Navbar;
