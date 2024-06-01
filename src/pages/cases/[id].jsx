import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import Header from "@/components/organisms/Header";
import ReactPlayer from 'react-player/lazy'; // Используем lazy версию для оптимизации загрузки

const CaseContainer = styled.div`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;

  @media screen and (max-width: 650px) {
    padding: 50px 10%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 400px;
`;

export default function Case({ caseItem }) {
  const router = useRouter();

  if (!router.isFallback && !caseItem) {
    return <div>404 - Case not found</div>;
  }

  if (!caseItem) {
    return <div>Loading...</div>;
  }

  const { caseTitle, caseSubtitle, caseText, caseVideo } = caseItem.fields;

  return (
    <DefaultLayout>
      <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} $displaymenupurple={'none'}/>
      <CaseContainer>
        <VideoContainer>
          <ReactPlayer
            url={caseVideo}
            controls
            width='100%'
            height='100%'
            playing={true}
            light={false}
          />
        </VideoContainer>
        <Title>{caseTitle}</Title>
        <Subtitle>{caseSubtitle}</Subtitle>
        <Text>{caseText?.content?.[0]?.content?.[0]?.value}</Text>
      </CaseContainer>
    </DefaultLayout>
  );
}
