import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobList from "./routes/JobList";
import "@fontsource-variable/inter";
import Scoring from "./routes/Scoring";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const customTheme = extendTheme({ config });

const queryClient = new QueryClient();

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <JobList />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/scoring",
    element: <Scoring />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={extendTheme({
          config: {
            initialColorMode: "dark",
            useSystemColorMode: false,
          },
          fonts: {
            inter: `'Inter Variable', sans-serif`,
          },
        })}
      >
        {/* <App /> */}
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
