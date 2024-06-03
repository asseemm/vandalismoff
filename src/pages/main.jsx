import React from "react";
import styled from 'styled-components';
import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";
import ProsBlock from "@/components/organisms/ProsBlock";
import Questions from "@/components/organisms/Questions";
import Feedback from "@/components/organisms/Feedback";
import News from "@/components/organisms/News";
import MainBlock from "@/components/organisms/MainBlock";
import Team from "@/components/organisms/Team";

import VideoLink from "@/assets/video/van.mp4";

const Content = styled.section`
  // padding-top: 80vh;
`;

export default function Main() {
  return (
    <Content>
      <MainBlock />
      <AboutBlock />
      <GoalsBlock />
      <CasesBlock />
      <Team/>
      <News/>
      <ProsBlock />
      <Questions />
      <Feedback />
    </Content>
  );
}
