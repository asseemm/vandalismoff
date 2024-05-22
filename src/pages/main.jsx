import React from "react";
import styled from 'styled-components';
import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";
import ProsBlock from "@/components/organisms/ProsBlock";
import Questions from "@/components/organisms/Questions";
import Feedback from "@/components/organisms/Feedback";
import News from "@/components/organisms/News";
// import Team from "@/components/organisms/Team";

const Content = styled.section`
  // padding-top: 80vh;
`;

const MainBlock = styled.div`
  padding-top: 100vh;

  @media screen and (max-width: 800px){
    padding-top: 40vh;
  }
`;

export default function Main() {
  return (
    <Content>
      <MainBlock />
      <AboutBlock />
      <GoalsBlock />
      <CasesBlock />
      {/* <Team/> */}
      <News/>
      <ProsBlock />
      <Questions />
      <Feedback />
    </Content>
  );
}
