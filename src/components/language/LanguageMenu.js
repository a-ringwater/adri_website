import React from "react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import LanguageList from "./LanguageList";
import "./Language.scss";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";

function LanguageMenu() {
  const currentResource = useCurrentLanguage();

  return (
    <Menu>
      <MenuButton>
        <img
          alt="flag"
          className="language_icon"
          src={currentResource?.icon[0]}
        />
      </MenuButton>
      <MenuList>
        <LanguageList />
      </MenuList>
    </Menu>
  );
}

export default LanguageMenu;
