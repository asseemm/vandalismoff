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
  height: 50vh;
  margin-top: 5%;
`;

const TeamCard = styled.div`
//    display: grid;
  position: relative;
  width: 22%;
  height: 100%;
  background-color: #ccc;
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
  // box-shadow: 1px 1px 3px 1px #e2d7e7`;

const CardTitle = styled.h3`
  font-family: "Jost", sans-serif;
  margin: 10px 0;
  color: #333;
`;

const CardRole = styled.p`
  color: #666;
  font-family: "Jost", sans-serif;
  margin-bottom: 15px;
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
`;


const TeamPage = () => {
  return (
    <TeamContainer>
      <TeamCard key="Наг Рейнольдс">
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
      <TeamCard key="Наг Рейнольдс">
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
      <TeamCard key="Наг Рейнольдс">
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
      <TeamCard key="Наг Рейнольдс">
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
