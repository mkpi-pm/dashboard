import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  // Activating checks in development mode with Strict Mode
  <React.StrictMode>
    {/* Wrapping ContextProvider around App component to pass props*/}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
