import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider, Text } from "@mantine/core";
import { RQProvider } from "./rq";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RQProvider>
        <App />
      </RQProvider>
    </MantineProvider>
  </React.StrictMode>
);
