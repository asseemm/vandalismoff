import React from 'react';
import styled from 'styled-components';

export const FooterStyle = styled.footer`
  max-width: 100%;
//   width: 100%;
  height: auto;
  background-color: #804988;
  color: #fff;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy; 2024 Your Company</p>
    </FooterStyle>
  );
}

export default Footer;