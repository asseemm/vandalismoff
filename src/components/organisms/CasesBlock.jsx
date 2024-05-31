import React, { useState, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import useContentful from '@/useContentful';

const ReactPlayerLazy = lazy(() => import('react-player'));

const BlockStyle = styled.div`
    max-width: 100%;
    height: auto; 
    padding: 100px 10%;

    @media screen and (max-width: 650px) {
        padding: 50px 10%;
    }
`;

const BlockContent = styled(Slider)`
  .slick-slide {
    padding: 0px;
  }
`;

const CaseCard = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
`;

const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // width: 100%;
    // padding: 1%;
    padding-bottom: 3%;
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

    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`;

const CaseText = styled.p`
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 30px;

    @media screen and (max-width: 1650px) {
        font-size: 18px;
        line-height: 26px;
    }

    @media screen and (max-width: 1350px) {
        font-size: 16px;
        line-height: 24px;
        margin-top: 20px;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 20px;
        margin-top: 20px;
    }

    @media screen and (max-width: 420px) {
        font-size: 12px;
        line-height: 16px;
        margin-top: 20px;
    }
`;


const CasesBlock = () => {
    const [isClient, setIsClient] = useState(false);
    const [cases, setCases] = useState([]);
    const { getCases } = useContentful();

    useEffect(() => {
      setIsClient(true);
      getCases().then((data) => setCases(data));
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <BlockStyle>
        <BlockContent {...settings}>
          {cases.map((caseItem, index) => (
            <CaseCard key={index}>
              <CardContent>
                <CaseVideo>
                  {isClient && (
                     <Suspense fallback={<div>Loading...</div>}>
                     <ReactPlayerLazy 
                        url="https://youtu.be/_eJGenpofTw"
                        controls 
                        width='100%'
                        height='100%'
                        light={true}
                      />
                    </Suspense>
                 )}
                </CaseVideo>
                <CaseInfo>
                  <BlockTitle title={caseItem.title} description={caseItem.subtitle}></BlockTitle>
                  <CaseText>{caseItem.text}</CaseText>
                </CaseInfo>
              </CardContent>
            </CaseCard>
          ))}
        </BlockContent>
      </BlockStyle>
    );
  }

  export default CasesBlock;