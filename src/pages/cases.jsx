import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";
import useContentful from '@/useContentful';
import Link from 'next/link';

const ReactPlayerLazy = dynamic(() => import('react-player'), { ssr: false });

const Content = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 80px 10%;

  @media screen and (max-width: 650px) {
    padding: 40px 10%;
  }
`;

const BlockContent = styled.div`
  margin-top: 100px;

  @media screen and (max-width: 650px) {
    margin-top: 40px;
  }
`;

const CaseCard = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  
  &:hover .case-link{
    transform: scale(1.2);
    margin-right: -10px;  
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 100px;

  @media screen and (max-width: 650px) {
    padding-bottom: 20px;
  }
`;

const CaseVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: auto;
  background: #9B889DA6;
  border-radius: 30px;
  margin: 0 5px;
  border-radius: 15px;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 400px;
    margin: 0;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 650px) {
    height: 220px;
    margin-bottom: 10px;
  }
`;

const CaseInfo = styled.div`
  width: 46%;
  padding: 20px 0px;

  @media screen и (max-width: 1250px) {
    width: 100%;
  }
`;

const CaseText = styled.p`
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen и (max-width: 1650px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media screen и (max-width: 1350px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
  }

  @media screen и (max-width: 650px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 20px;
  }

  @media screen и (max-width: 420px) {
    font-size: 12px;
    line-height: 16px;
    margin-top: 20px;
  }
`;

const CaseLink= styled.a`
  font-family: Jost;
  font-size: 18px;
  color: #804988;
  text-transform: uppercase;
  float: right;
  transition: all 0.3s ease;

  @media screen и (max-width: 550px) {
    display: none;
  }
`;

export default function Cases() {
  const [cases, setCases] = useState([]);
  const { getCases } = useContentful();

  useEffect(() => {
    getCases().then((data) => setCases(data));
  }, []);

  return (
    <DefaultLayout>
      <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} $displaymenupurple={'none'}/>
      <Content>
        <BlockTitle title="Наши кейсы" description="Тут собрана вся наша проделанная работа" />
        <BlockContent>
          {cases.length > 0 ? cases.map((caseItem, index) => (
            <CaseCard key={index}>
              <CardContent>
                <CaseVideo data-aos="fade-up">
                  <Suspense fallback={<div>Loading...</div>}>
                    <ReactPlayerLazy
                      url={caseItem.video}
                      controls
                      width='100%'
                      height='100%'
                      light={true}
                    />
                  </Suspense>
                </CaseVideo>
                <CaseInfo>
                  <BlockTitle title={caseItem.title} description={caseItem.subtitle}></BlockTitle>
                  <CaseText data-aos="fade-up">{caseItem.shortText}</CaseText>
                  <Link href={`/cases/${caseItem.id}`} legacyBehavior>
                    <CaseLink className='case-link' data-aos="fade-up">
                      <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807612 39.9792 0.807612 39.3934 1.3934C38.8076 1.97918 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z" fill="#804988"/>
                      </svg>
                    </CaseLink>
                  </Link>
                </CaseInfo>
              </CardContent>
            </CaseCard>
          )) : <div>Loading cases...</div>}
        </BlockContent>
      </Content>
    </DefaultLayout>
  );
}
