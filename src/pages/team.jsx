import React from "react";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";
import Image from 'next/image';



import Van3 from '@/assets/img/van3.jpeg'
import { BlackTelegramSVG } from "@/assets/icon/BlackTelegramSVG";
import { BlackInstagramSVG } from "@/assets/icon/BlackInstagramSVG";
import { BlackMailSVG } from "@/assets/icon/BlackMailSVG";


const Content = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;
  @media screen and (max-width: 650px) {
      padding: 40px 10%;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  margin-top: 5%;
  
  
`;

const TeamCard = styled.div`
  position: relative;
  width: 22%;
  height: 50vh;
  background-color: #ccc;
  margin-bottom: 80px;

  @media screen and (max-width: 1100px) {
    height: 40vh;
  }

  @media screen and (max-width: 800px) {
    height: 30vh;
  }
  
  @media screen and (max-width: 750px) {
    width: 30%;
  }

  @media screen and (max-width: 550px) {
    width: 45%;
  }

  @media screen and (max-width: 360px) {
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-top: 20px;
  }
`;

const TeamImg = styled.div`
  width: 100%; 
  height: 100%;
`

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const CardInfo = styled.div`
  position: absolute;
  bottom: -50px;
  background-color: #FFF0D9;
  width: 70%;
  margin: 0px 10%;
  padding: 5%;
  text-align: center;
  border-radius: 3px;
  @media screen and (max-width: 1100px) {
    bottom: -70px;
  }
  @media screen and (max-width: 360px) {
    bottom: -40px;
  }


  `;

const CardTitle = styled.h3`
  font-family: "Jost", sans-serif;
  margin: 10px 0;
  color: #333;
  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }
  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin: 8px 0;
  }
  @media screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

const CardRole = styled.p`
  color: #666;
  font-family: "Jost", sans-serif;
  margin-bottom: 15px;
  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 6px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;
const SocialIcons = styled.div`
  display: flex; 
  justify-content: center;
  gap: 10px;
  padding-bottom: 15px;
  margin-top: 1%;
`;

const SocialIcon = styled.div`
  width: 26px;  
  height: 26px; 
  @media screen and (max-width: 1100px) {
    width: 22px;  
    height: 22px; 
  }

  @media screen and (max-width: 800px) {
    width: 18px;  
    height: 18px; 
  }
  @media screen and (max-width: 500px) {
    width: 14px;  
    height: 14px; 
  }

  @media screen and (max-width: 360px) {
    width: 22px;  
    height: 22px; 
  }
`;


const TeamPage = () => {
  return (
    <TeamContainer>
      <TeamCard key="Наг ">
        <TeamImg>
           <Img src={Van3} alt='img' priority />
        </TeamImg>
        <CardInfo>
            <CardTitle>Наг Рейнольдс</CardTitle>
            <CardRole>Финансовый директор</CardRole>
            <SocialIcons>
              <SocialIcon>
              <BlackTelegramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackInstagramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackMailSVG/>
              </SocialIcon>
            </SocialIcons>
        </CardInfo>
      </TeamCard>
      <TeamCard key=" Рейнольдс">
        <TeamImg>
           <Img src={Van3} alt='img' />
        </TeamImg>
        <CardInfo>
            <CardTitle>Наг Рейнольдс</CardTitle>
            <CardRole>Финансовый директор</CardRole>
            <SocialIcons>
              <SocialIcon>
              <BlackTelegramSVG/>
              </SocialIcon>
              <SocialIcon>
               <BlackInstagramSVG/>
              </SocialIcon>
              <SocialIcon>
               <BlackMailSVG/>
              </SocialIcon>
            </SocialIcons>
        </CardInfo>
      </TeamCard>
      <TeamCard key="Наг Рейльдс">
        <TeamImg>
           <Img src={Van3} alt='img' priority />
        </TeamImg>
        <CardInfo>
            <CardTitle>Наг Рейнольдс</CardTitle>
            <CardRole>Финансовый директор</CardRole>
            <SocialIcons>
              <SocialIcon>
              <BlackTelegramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackInstagramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackMailSVG/>
              </SocialIcon>
            </SocialIcons>
        </CardInfo>
      </TeamCard>
      <TeamCard key="Наг Рейнльдс">
        <TeamImg>
           <Img src={Van3} alt='img' priority />
        </TeamImg>
        <CardInfo>
            <CardTitle>Наг Рейнольдс</CardTitle>
            <CardRole>Финансовый директор</CardRole>
            <SocialIcons>
              <SocialIcon>
              <BlackTelegramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackInstagramSVG/>
              </SocialIcon>
              <SocialIcon>
              <BlackMailSVG/>
              </SocialIcon>
            </SocialIcons>
        </CardInfo>
      </TeamCard>
      {/* Добавьте других членов команды аналогичным образом */}
    </TeamContainer>
  );
};

export default function Team() {
  return (
    <DefaultLayout>
      <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} $displayMenuPurple={'none'}/>
      <Content>
        <BlockTitle title="Наша  команда" description="Борцы против вандализма"/>
        <TeamPage />
      </Content>
    </DefaultLayout>
  );
}
