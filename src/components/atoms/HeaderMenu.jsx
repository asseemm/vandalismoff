import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { CloseSVG } from '@/assets/icon/CloseSVG';

import { colors } from '../base/colors';

const MenuStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  height: 100vh;
  background-color: ${colors.mainPurple};
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  @media screen and (max-width: 700px){
    width: 80%;
    transition: transform 0.6s ease-in-out;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  font-size: 30px;
  margin: 40px 40px 20px 40px;
`;

const MenuContent = styled.ul`
  display: grid;
  padding: 12%;
  float: right;
  width: 70%;
  // height: 100%;
  gap: 2%;

  @media screen and (max-width: 450px){
    // display: block;
    width: 90%;
    gap: 0;
  }
`;

const MenuItem = styled.li`
  width: 100%;
`;

const ItemLink = styled(Link)`
  padding: 20px;
  float: right;
  font-size: 24px;
  font-family : "Jost", sans-serif;
  color: ${colors.white};
  font-weight: 400;
  text-transform: uppercase;

  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 950px){
    font-size: 20px;
  }

  @media screen and (max-width: 450px){
    font-size: 18px;
  }
`;

const ItemNum = styled.p`
  font-size: 12px;
  font-family : "Jost", sans-serif;
  color: ${colors.white};
  font-weight: 400;
  text-transform: uppercase;
`;

const HeaderMenu = ({ isOpen, onClose }) => {
  return (
    <MenuStyle $isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <CloseSVG />
      </CloseButton>
      <MenuContent>
        <MenuItem><ItemLink href="/">Главная<ItemNum>01</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/about">Кто мы?<ItemNum>02</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/#goalsblock">Наши цели<ItemNum>03</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/cases">Наши кейсы<ItemNum>04</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/news">Новости<ItemNum>05</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/#prosblock">Почему мы?<ItemNum>06</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/team">Наша команда<ItemNum>07</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="/contact">Контакты<ItemNum>08</ItemNum></ItemLink></MenuItem>
      </MenuContent>
    </MenuStyle>
  );
};

export default HeaderMenu;