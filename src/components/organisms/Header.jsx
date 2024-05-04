import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MenuIcon from '@/assets/icon/menu.svg';
import Menu from '@/components/atoms/HeaderMenu';

import { colors } from '../base/colors';

const HeaderStyle = styled.header`
  max-width: 100%;
  widh: 100%;
  height: auto; 
  padding: 60px 10%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 36px;
  font-family: "Rubik Bubbles", system-ui;
  color: ${colors.mainPurple};
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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
        <ToggleButton onClick={toggleMenu}>
          <Image src={MenuIcon} alt="Меню"/>
        </ToggleButton>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      </HeaderContent>
    </HeaderStyle>
  );
}

export default Header;