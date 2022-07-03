import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
