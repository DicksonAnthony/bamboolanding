import styled from "styled-components";

export const Desktop = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-weight: 700;
  justify-content: space-between;
  background: var(--white);

  @media screen and (max-width: 964px) {
    display: none;
  }
`;
export const Left = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const Ul = styled.ul`
  gap: 70px;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  li {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    font-weight: bold;
    color: var(--white);
    border-radius: 10px;
    padding: 20px 40px;
    transition: transform 0.5s ease-in-out;
    background-color: var(--primaryColor);

    &:hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
// Mobile Nav
export const WrapperMobile = styled.div`
  @media screen and (min-width: 964px) {
    display: none;
  }
`;
export const Mobile = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-weight: 700;
  background: var(--white);
  justify-content: space-between;
`;
export const Logomobile = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Rightmobile = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
`;
export const MobileUl = styled.ul`
  gap: 50px;
  display: flex;
  font-weight: bold;
  list-style: none;
  padding: 30px 0 0;
  align-items: center;
  transform: ${({ mobile }) =>
    mobile ? "translateY(0)" : "translateY(-1000px)"};
  flex-direction: column;
  opacity: ${({ mobile }) => (mobile ? "100%" : "25%")};
  transition: transform 0.8s ease-in-out;
  justify-content: space-between;

  li {
    &:hover {
      cursor: pointer;
    }
  }
`;
