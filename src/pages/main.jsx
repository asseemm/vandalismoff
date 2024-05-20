import React from "react";
import styled from 'styled-components';
import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";
import ProsBlock from "@/components/organisms/ProsBlock";
import Questions from "@/components/organisms/Questions";

const Content = styled.section`
  padding-top: 80vh;
`;

export default function Main() {
  return (
    <Content>
      <AboutBlock />
      <GoalsBlock />
      <CasesBlock />
      <ProsBlock />
      <Questions />
    </Content>
  );
}
