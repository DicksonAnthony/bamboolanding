import React, { useState } from "react";
import Bamboo from "../Assets/logo.svg";
import { FaBars as Menu, FaTimes as Close } from "react-icons/fa";
import {
  Desktop,
  Left,
  Logo,
  Ul,
  Right,
  Img,
  Mobile,
  Rightmobile,
  MobileUl,
  Logomobile,
  WrapperMobile,
} from "../components/Styles/Nav.styled";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const toggle = () => {
    setMobile((prev) => !prev);
  };
  return (
    <>
      <Desktop>
        <Left>
          <Logo>
            <Img src={Bamboo} alt="logo" />
          </Logo>
          <Ul>
            <li>Products</li>
            <li>Learn</li>
            <li>Community</li>
          </Ul>
        </Left>
        <Right>
          <button>Get Started</button>
        </Right>
      </Desktop>
      <WrapperMobile>
        <Mobile>
          <Logomobile>
            <Img src={Bamboo} alt="" />
          </Logomobile>
          <Rightmobile onClick={toggle}>
            {mobile ? <Close /> : <Menu />}
          </Rightmobile>
        </Mobile>
        <MobileUl mobile={mobile}>
          <li>Products</li>
          <li>Learn</li>
          <li>Community</li>
        </MobileUl>
      </WrapperMobile>
    </>
  );
};

export default Nav;
