import React from 'react';
import styled from 'styled-components';
import VideoLink from "@/assets/video/van.mp4";
import Image from 'next/image';

import CircleBtn from '@/assets/img/circle_btn.png';
import CircleIn from '@/assets/img/incircle.png';

const BlockStyle = styled.div`
  max-width: 100%;
  height: auto; 
`;

const BlockContent = styled.div`
  height: 100vh;
  width: 100%;
  background: #2b222c30;  

  @media screen and (max-width: 1180px){
    height: 90vh;
  }

  @media screen and (max-width: 880px){
    height: 80vh;
  }

  @media screen and (max-width: 550px){
    height: 64vh;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media screen and (max-width: 1180px){
    height: 90vh;
  }

  @media screen and (max-width: 880px){
    height: 80vh;
  }

  @media screen and (max-width: 550px){
    height: 64vh;
  }
`;

const MainContent = styled.div`
  position: relative;
  z-index: 5;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 16%;

  @media screen and (max-width: 950px){
    padding-top: 24vh;
  }

  @media screen and (max-width: 550px){
    padding-top: 15vh;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-family: Jost;
  font-size: 90px;
  font-weight: 600;
  line-height: 100px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 1680px){
    font-size: 64px;
  }

  @media screen and (max-width: 950px){
    font-size: 50px;
  }

  @media screen and (max-width: 550px){
    font-size: 32px;
  }
`;

const HInfo = styled.div`
  display: flex;
  margin-top: 50px;

  @media screen and (max-width: 950px){
    margin-top: 20px;
  }

  @media screen and (max-width: 550px){
    margin-top: 0px;
  }
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 950px){
    font-size: 20px;
  }

  @media screen and (max-width: 550px){
    font-size: 16px;
    line-height: 24px;

    br{
      display: none;
    }
  }
`;

const TextLine = styled.div`
  width: 30px;
  height: 1px;
  background-color: #fff;
  margin-right: 20px;
  margin-top: 10px;
`;

const MainBlock = () => {
  return (
    <BlockStyle>
      <BlockContent>
        <VideoBackground autoPlay loop muted>
          <source src={VideoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
        <MainContent>
          <Title>ВандализмOFF</Title>
          <HInfo> 
            <TextLine />
            <Subtitle>Группа активистов молодежного <br /> движения "Жана Адамдар"</Subtitle>
          </HInfo>
            <a href="/">
                <div className='circle-btn'></div>
            </a>
        </MainContent>
      </BlockContent>
    </BlockStyle>
  );
}

export default MainBlock;