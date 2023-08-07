import React from "react";
import Button from "../common/Button";
import "./Contact.scss";
import useMobileScreen from "../../hooks/useMobileScreen";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const { isMobile } = useMobileScreen();
  const handleClick = () => {
    window.location.href = "mailto:adrien.anodeau@gmail.com";
  };

  const handleClickSocialMedia = (url) => {
    window.open(url, "_blank").focus();
  };

  const githubUrl = "https://github.com/a-ringwater";
  const linkedinUrl = "https://www.linkedin.com/in/adrien-anodeau/";

  return (
    <div className="wrapper">
      <h1 className="font-primary text-xl text-dark_blue mb-10 dark:text-grey">
        Get in touch
      </h1>
      <Button
        className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey"
        onClick={handleClick}
      >
        send me an e-mail
      </Button>
      {isMobile && (
        <div className="social_media_ctr">
          <AiFillGithub
            className="cursor-pointer text-grey_blue hover:text-blue_v2 hover:dark:text-light_blue"
            size={40}
            onClick={() => handleClickSocialMedia(githubUrl)}
          />
          <AiFillLinkedin
            className="scursor-pointer text-grey_blue hover:text-blue_v2 hover:dark:text-light_blue"
            size={40}
            onClick={() => handleClickSocialMedia(linkedinUrl)}
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
