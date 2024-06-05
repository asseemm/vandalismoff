import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Menu from '@/components/atoms/HeaderMenu';
import { MenuSVG } from '@/assets/icon/Menu';
import { MenuWhite} from '@/assets/icon/MenuWhite';

import  logo1 from '@/assets/icon/logo1.png';


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
  padding: ${({ $padding }) => ($padding ? $padding : '30px 10%')};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px){
    padding: 40px 10%;
  }
`;
  const Logo = styled.div`
  width: 80px;

  @media screen and (max-width: 3000px){
    width: 100px;
  }
  @media screen and (max-width: 1000px){
         width: 60px;
  }

    @media screen and (max-width: 600px){
      width: 40px;
  }
   @media screen and (max-width: 400px){
    display: none;
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
const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MenuWhiteIcon = styled.div`
  display:  ${({ $displaymenuwhite }) => ($displaymenuwhite ? $displaymenuwhite : 'none')}; 
`;

const Header = ({ $backgroundcolor, color, $displaymenupurple, $displaymenuwhite, $position, $padding }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyle $backgroundcolor={$backgroundcolor} $position={$position}>
      <HeaderContent $padding={$padding} >
        <Logo >
        <Img src={logo1} alt='img' priority />
        </Logo>
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