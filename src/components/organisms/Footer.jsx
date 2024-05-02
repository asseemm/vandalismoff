import React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';


const FooterStyle = styled.footer`
  width: 100%;
  background-color: #804988;
  color: #fff;
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
    // flex-wrap: wrap;
  gap: 15px;
  justify-content: left;
  }
`;

const FooterLink = styled.a`
  font-size: 16px;
  font-family: 'Jost', sans-serif;
  color: #fff;
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
const SocialIcons = styled.div`
    width: 35px;
    height: 35px;
    background-color: #6C3E73;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
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
                <FooterLink href="#">Главная</FooterLink>
                <FooterLink href="#">Наши кейсы</FooterLink>
              </FooterLinkColumn>
              <FooterLinkColumn>
                <FooterLink href="#">Новости</FooterLink>
                <FooterLink href="#">Кто мы?</FooterLink>
              </FooterLinkColumn>
              <FooterLinkColumn>
                <FooterLink href="#">Наши цели</FooterLink>
                <FooterLink href="#">Почему мы?</FooterLink>
              </FooterLinkColumn>
              <FooterLinkColumn>
                <FooterLink href="#">Наша команда</FooterLink>
                <FooterLink href="#">Соц опросы</FooterLink>
              </FooterLinkColumn>
            </FooterLinks>
            <FooterLinkColumnGray>
              <FooterLink href="#">Контакты</FooterLink>
                <FooterGrayLink >+7(707)49696</FooterGrayLink>
                <FooterGrayLink >@hgjghjhj</FooterGrayLink>
              </FooterLinkColumnGray>
          </FooterInfo>
          <FooterGrayLine></FooterGrayLine>
          <FooterBottom>
          <Text fontSize={'20px'} color={'#FFFFFF'} justifycontent={'start'} fontFamily={'Jost'}>ZhanaAdamdar</Text>
          <SocialIconContent>
            <SocialIcons>
              <SocialIconSvg>
                <svg viewBox="0 0 30.667 30.667" fill="#ffffff" stroke="#ffffff"> <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path></svg>
              </SocialIconSvg>
            </SocialIcons>
            <SocialIcons>
              <SocialIconSvg>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path></svg>
              </SocialIconSvg>
            </SocialIcons>
            <SocialIcons>
              <SocialIconSvg>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z" fill="#ffffff"></path> <path d="M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z" fill="#ffffff"></path> <path d="M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z" fill="#ffffff"></path> <path d="M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z" fill="#ffffff"></path> </g></svg>
              </SocialIconSvg>
            </SocialIcons>
          </SocialIconContent>
          </FooterBottom>
      </FooterContent>
    </FooterStyle>
  );
}

export default Footer;
