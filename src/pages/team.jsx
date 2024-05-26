import React from "react";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";

import Van3 from '@/assets/img/van3.jpeg'

const Content = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 80px 10%;
  padding-top: 20vh;
  padding: 100px 10%;

  @media screen and (max-width: 650px) {
      padding: 40px 10%;
  }
`;

const TeamContainer = styled.div`
  padding: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around left;
  align-items: flex-start;
`;

const TeamCard = styled.div`
  background-color: #ffffff;
//   box-shadow:0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px #8c5c93;   
  width: 300px;
  margin: 20px;
  border-radius: 25px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
font-family : "Jost", sans-serif;
  margin: 20px 0;
  color: #333;
`;

const CardRole = styled.p`
  margin-bottom: 20px;
  color: #666;
  font-family : "Jost", sans-serif;
  margin-bottom: 20%;
`;


const TeamPage = () => {
  const teamMembers = [
    { name: "Джеффри Браун", role: "Главный тренер и директор", image: Van3 },
    { name: "Крис Ричмонд", role: "Тренер и генеральный менеджер", image: Van3 },
    { name: "Крис Ричмонд", role: "Тренер и генеральный менеджер", image: Van3 },
    { name: "Крис Ричмонд", role: "Тренер и генеральный менеджер", image: Van3 },
    { name: "Крис Ричмонд", role: "Тренер и генеральный менеджер", image: Van3 },
    { name: "Дженни Робертс", role: "Тренер", image: Van3 },
  ];

  return (
    <TeamContainer>
      {teamMembers.map(member => (
        <TeamCard key={member.name}>
          <CardImage src={member.image} alt={member.name} />
          <CardTitle>{member.name}</CardTitle>
          <CardRole>{member.role}</CardRole>
        </TeamCard>
      ))}
    </TeamContainer>
  );
}

export default function Team() {
  return (
    <DefaultLayout>
        <Header backgroundcolor={'#804988'} color={'#fff'} displaymenuwhite={'block'} displayMenuPurple={'none'} />
        <Content>
            <BlockTitle title="Наша команда" description="Все активисты команды ВандализмOFF" />
            <TeamPage />
        </Content>
    </DefaultLayout>
  );
}
