import React from "react";
import {
  Wrapper,
  Leftdiv,
  Innerleftdiv,
  Store,
  Img,
  Rightdiv,
} from "./Styles/Header.styled";
import Playstore from "../Assets/download-on-google-play-image-light.png";
import Applestore from "../Assets/download-on-apple-store-image-light.png";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Leftdiv>
          <Innerleftdiv>
            <h1>The modern way to invest in everything</h1>
            <p>
              Bamboo is the easiest way to access smarter investment options and
              earn real returns. We make investing simple, accessible and
              affordable.
            </p>
            <Store>
              <Img src={Playstore} alt="" />
              <Img src={Applestore} alt="" />
            </Store>
          </Innerleftdiv>
        </Leftdiv>
        <Rightdiv></Rightdiv>
      </Wrapper>
    </>
  );
};

export default Header;
