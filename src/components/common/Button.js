import React from "react";
import styled from "styled-components";
import { fonts } from "../../assets/styleVar";

const ButtonStyled = styled.button`
  font-family: ${fonts.primary};
  font-size: 20px;
  background-color: transparent;
  border-radius: 0.25em;
  padding: 1em;
  min-width: 100px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const Button = ({ children, className, onClick }) => {
  return (
    <ButtonStyled type="button" className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
