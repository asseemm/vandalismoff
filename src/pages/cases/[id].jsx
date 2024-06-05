import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import DefaultLayout from "@/components/templates/defaultLayout";
import Header from "@/components/organisms/Header";
import BlockTitle from '@/components/atoms/BlockTitle';

import dynamic from 'next/dynamic';

const ReactPlayerLazy = dynamic(() => import('react-player'), { ssr: false });

const CaseContainer = styled.div`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;

  @media screen and (max-width: 650px) {
    padding: 50px 10%;
  }
`;

const CaseCont = styled.div`
  padding: 0 10%;

  @media screen and (max-width: 1050px) {
    padding: 0;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 30px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 600px;

  @media screen and (max-width: 1050px) {
    height: 400px;
  }

  @media screen and (max-width: 650px) {
    height: 250px;
  }
`;

const CaseInfo = styled.div`
  padding: 5% 0;
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
        <CaseCont>
          <VideoContainer>
            <ReactPlayer
              url={caseVideo}
              controls
              width='100%'
              height='100%'
              light={false}
            />
          </VideoContainer>
          <CaseInfo>
            <BlockTitle title={caseTitle} description={caseSubtitle} />
            <Text>{documentToReactComponents(caseText)}</Text>
          </CaseInfo>
        </CaseCont>
      </CaseContainer>
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const client = createClient({
    space: "pkaakjur9k42",
    accessToken: "9Qukq37zHQMy6RCvhjKbPPQnZndOyc3Cfif7LPSheFk",
    host: "preview.contentful.com"
  });

  const entries = await client.getEntries({
    content_type: "cases"
  });

  const paths = entries.items.map((item) => ({
    params: { id: item.sys.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: "pkaakjur9k42",
    accessToken: "9Qukq37zHQMy6RCvhjKbPPQnZndOyc3Cfif7LPSheFk",
    host: "preview.contentful.com"
  });

  let caseItem = null;

  try {
    const entry = await client.getEntry(params.id);
    caseItem = entry || null;
  } catch (error) {
    console.error(`Error fetching caseItem: ${error}`);
  }

  return {
    props: {
      caseItem,
    },
    revalidate: 10,
  };
}
