import React from "react";
import Button from "../common/Button";
import "./Contact.scss";
import useMobileScreen from "../../hooks/useMobileScreen";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import greeting from "../../assets/greeting.png";

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
      <div className="flex items-center font-primary text-lg text-dark_blue mb-10 dark:text-grey">
        Want to discuss? Please get in touch!
      </div>
      <Button
        className="font-primary text-dark_blue text-lg mr-4 ml-4 border-2 border-dark_blue transition duration-300 ease-in-out hover:scale-120 hover:bg-dark_blue hover:text-grey dark:text-grey dark:border-grey"
        onClick={handleClick}
      >
        send me an e-mail
      </Button>
      <div className="flex justify-center items-center font-primary text-lg text-dark_blue mb-10 dark:text-grey pt-8">
        Thank you for your visit!
      </div>
      <div className="image_ctr">
        <img className="image" src={greeting} alt="bye" />
      </div>

      {isMobile && (
        <div className="social_media_ctr">
          <AiFillGithub
            className="cursor-pointer text-grey_blue hover:text-blue_v2 hover:dark:text-light_blue"
            size={40}
            onClick={() => handleClickSocialMedia(githubUrl)}
          />
          <AiFillLinkedin
            className="cursor-pointer text-grey_blue hover:text-blue_v2 hover:dark:text-light_blue"
            size={40}
            onClick={() => handleClickSocialMedia(linkedinUrl)}
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
