import React from 'react';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  max-width: 100%;
  widh: 100%;
  height: auto;
  padding: 20px;
`;

export const NavbarStyle = styled.ul`
  display: flex;
  gap: 30px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <NavbarStyle>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </NavbarStyle>
      </nav>
    </HeaderStyle>
  );
}

export default Header;