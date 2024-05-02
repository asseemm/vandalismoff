import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import CloseIcon from '@/assets/icon/close.svg';

const MenuStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  height: 100vh;
  background-color: #804988;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 700px){
    width: 80%;
    transition: transform 0.6s ease-in-out;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  margin: 40px 40px 20px 40px;
`;

const MenuContent = styled.ul`
  padding: 12%;
  float: right;
  width: 70%;
  heidth: 100%;
  display: grid;
  gap: 2%;
`;

const MenuItem = styled.li`
  width: 100%;
`;

const ItemLink = styled.a`
  padding: 20px;
  float: right;
  font-size: 24px;
  font-family : "Jost", sans-serif;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;

  display: flex;
  gap: 10px;
  align-items: center;
`;

const ItemNum = styled.p`
  font-size: 12px;
  font-family : "Jost", sans-serif;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
`;

const HeaderMenu = ({ isOpen, onClose }) => {
  return (
    <MenuStyle isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <Image src={CloseIcon} alt="Меню" />
      </CloseButton>
      <MenuContent>
        <MenuItem><ItemLink href="#">Главная<ItemNum>01</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Кто мы?<ItemNum>02</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Наши цели<ItemNum>03</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Наши кейсы<ItemNum>04</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Новости<ItemNum>05</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Почему мы?<ItemNum>06</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Наша команда<ItemNum>07</ItemNum></ItemLink></MenuItem>
        <MenuItem><ItemLink href="#">Контакты<ItemNum>08</ItemNum></ItemLink></MenuItem>
      </MenuContent>
    </MenuStyle>
  );
};

export default HeaderMenu;