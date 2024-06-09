import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import useContentful from '@/useContentful';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";
import Image from 'next/image';

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
  height: 45vh;
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
    width: 100%;
    height: 350px;
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
  @media screen and (max-width: 550px) {
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
  @media screen and (max-width: 550px) {
    font-size: 16px;
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
  @media screen and (max-width: 550px) {
    width: 22px;  
    height: 22px; 
  }
`;


const TeamPage = () => {
  const { getTeam } = useContentful();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    getTeam().then(setTeamMembers);
  }, []);

  return (
    <TeamContainer>
      {teamMembers.map(member => (
        <TeamCard key={member.id}>
          <TeamImg>
            <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </TeamImg>
          <CardInfo>
            <CardTitle data-aos="fade-up">{member.name}</CardTitle>
            <CardRole data-aos="fade-up">{member.position}</CardRole>
            <SocialIcons data-aos="fade-up">
              {member.instagram && <SocialIcon as="a" href={member.instagram} target="_blank"><BlackInstagramSVG /></SocialIcon>}
              {member.telegram && <SocialIcon as="a" href={member.telegram} target="_blank"><BlackTelegramSVG /></SocialIcon>}
              {member.email && <SocialIcon as="a" href={`mailto:${member.email}`}><BlackMailSVG /></SocialIcon>}
            </SocialIcons>
          </CardInfo>
        </TeamCard>
      ))}
    </TeamContainer>
  );
};

export default function Team() {
  return (
    <DefaultLayout>
      <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} $displaymenupurple={'none'}/>
      <Content>
        <BlockTitle title="Наша  команда" description="Борцы против вандализма"/>
        <TeamPage />
      </Content>
    </DefaultLayout>
  );
}
