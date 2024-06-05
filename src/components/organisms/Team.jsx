import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import BlockTitle from '../atoms/BlockTitle';
import Straight from '@/assets/img/StraightA.png';
import Left from '@/assets/img/LeftA.png';
import Right from '@/assets/img/RightA.png';
import Up from '@/assets/img/StraightA.png';
import Down from '@/assets/img/DownA.png';
import UpLeft from '@/assets/img/UpLeftA.png';
import UpRight from '@/assets/img/UpRightA.png';
import DownLeft from '@/assets/img/DownLeftA.png';
import DownRight from '@/assets/img/DownRightA.png';

import Member1 from '@/assets/img/Member2.png';
import Member2 from '@/assets/img/Member3.png';
import Member3 from '@/assets/img/Member1.png';
import Member4 from '@/assets/img/Member4.png';
import Member5 from '@/assets/img/Member5.png';
import Member6 from '@/assets/img/Member6.png';
import Vectors from '@/assets/img/vectorsBack.png';

const Block = styled.div`
  position: relative;
  padding: 100px 10%;
  padding-top: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 650px){
    padding: 60px 10%;
    margin-bottom: 0px;
  }
`;

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px){
    justify-content: space-between;
    margin-top: 30px;
    height: auto;
    flex-wrap: wrap;
  }
`;

const CentralFigure = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
  overflow: hidden;
  margin-bottom: -200px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.5s ease;
  }

  @media screen and (max-width: 1350px){
    width: 480px;
    height: 480px;
  }

  @media screen and (max-width: 1150px){
    width: 380px;
    height: 380px;
  }

  @media screen and (max-width: 900px){
    width: 320px;
    height: 320px;
  }

  @media screen and (max-width: 650px){
    display: none;
  }
`;

const MemberIcon = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 5px solid #804988; 

  cursor: pointer;
  transition: all 0.3s linear;
  animation: bounce 2s ease-in-out infinite;

  &:hover{
    animation: bounce 1s ease-in-out infinite;
  }


  @media screen and (max-width: 1550px){
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 1350px){
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 650px){
    position: static;
    border: 2px solid #804988; 
    width: 90px;
    height: 90px;
    margin: 10px 0;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const More = styled.a`
  position: absolute;
  right: 10%;
  bottom: 0;
  font-family: Jost;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: #804988;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover{
    gap: 30px;
    margin-right: -10px;
    transform: scale(1.05);
  }

  @media (max-width: 650px){
    font-size: 18px;
    svg{
      width: 40px;
    }
  }
`;

const Back = styled(Image)`
  position: absolute;
  // top: 5%;
  // right: 10%;
  bottom: 5%;

  @media (max-width: 1650px){
    width: 100%;
  }

  @media (max-width: 650px){
    display: none;
  }
`;


const positions = [
  { top: '10%', left: '85%', transform: 'translate(-50%, -50%)' }, // Top
  { top: '50%', left: '90%', transform: 'translate(-50%, -50%)' }, // Right
  { top: '70%', left: '75%', transform: 'translate(-50%, -50%)' }, // Bottom-Right
  { top: '80%', left: '10%', transform: 'translate(-50%, -50%)' }, // Bottom-Left
  { top: '40%', left: '0%', transform: 'translate(-50%, -50%)' }, // Left
  { top: '20%', left: '15%', transform: 'translate(-50%, -50%)' }, // Top-Left
];

const images = [Up, Right, DownRight, DownLeft, Left, UpLeft];

const memberImages = [Member1, Member2, Member3, Member4, Member5, Member6];

const Team = () => {
  const [centralImage, setCentralImage] = useState(Straight);
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    if (Math.abs(clientX - centerX) < width / 6 && Math.abs(clientY - centerY) < height / 6) {
      setCentralImage(Straight);
    } else if (clientY < centerY && Math.abs(clientX - centerX) < width / 6) {
      setCentralImage(Up);
    } else if (clientY > centerY && Math.abs(clientX - centerX) < width / 6) {
      setCentralImage(Down);
    } else if (clientX < centerX && Math.abs(clientY - centerY) < height / 6) {
      setCentralImage(Left);
    } else if (clientX > centerX && Math.abs(clientY - centerY) < height / 6) {
      setCentralImage(Right);
    } else if (clientX < centerX && clientY < centerY) {
      setCentralImage(UpLeft);
    } else if (clientX > centerX && clientY < centerY) {
      setCentralImage(UpRight);
    } else if (clientX < centerX && clientY > centerY) {
      setCentralImage(DownLeft);
    } else if (clientX > centerX && clientY > centerY) {
      setCentralImage(DownRight);
    }
  };

  const handleMouseLeave = () => {
    setCentralImage(Straight);
  };

  return (
    <Block>
      <BlockTitle title="Наша команда" description="Это лидер нашей команды - Акерке" />
      <TeamContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={containerRef}>
        <Back src={Vectors} />
        <CentralFigure data-aos="fade-up">
          <Image src={centralImage} alt="Central Figure" fill sizes="(max-width: 600px) 100vw, 600px" style={{ objectFit: 'contain' }} priority />
        </CentralFigure>
        {positions.map((pos, index) => (
          <MemberIcon key={index} style={pos} data-aos="fade-up">
            <Image src={memberImages[index]} alt={`Member ${index + 1}`} fill sizes="(max-width: 80px) 100vw, 80px" style={{ objectFit: 'cover' }} priority />
          </MemberIcon>
        ))}
      </TeamContainer>
      <More href="/team" data-aos="fade-up">
        Все участники
        <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807612 39.9792 0.807612 39.3934 1.3934C38.8076 1.97918 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z" fill="#804988"/>
        </svg>
      </More>
    </Block>
  );
};

export default Team;
