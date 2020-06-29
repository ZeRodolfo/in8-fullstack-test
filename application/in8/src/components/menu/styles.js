import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  font-family: "Roboto-Regular";

  padding: ${({ collapsed, isOpenMenu }) =>
    collapsed && isOpenMenu ? "15px 20px" : "15px 150px"};
  justify-content: ${({ collapsed, isOpenMenu }) =>
    collapsed && isOpenMenu ? "flex-end" : "space-between"};
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 130px;
  width: 100%;
  order: 1;

  svg {
    width: 110px;
  }

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const ContainerLinks = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  order: 2;

  @media screen and (max-width: 768px) {
    order: 1;

    ${({ isOpenMenu }) =>
      isOpenMenu &&
      `background: #29abe2;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 60%;
        height: 100%;
        z-index: 101;
        min-height: 200px;
    `}
  }
`;

export const Links = styled.ul`
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: ${({ isOpenMenu }) => isOpenMenu ? "flex" : "none"};
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 80px 30px 30px 30px;
    list-style: none;

    li {
      margin-left: 0px;
      margin-bottom: 12px;

      :last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const Item = styled.li`
  margin-left: 30px;
  color: #fff;

  :first-child {
    list-style: none;
    margin-left: 0px;
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  :active {
    text-decoration: underline;
  }
`;

export const Toogle = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  z-index: 10;
  width: 30px;

  svg path {
    fill: ${({ isOpenMenu }) => (isOpenMenu ? "#fff" : "#29abe2")};
  }
`;

export const Overflow = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 1;
  will-change: opacity;
  z-index: 100;
`;
