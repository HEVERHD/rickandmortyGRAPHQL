import * as React from "react";
import Logo from "../src/assets/logo.png";
import GlobalStyles from "././styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "././themes/Theme";
import Home from "../src/pages/Home";
import "./index.css";

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <div className="container-logo">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <Home />
    </ThemeProvider>
    </>
  );
}

export default App;
