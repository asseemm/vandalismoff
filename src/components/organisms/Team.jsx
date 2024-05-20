import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Straight from '@/assets/img/Straight.png';
import Left from '@/assets/img/Left.png';
import Right from '@/assets/img/Right.png';
import Up from '@/assets/img/Up.png';

import Text from '../atoms/Text';

const Block = styled.div`
   padding: 100px 10%;
`;

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CentralFigure = styled.div`
  width: 700px; 
  height: 500px;
  overflow: hidden;
  position: relative;
  transition: transform 1s ease-in-out; 
`;

const MemberIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 5px solid #804988; 
`;

const Team = () => {
  const [centralImage, setCentralImage] = useState(Straight);
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

    if (distance < 50) {
      setCentralImage(Straight);
    } else if (clientX < centerX && Math.abs(clientY - centerY) < height / 4) {
      setCentralImage(Left);
    } else if (clientX > centerX && Math.abs(clientY - centerY) < height / 4) {
      setCentralImage(Right);
    } else if (clientY < centerY) {
      setCentralImage(Up);
    } else {
      setCentralImage(Straight);
    }
  };

  const handleMouseLeave = () => {
    setCentralImage(Straight);
  };

  return (
    <Block>
      <Text textransform={'uppercase'} fontFamily={'Jost'}  fontWeight={'bold'} fontSize={'50px'} color={'#804988'} textalign="center">Our team</Text>
      <TeamContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={containerRef}>
        <CentralFigure>
          <Image src={centralImage} alt="Central Figure" layout="fill" objectFit="cover" />
        </CentralFigure>
        <MemberIcon style={{ top: '65%', left: '2%', transform: 'translateY(-50%)' }}>
          <Image src={Straight} alt="Member 1" layout="fill" objectFit="cover" />
        </MemberIcon>
        <MemberIcon style={{ top: '15%', left: '10%' }}>
          <Image src={Straight} alt="Member 2" layout="fill" objectFit="cover" />
        </MemberIcon>
        <MemberIcon style={{ top: '85%', left: '10%' }}>
          <Image src={Straight} alt="Member 3" layout="fill" objectFit="cover" />
        </MemberIcon>
        <MemberIcon style={{ top: '65%', right: '2%', transform: 'translateY(-50%)' }}>
          <Image src={Straight} alt="Member 4" layout="fill" objectFit="cover" />
        </MemberIcon>
        <MemberIcon style={{ top: '15%', right: '10%' }}>
          <Image src={Straight} alt="Member 5" layout="fill" objectFit="cover" />
        </MemberIcon>
        <MemberIcon style={{ top: '85%', right: '10%' }}>
          <Image src={Straight} alt="Member 6" layout="fill" objectFit="cover" />
        </MemberIcon>
      </TeamContainer>
    </Block>
  );
};

export default Team;
