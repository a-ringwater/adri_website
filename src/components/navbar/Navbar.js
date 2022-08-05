import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
`;

const HeaderLogo = styled.div`
  display: flex;
  padding: 1rem;
`;

const HeaderRoutes = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <div>Adrien</div>
        </Link>
      </HeaderLogo>
      <HeaderRoutes>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/skills">
          <div>Skills</div>
        </Link>
        <Link to="/portfolio">
          <div>Portfolio</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </HeaderRoutes>
    </HeaderContainer>
  );
};

export default Navbar;
