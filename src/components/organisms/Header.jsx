import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@/components/atoms/HeaderMenu';
import { MenuSVG } from '@/assets/icon/Menu';
import { MenuWhite} from '@/assets/icon/MenuWhite';

import { colors } from '../base/colors';

const HeaderStyle = styled.header`
  position: ${({ $position }) => ($position ? $position : 'relative')};
  max-width: 100%;
  width: 100%;
  height: auto; 
  background-color: ${({ $backgroundcolor }) => ($backgroundcolor ? $backgroundcolor : 'transparent')};
  z-index: 50;
`;

const HeaderContent = styled.div`
  padding: 60px 10%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px){
    padding: 40px 10%;
  }
`;

const Logo = styled.p`
  font-size: 36px;
  font-family: "Rubik Bubbles", system-ui;
  color: ${({ color }) => (color ? color : colors.white)};

  @media screen and (max-width: 700px){
    font-size: 21px;
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
  animation: bounce 2s ease-in-out infinite;

  @media screen and (max-width: 700px){
    width: 30px;

    svg{
      width: 100%;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const MenuPurple = styled.div`
  display: ${({ $displaymenupurple }) => ($displaymenupurple ? $displaymenupurple : 'block')};
`;

const MenuWhiteIcon = styled.div`
  display:  ${({ $displaymenuwhite }) => ($displaymenuwhite ? $displaymenuwhite : 'none')}; 
`;

const Header = ({ $backgroundcolor, color, $displaymenupurple, $displaymenuwhite, $position }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyle $backgroundcolor={$backgroundcolor} $position={$position}>
      <HeaderContent>
        <Logo color={color}>LOGO</Logo>
        <ToggleButton onClick={toggleMenu}>
          {/* <Image src={MenuIcon} alt="Меню"/> */}
          <MenuPurple $displaymenupurple={$displaymenupurple}><MenuSVG /></MenuPurple>
          <MenuWhiteIcon $displaymenuwhite={$displaymenuwhite}><MenuWhite /></MenuWhiteIcon>
        </ToggleButton>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      </HeaderContent>
    </HeaderStyle>
  );
}

export default Header;