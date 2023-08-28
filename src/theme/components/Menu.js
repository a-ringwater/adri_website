import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    bg: "transparent",
  },
  item: {
    display: "flex",
    gap: "1rem"
  }
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
