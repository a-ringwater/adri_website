import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    bg: "transparent",
    _hover: {
      bg: "teal.600",
      color: "teal.600",
    },
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
