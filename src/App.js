import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import GlobalFonts from "./styles/fonts/fonts";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {  
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <GlobalFonts />
    {/* <div className="App">
      <Route path="/page" component={} exact />
    </div> */}
    <Header />
    </>
  );
}



export default App;
