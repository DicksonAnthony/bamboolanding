import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <GlobalStyle />
    </>
  );
}

export default App;
