import React from 'react';
import styled from 'styled-components';

export const Logo = styled.p`
  font-size: 60px;
  font-family: "Rubik Bubbles", system-ui;
  // color: #fff;
  width: 60%; /* исправлено */
`;
export const FooterContent = styled.div`
  display: flex;
`
export const FooterLink = styled.div`
  display: block;
  font-size: 12px;
  width: 40%;
  font-family: 'Jost';
  margin: 5px; /* исправлено */
`

export const FooterStyle = styled.footer`
  max-width: 100%;
  height: auto;
  background-color: #804988;
  color: #fff;
  padding: 40px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <Logo>ВандализмOFF</Logo>
        <FooterLink>
          <p>gоg</p>
          <p>gdg</p>
        </FooterLink>
      </FooterContent>
    </FooterStyle>
  );
}

export default Footer;
