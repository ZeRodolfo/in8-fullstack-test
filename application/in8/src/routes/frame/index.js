import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import * as Styled from "./styles";

import { ReactComponent as LogoIcon } from "../../assets/svg/logo-in8-dev.svg";
import { ReactComponent as TopPageIcon } from "../../assets/svg/topo-pag.svg";

import DesktopBanner from "../../assets/images/index-image.jpg";
import MobileBanner from "../../assets/images/index-image-mobile.jpg";
import DesktopFooter from "../../assets/images/rodape-desktop.jpg";
import MobileFooter from "../../assets/images/rodape-mobile.jpg";

import Menu from "../../components/menu";

import useWindowDimensions from "../../utils/getWindowSize";

function Frame({ children }) {
  const [showScrollingToTop, setShowScrollingToTop] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const { height, width } = useWindowDimensions();

  const headerRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    setBannerHeight(headerRef.current.offsetHeight);
    setFooterHeight(footerRef.current.offsetHeight);
  }, [width, height]);

  useEffect(() => {
    window.addEventListener("scroll", windowScroolListener);
    return () => {
      window.removeEventListener("scroll", windowScroolListener);
    };
  });

  const windowScroolListener = e => {
    const bodyOffset = document.body.getBoundingClientRect();
    const scrollY = bodyOffset.top * -1;

    setShowScrollingToTop(scrollY > 100);
  };

  const linksMenu = [
    {
      label: "cadastro",
      href: "#cadastro",
    },
    {
      label: "lista",
      href: "#lista",
    },
    {
      label: "sobre mim",
      href: "#sobreMim",
    },
  ];

  return (
    <>
      <Styled.Header height={bannerHeight}>
        <Styled.Bg>
          <Styled.ImageSource
            media="(min-width: 768px)"
            srcSet={DesktopBanner}
            loading="lazy"
          />
          <Styled.Image
            src={MobileBanner}
            alt="Banner"
            loading="lazy"
            onLoad={({ target: img }) => setBannerHeight(img.offsetHeight)}
            ref={headerRef}
          />
        </Styled.Bg>
        <Styled.ContainerMenu>
          <Menu logo={<LogoIcon />} links={linksMenu} />
        </Styled.ContainerMenu>

        <Styled.HeaderContainerText>
          <Styled.HeaderPrimaryText>Estágio</Styled.HeaderPrimaryText>
          <Styled.HeaderSecondaryText>
            Prova de Seleção
          </Styled.HeaderSecondaryText>
        </Styled.HeaderContainerText>
      </Styled.Header>

      <Styled.Main>{children}</Styled.Main>

      {showScrollingToTop && (
        <Styled.ScrollingToTop onClick={() => window.scroll(0, 0)}>
          <TopPageIcon />
        </Styled.ScrollingToTop>
      )}

      <Styled.Footer id="sobreMim" height={footerHeight}>
        <Styled.Bg>
          <Styled.ImageSource
            media="(min-width: 768px)"
            srcSet={DesktopFooter}
            loading="lazy"
          />
          <Styled.Image
            src={MobileFooter}
            alt="Rodapé"
            loading="lazy"
            onLoad={({ target: img }) => setFooterHeight(img.offsetHeight)}
            ref={footerRef}
          />
        </Styled.Bg>
        <Styled.FooterContainerText>
          <Styled.FooterText>
            Fulano Beltrano de Oliveira da Silva
          </Styled.FooterText>
          <Styled.FooterText>fulanobos@gmail.com</Styled.FooterText>
          <Styled.FooterText>(31) 9 9666-1111</Styled.FooterText>
          <Styled.FooterText>Faculdade de Belo Horizonte</Styled.FooterText>
        </Styled.FooterContainerText>
      </Styled.Footer>
    </>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
