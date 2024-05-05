import React, { useState } from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';

import Van1 from '@/assets/img/van1.jpg'
import Van2 from '@/assets/img/van2.JPG'
import Van3 from '@/assets/img/van3.jpeg'
import Van4 from '@/assets/img/van5.jpg'


const BlockStyle = styled.div`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;
`;

const BlockContent = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

const AboutInfo = styled.div`
  width: 48%;

  @media screen and (max-width: 1180px){
    width: 100%;
  }
`;

const AboutText = styled.p`
  font-family : "Jost", sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: #222;
  margin-top: 30px;

  @media screen and (max-width: 1450px){
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
  }

  @media screen and (max-width: 550px){
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 16px;
}
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: 2px solid #804988;
  cursor: pointer;
  width: 240px;
  height: 50px;
  border-radius: 30px;
  color: #804988;
  font-size: 18px;
  margin-top: 50px;
  transition: 0.3s all ease;

  &:hover{
    background-color: #804988;
    color: #fff;
  }

  @media screen and (max-width: 550px){
    width: 70%;
    height: 40px;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 15%;
    margin-right: 15%; 
  }
`;

const AboutImages = styled.div`
  width: 48%;
  display: flex;
  flex-wrap: wrap;
  // gap: 20px;
  justify-content: space-between;

  @media screen and (max-width: 1180px){
    width: 100%;
  }
`;

const ImagesColumn = styled.div`
  width: 48%;
`;

const SecondColumn = styled(ImagesColumn)`
  margin-top: 60px;

  @media screen and (max-width: 550px){
    margin-top: 30px;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 260px;
  background-color: #6C3E73;
  border-radius: 16px;
  margin-bottom: 8%;

  @media screen and (max-width: 780px){
    height: 200px;
  }

  @media screen and (max-width: 550px){
    height: 150px;
  }
`;

const AboutImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
`;


const AboutBlock = () => {
  return (
    <BlockStyle>
      <BlockContent>
        <AboutInfo>
          <BlockTitle title="Кто мы?" description="почему вы должны вступить именно в нашу команду"></BlockTitle>
          <AboutText>
            Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании. <br /> 
            Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст. Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании.
            Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании. 
          </AboutText>
          <MoreButton>Больше</MoreButton>
        </AboutInfo>
        <AboutImages>
          <ImagesColumn>
            <AboutImage><AboutImg src={Van3} alt='img'></AboutImg></AboutImage>
            <AboutImage><AboutImg src={Van1} alt='img'></AboutImg></AboutImage>
          </ImagesColumn>
          <SecondColumn>
            <AboutImage><AboutImg src={Van2} alt='img'></AboutImg></AboutImage>
            <AboutImage><AboutImg src={Van4} alt='img'></AboutImg></AboutImage>
          </SecondColumn>
        </AboutImages>
      </BlockContent>
    </BlockStyle>
  );
}

export default AboutBlock;