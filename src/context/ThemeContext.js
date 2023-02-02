import { createContext } from "react";

export const themes = {
  dark: "",
  light: "light_mode",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
