import React from "react";
import Button from "./common/Button";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  ${tw`font-primary text-xl text-dark_blue mb-10 dark:text-grey`}
`;

const Contact = () => {
  const handleClick = () => {
    window.location.href = "mailto:adrien.anodeau@gmail.com";
  };

  return (
    <>
      <Wrapper>
        <Title>Get in touch</Title>
        <Button
          className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey"
          onClick={handleClick}
        >
          send me an e-mail
        </Button>
      </Wrapper>
    </>
  );
};

export default Contact;
