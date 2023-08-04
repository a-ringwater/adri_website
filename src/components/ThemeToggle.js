import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { BsMoonStars, BsSun } from "react-icons/bs";
import styled from "styled-components";
import { colors } from "../assets/styleVar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

const Sun = styled(BsSun)`
  color: ${colors.yellow};
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Moon = styled(BsMoonStars)`
  color: ${colors.yellow};
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Wrapper>
      {isDarkMode ? (
        <Sun
          onClick={toggleDarkMode}
          className="sun"
          size={25}
          aria-label="auto"
          aria-live="polite"
        />
      ) : (
        <Moon
          onClick={toggleDarkMode}
          className="moon"
          size={25}
          aria-label="auto"
          aria-live="polite"
        />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
