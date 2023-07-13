import React, { useContext } from "react";
import Button from "./common/Button";
import styled from "styled-components";
import { colors, fonts } from "../assets/styleVar";
import { ThemeContext } from "../context/ThemeContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${fonts.primary};
  font-size: 50px;
  color: ${(props) =>
    props.theme !== "light_mode" ? colors.lightgrey : colors.navy};
`;

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.location.href = "mailto:adrien.anodeau@gmail.com";
  };

  return (
    <>
      <Wrapper>
        <Title theme={theme}>Get in touch</Title>
        <Button onClick={handleClick}>contact me</Button>
      </Wrapper>
    </>
  );
};

export default Contact;
