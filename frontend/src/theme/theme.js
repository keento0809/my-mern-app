import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: `'Josefin Sans', sans-serif`,
  },
  colors: {
    pink: {
      100: "#FFBBBB",
    },
    orange: {
      100: "#FFE4C0",
    },
    green: {
      100: "#F0FFC2",
    },
    blue: {
      100: "#BFFFF0",
    },
  },
});

export default theme;
