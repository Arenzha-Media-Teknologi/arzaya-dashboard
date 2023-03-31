import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const customTheme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: "dark",
          useSystemColorMode: false,
        },
      })}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
