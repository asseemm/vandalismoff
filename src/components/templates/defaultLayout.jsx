import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

import InstagramIcon from '@/assets/icon/instagramsvg.svg';
import WhatsappIcon from '@/assets/icon/whatsapp.svg';
import TiktokIcon from '@/assets/icon/tiktok.svg';


export const Content = styled.div`
  // padding: 20px 8%;
  // background-color: #f0f0f0;
  min-height: 80vh;
  max-width: 100%;
  // padding-top: 80vh;
`;

export const SocialIcons = styled.div`
  position: fixed;
  display: grid;
  gap: 10px;
  right: 0;
  bottom: 0;
  z-index: 10;
  margin-bottom: 40px;
  margin-right: 10px;
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 70px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #804988;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
`;



const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <SocialIcons>
        <SocialIcon><Image src={WhatsappIcon} alt = 'icons' /> </SocialIcon>
        <SocialIcon style={{'background': '#FFF0D9'}}><Image src={InstagramIcon} alt = 'icons' /> </SocialIcon>
        <SocialIcon><Image src={TiktokIcon} alt = 'icons' /> </SocialIcon>
      </SocialIcons>
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </div>
  );
}

export default DefaultLayout;