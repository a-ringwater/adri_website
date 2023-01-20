import React from "react";
import { Link } from "react-router-dom";
import colors from "../../assets/colors";
import styled from "styled-components";
import "./Navbar.scss";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.green};
  height: 80px;
`;

const HeaderLogo = styled.div`
  display: flex;
  font-family: $primary-font;
  font-size: 25px;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const LogoLink = styled.div`
  color: ${colors.lightgrey};
`;

const HeaderRoutes = styled.div`
  display: flex;
  padding: 1rem;
`;

const RoutesLink = styled.div`
  color: ${colors.lightgrey};
  font-family: $primary-font;
  font-size: 25px;
  margin: 0 1rem 0 1rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <LogoLink className="navbar_link">home</LogoLink>
        </Link>
      </HeaderLogo>
      <HeaderRoutes>
        <Link to="/about" className="navbar_link">
          <RoutesLink>about</RoutesLink>
        </Link>
        <Link to="/portfolio" className="navbar_link">
          <RoutesLink>portfolio</RoutesLink>
        </Link>
        <Link to="/contact" className="navbar_link">
          <RoutesLink>contact</RoutesLink>
        </Link>
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Navbar;
