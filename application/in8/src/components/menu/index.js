import React, { useState, useEffect } from "react";

import * as Styled from "./styles";

import { ReactComponent as HamburguerIcon } from "../../assets/svg/hamburguer.svg";

import useWindowDimensions from "../../utils/getWindowSize";

const Menu = ({ logo = "", links = [] }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setIsCollapsed(width <= 768);
    if (isOpenMenu && width > 768) {
      setIsOpenMenu(false);
    }
  }, [width, height, isOpenMenu]);

  const renderLinks = links.map((link, index) => (
    <Styled.Item key={`link_${index}`}>
      <Styled.Link href={link.href} onClick={() => setIsOpenMenu(false)}>
        {link.label}
      </Styled.Link>
    </Styled.Item>
  ));

  return (
    <>
      {isCollapsed && isOpenMenu && (
        <Styled.Overflow onClick={() => setIsOpenMenu(false)} />
      )}
      <Styled.Container collapsed={isCollapsed} isOpenMenu={isOpenMenu}>
        <Styled.ContainerLinks isOpenMenu={isOpenMenu}>
          {isCollapsed && (
            <Styled.Toogle
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              isOpenMenu={isOpenMenu}
            >
              <HamburguerIcon />
            </Styled.Toogle>
          )}

          <Styled.Links isOpenMenu={isOpenMenu}>{renderLinks}</Styled.Links>
        </Styled.ContainerLinks>

        <Styled.ContainerLogo>{logo}</Styled.ContainerLogo>
      </Styled.Container>
    </>
  );
};

export default Menu;
