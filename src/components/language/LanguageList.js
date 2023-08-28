import React from "react";
import { MenuItem } from "@chakra-ui/react";
import { resources } from "../../translation/languages";
import i18n from "../../i18n";

function LanguageList() {
  const changeLanguage = async (event, item) => {
    event.preventDefault();
    i18n.changeLanguage(item);
    localStorage.setItem("lang", item);
  };

  const langList = resources.map((item, index) => (
    <div key={item.id}>
      <MenuItem onClick={(event) => changeLanguage(event, item.id)}>
        <img
          alt="flag"
          className="language_icon"
          src={item.icon[0]}
        />
        {item.label}
      </MenuItem>
    </div>
  ));

  return <>{langList}</>;
}

export default LanguageList;
