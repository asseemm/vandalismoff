import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@/components/atoms/HeaderMenu';
import { MenuSVG } from '@/assets/icon/Menu';
import { MenuWhite} from '@/assets/icon/MenuWhite';

import { colors } from '../base/colors';

const HeaderStyle = styled.header`
  max-width: 100%;
  widh: 100%;
  height: auto; 
  padding: 60px 10%;
  background-color: ${({ backgroundcolor }) => (backgroundcolor ? backgroundcolor : 'transparent')};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 36px;
  font-family: "Rubik Bubbles", system-ui;
  color: ${({ color }) => (color ? color : colors.mainPurple)};
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MenuPurple = styled.div`
  display: ${({ displayMenuPurple }) => (displayMenuPurple ? displayMenuPurple : 'block')};
`;

const MenuWhiteIcon = styled.div`
  display:  ${({ displaymenuwhite }) => (displaymenuwhite ? displaymenuwhite : 'none')}; 
`;

const Header = ({ backgroundcolor, color, displayMenuPurple, displaymenuwhite }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyle backgroundcolor={backgroundcolor}>
      <HeaderContent>
        <Logo color={color}>ВандализмOFF</Logo>
        <ToggleButton onClick={toggleMenu}>
          {/* <Image src={MenuIcon} alt="Меню"/> */}
          <MenuPurple displayMenuPurple={displayMenuPurple}><MenuSVG /></MenuPurple>
          <MenuWhiteIcon displaymenuwhite={displaymenuwhite}><MenuWhite /></MenuWhiteIcon>
        </ToggleButton>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      </HeaderContent>
    </HeaderStyle>
  );
}

export default Header;