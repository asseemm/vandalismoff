import React, { useState } from 'react';
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";
import Image from 'next/image';

import { BlackTelegramSVG } from "@/assets/icon/BlackTelegramSVG";
import { BlackInstagramSVG } from "@/assets/icon/BlackInstagramSVG";
import { BlackMailSVG } from "@/assets/icon/BlackMailSVG";
import Mem1 from "@/assets/img/akerke2.JPG";
import Mem2 from "@/assets/img/dimash.JPG";
import Mem3 from "@/assets/img/anuar.JPG";
import Mem4 from "@/assets/img/quat.JPG";
import Mem5 from "@/assets/img/abuka.JPG";
import Mem6 from "@/assets/img/dias.JPG";
import Mem7 from "@/assets/img/zhasya.JPG";
import Mem8 from "@/assets/img/shahi.PNG";


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
  justify-content: left;
  align-items: flex-start;
  height: auto;
  margin-top: 5%;
  gap: 4%;
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
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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

const teamData = [
  {
    id: '1',
    name: 'Акерке Акпанбаева',
    position: 'Тимлидер',
    image: Mem1,
    instagram: 'https://www.instagram.com/akerke_akhpanbayeva/',
    telegram: 'https://t.me/akerke_a05',
    email: 'john@example.com'
  },
  {
    id: '2',
    name: 'Курбанбаева Шахерезада',
    position: 'Заместитель Тимлидера',
    image: Mem8,
    instagram: 'https://www.instagram.com/_shakherezaada_/',
    telegram: 'https://t.me/Shaherizadaa',
    email: 'jane@example.com'
  },
  {
    id: '3',
    name: 'Кенжалин Динмухамед',
    position: 'Кадровик',
    image: Mem2,
    instagram: 'https://www.instagram.com/kenzhal.in',
    telegram: 'https://t.me/Kenzhal_in',
    email: 'jane@example.com'
  },
  {
    id: '4',
    name: 'Ануарбек Унайбеков',
    position: 'Мобилограф',
    image: Mem3,
    instagram: 'https://www.instagram.com/_hizoka__/',
    telegram: 'https://t.me/Hizoka_18',
    email: 'emily@example.com'
  },
  {
    id: '5',
    name: 'Қуат Сатыпалдыев',
    position: 'Участник',
    image: Mem4,
    instagram: 'https://www.instagram.com/kuat_satybaldievv/',
    telegram: 'https://t.me/djangopy3',
    email: 'john@example.com'
  },
  {
    id: '6',
    name: 'Әбілқайыр Құрманбай',
    position: 'Участник',
    image: Mem5,
    instagram: 'https://www.instagram.com/abukacot/',
    telegram: 'https://t.me/Arnoldma4o',
    email: 'john@example.com'
  },
  {
    id: '7',
    name: 'Диас Елтаев',
    position: 'Участник',
    image: Mem6,
    instagram: 'https://www.instagram.com/linkon__2/',
    telegram: 'https://t.me/Dico2289',
    email: 'john@example.com'
  },
  {
    id: '8',
    name: 'Жасмин Баймаганбетова',
    position: 'Участник',
    image: Mem7,
    instagram: 'https://www.instagram.com/xrenixw',
    telegram: 'https://t.me/xrenixw',
    email: 'john@example.com'
  },
];

const TeamPage = () => {
  const [teamMembers] = useState(teamData);

  return (
    <TeamContainer>
      {teamMembers.map(member => (
        <TeamCard key={member.id}>
          <TeamImg>
            <Image src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
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
        <BlockTitle title="Наша команда" description="Борцы против вандализма"/>
        <TeamPage />
      </Content>
    </DefaultLayout>
  );
}
