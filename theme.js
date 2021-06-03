import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    pressStart: '"Press Start 2P", cursive',
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.50",
        color: "gray.900",
      },
    },
  },
});

export default theme;
