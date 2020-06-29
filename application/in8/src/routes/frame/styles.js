import styled from "styled-components";


export const Bg = styled.picture`
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const Header = styled.header`
  ${({ height }) => height && `height: ${height}px;`}
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction:column;
`;

export const HeaderContainerText = styled.div`
  position: relative;
  z-index: 9;
  margin-top: 50px;
  width: 100%;
  padding: 15px 150px;
  font-family: "Helvetica";
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    padding: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderPrimaryText = styled.div`
  font-size: 49pt;
`;
export const HeaderSecondaryText = styled.div`
  font-size: 21pt;
`;

export const ImageSource = styled.source``;

export const ContainerMenu = styled.div`
  position: relative;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
`;

export const Main = styled.main``;

export const ScrollingToTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 11;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  width: 100%;
  ${({ height }) => height && `height: ${height}px;`}

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainerText = styled.div`
  position: relative;
  z-index: 10;
`;

export const FooterText = styled.p`
  color: #fff;
  font-family: "Roboto-Light";
  text-align: center;
  margin-bottom: 7px;

  :last-child {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
