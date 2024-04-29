import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Le quité el React.StrictMode porque corría los useEffect dos veces
  <ThemeProvider theme={theme}>
    <Router basename="/">
      <App />
    </Router>
  </ThemeProvider>
);
