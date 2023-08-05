import React from "react";
import { Link } from "react-router-dom";
import { fonts } from "../assets/styleVar";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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


const Navbar = () => {
  return (
    <HeaderContainer className="bg-dark_blue">
      <HeaderLogo>
        <Link to="/">
          <div className="text-grey">home</div>
        </Link>
      </HeaderLogo>

      <Wrapper>
        <div className="flex pr-4">
          <Link to="/about">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:underline hover:scale-120">about</div>
          </Link>
          <Link to="/experiences">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:underline hover:scale-120">experiences</div>
          </Link>
          <Link to="/contact">
            <div className="font-primary text-grey text-lg mr-4 ml-4 transition duration-300 ease-in-out hover:text-grey_blue hover:underline hover:scale-120">contact</div>
          </Link>
        </div>

        <ThemeToggle />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Navbar;
