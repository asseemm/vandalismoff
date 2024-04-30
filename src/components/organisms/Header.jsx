import React, {useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MenuIcon from '@/assets/icon/menu.svg'

export const HeaderStyle = styled.header`
  max-width: 100%;
  widh: 100%;
  height: auto;
  padding: 60px 8%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarStyle = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Logo = styled.p`
  font-size: 36px;
  font-family: "Rubik Bubbles", system-ui;
  color: #804988;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  margin: 40px 40px 20px 40px;
`;

export const Menu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 20%;
  height: 100vh;
  background-color: #804988;
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) => isOpen && `
    transform: translateX(0);
  `}

  @media screen and (max-width: 700px){
    width: 80%;
    transition: transform 0.6s ease-in-out;
  }
`;

export const MenuContent = styled.ul`
  padding: 12%;
  float: right;
  width: 70%;
  heidth: 100%;
  display: grid;
  gap: 2%;
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid #fff0d9b0;
  width: 100%;
`;

export const ItemLink = styled.a`
  padding: 20px;
  float: right;
  font-size: 20px;
  font-family : "Jost", sans-serif;
  color: #fff;
  font-weight: 500;
`;


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyle>
      <HeaderContent>
        <Logo>ВандализмOFF</Logo>
        {/* <nav>
          <NavbarStyle>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </NavbarStyle>
        </nav> */}
      <ToggleButton onClick={toggleMenu}>
            <Image src={MenuIcon} alt="Меню"/>
        </ToggleButton>
        <Menu key="menu" $isOpen={isMenuOpen}>
          <CloseButton onClick={toggleMenu}>
            x
          </CloseButton>
          <MenuContent>
            <MenuItem><ItemLink href="#">Главная</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Кто мы?</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Наши цели</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Наши кейсы</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Новости</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Почему мы?</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Наша команда</ItemLink></MenuItem>
            <MenuItem><ItemLink href="#">Контакты</ItemLink></MenuItem>
          </MenuContent>
        </Menu>
      </HeaderContent>
    </HeaderStyle>
  );
}

export default Header;