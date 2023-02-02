import React, { useState } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import { BsMoonStars, BsSun } from "react-icons/bs";
import styled from "styled-components";
import { colors } from "../../assets/variables";

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
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <Wrapper>
          {lightMode ? (
            <Sun
              onClick={() => {
                setLightMode(!lightMode);
                changeTheme(lightMode ? themes.light : themes.dark);
                localStorage.setItem('theme', lightMode)
              }}
              className="sun"
              size={25}
              aria-label="auto"
              aria-live="polite"
            />
          ) : (
            <Moon
              onClick={() => {
                setLightMode(!lightMode);
                changeTheme(lightMode ? themes.light : themes.dark);
                localStorage.setItem('theme', lightMode)
              }}
              className="moon"
              size={25}
              aria-label="auto"
              aria-live="polite"
            />
          )}
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
