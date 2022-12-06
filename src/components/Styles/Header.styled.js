import styled from "styled-components";
import Imag from "../../Assets/home-app-icons.png";

export const Wrapper = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  padding: 100px 40px 50px;
  background-color: var(--primaryColor);
  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const Leftdiv = styled.div`
  flex-basis: 50%;
`;
export const Innerleftdiv = styled.div`
  color: var(--white);
  h1 {
    font-size: 73px;
    margin-bottom: 30px;
  }
  p {
    font-size: 25px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 964px) {
    text-align: center;
  }
`;
export const Store = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 964px) {
    justify-content: center;
  }
`;
export const Img = styled.img`
  width: 40%;
`;
export const Rightdiv = styled.div`
  width: 50%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Imag});
`;
