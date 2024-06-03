import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import BlockTitle from '../atoms/BlockTitle';
import Straight from '@/assets/img/Straight.png';
import Left from '@/assets/img/Left.png';
import Right from '@/assets/img/Right.png';
import Up from '@/assets/img/Up.png';
import Down from '@/assets/img/Down.png';
import UpLeft from '@/assets/img/UpLeft.png';
import UpRight from '@/assets/img/UpRight.png';
import DownLeft from '@/assets/img/DownLeft.png';
import DownRight from '@/assets/img/DownRight.png';

import Member1 from '@/assets/img/Member1.png';
import Member2 from '@/assets/img/Member2.png';
import Member3 from '@/assets/img/Member3.png';
import Member4 from '@/assets/img/Member4.png';
import Member5 from '@/assets/img/Member5.png';
import Member6 from '@/assets/img/Member6.png';

const Block = styled.div`
  padding: 100px 10%;
`;

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CentralFigure = styled.div`
  width: 500px; 
  height: 500px;
  overflow: hidden;
  position: relative;
  transition: all 0.7s ease;
`;

const MemberIcon = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 5px solid #804988; 
`;

const positions = [
  { top: '30%', left: '80%', transform: 'translate(-50%, -50%)' }, // Top
  { top: '50%', left: '90%', transform: 'translate(-50%, -50%)' }, // Right
  { top: '70%', left: '80%', transform: 'translate(-50%, -50%)' }, // Bottom-Right
  { top: '70%', left: '20%', transform: 'translate(-50%, -50%)' }, // Bottom-Left
  { top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }, // Left
  { top: '30%', left: '20%', transform: 'translate(-50%, -50%)' }, // Top-Left
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
        <CentralFigure>
          <Image src={centralImage} alt="Central Figure" fill sizes="(max-width: 600px) 100vw, 600px" style={{ objectFit: 'cover' }} priority />
        </CentralFigure>
        {positions.map((pos, index) => (
          <MemberIcon key={index} style={pos}>
            <Image src={memberImages[index]} alt={`Member ${index + 1}`} fill sizes="(max-width: 80px) 100vw, 80px" style={{ objectFit: 'cover' }} priority />
          </MemberIcon>
        ))}
      </TeamContainer>
    </Block>
  );
};

export default Team;
