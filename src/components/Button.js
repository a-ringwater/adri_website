import React, { useContext } from "react";
import styled from "styled-components";
import { fonts, colors } from "../assets/styleVar";
import { ThemeContext } from "../context/ThemeContext";

const ButtonStyled = styled.button`
  font-family: ${fonts.primary};
  font-size: 20px;
  background-color: transparent;
  border: solid 1px
    ${(props) =>
      props.theme !== "light_mode" ? colors.green_variant : colors.navy};
  border-radius: 0.25em;
  color: ${(props) =>
    props.theme !== "light_mode" ? colors.green_variant : colors.navy};
  padding: 1em;
  min-width: 100px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const Button = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ButtonStyled type="button" theme={theme}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
