import React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

import { colors } from '../base/colors';
import { WhatsappSVG } from '@/assets/icon/WhatsappSVG';
import { InstagramSVG } from '@/assets/icon/InstagramSVG';
import { TiktokSVG } from '@/assets/icon/TiktokSVG';

const FooterStyle = styled.footer`
  width: 100%;
  background-color: ${colors.mainPurple};
  color: ${colors.white};
  display: block;
`;

const FooterContent = styled.div`  
  padding: 50px 8%;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  @media screen and (max-width: 700px){
    display: block;
  }
`;

const Logo = styled.p`
  width: 20%;
  font-size: 30px;
  font-family: "Rubik Bubbles", sans-serif;
  @media screen and (max-width: 1110px){
    font-size: 24px;
  }
  @media screen and (max-width: 980px){
    font-size: 25px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 800px){
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 980px){
    flex-wrap: wrap;
    gap: 50px;
    width: 45%;
    justify-content: left;
  }

  @media screen and (max-width: 750px){
    gap: 45px;
    width: 50%;
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 400px){
    gap: 15px;
    justify-content: left;
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
  font-family: 'Jost', sans-serif;
  color: ${colors.white};
  margin: 5px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 780px){
    font-size: 13px ;
  }
`;

const FooterGrayLink = styled.a`
  font-size: 14px;
  font-family: 'Jost', sans-serif;
  color: #C4C4C4;
`;

const FooterLinkColumnGray = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FooterGrayLine = styled.div`
  width: 100%;
  background-color: #6C3E73;
  height: 2px;
  margin: 20px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialIconContent = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.a`
  width: 35px;
  height: 35px;
  background-color: #6C3E73;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  text-decoration: none;
`;

const SocialIconSvg = styled.div`
  width: 20px;
`;

// Компонент Footer
const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <FooterInfo>
          <Logo>ВандализмOFF</Logo>
          <FooterLinks>
            <FooterLinkColumn>
              <FooterLink href="/main">Главная</FooterLink>
              <FooterLink href="/cases">Наши кейсы</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink href="/news">Новости</FooterLink>
              <FooterLink href="/about">Кто мы?</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink href="/#goalsblock">Наши цели</FooterLink>
              <FooterLink href="/#prosblock">Почему мы?</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink href="/team">Наша команда</FooterLink>
              <FooterLink href="/#questions">Вопросы</FooterLink>
            </FooterLinkColumn>
          </FooterLinks>
          <FooterLinkColumnGray>
            <FooterLink href="/contacts">Контакты</FooterLink>
            <FooterGrayLink href="tel:+770749696">+7(707)49696</FooterGrayLink>
            <FooterGrayLink href="https://t.me/yourusername" target="_blank">@hgjghjhj</FooterGrayLink>
          </FooterLinkColumnGray>
        </FooterInfo>
        <FooterGrayLine />
        <FooterBottom>
          <Text fontSize={'20px'} color={'#FFF'} justifycontent={'start'} fontFamily={'Jost'}>ZhanaAdamdar</Text>
          <SocialIconContent>
            <SocialIcons href="https://wa.me/77057339333" target="_blank">
              <SocialIconSvg>
                <WhatsappSVG />
              </SocialIconSvg>
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/@aru_tm__" target="_blank">
              <SocialIconSvg>
                <InstagramSVG />
              </SocialIconSvg>
            </SocialIcons>
            <SocialIcons href="https://www.tiktok.com/@yourusername" target="_blank">
              <SocialIconSvg>
                <TiktokSVG />
              </SocialIconSvg>
            </SocialIcons>
          </SocialIconContent>
        </FooterBottom>
      </FooterContent>
    </FooterStyle>
  );
}

export default Footer;
