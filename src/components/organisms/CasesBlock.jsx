import React from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Slider from "react-slick";

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
    width: 98%;
    padding: 1%;
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

    @media screen and (max-width: 1250px) {
        width: 100%;
        height: 400px;
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

const Stop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: #804988;

    @media screen and (max-width: 650px) {
        width: 100px;
        height: 100px;
    }
`;

const StopDec = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 10px solid #fff;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 650px) {
        width: 60px;
        height: 60px;
        border: 5px solid #fff;
    }
`;

const StopTriangle = styled.span`
    font-size: 48px;
    color: #fff;
    transform: rotate(30deg);

    @media screen and (max-width: 650px) {
        font-size: 36px;
    }
`;

const CasesBlock = () => {
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
        <CaseCard>
            <CardContent>
            <CaseVideo><Stop><StopDec><StopTriangle>&#9650;</StopTriangle></StopDec></Stop></CaseVideo>
            <CaseInfo>
                <BlockTitle title="Украсили остановку в центре города" description="почему вы должны вступить именно в нашу команду" descWidth="80%"></BlockTitle>
                <CaseText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</CaseText>
            </CaseInfo>
            </CardContent>
        </CaseCard>
        <CaseCard>
            <CardContent>
            <CaseVideo><Stop><StopDec><StopTriangle>&#9650;</StopTriangle></StopDec></Stop></CaseVideo>
            <CaseInfo>
                <BlockTitle title="Украсили остановку в центре города" description="почему вы должны вступить именно в нашу команду" descWidth="80%"></BlockTitle>
                <CaseText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</CaseText>
            </CaseInfo>
            </CardContent>
        </CaseCard>
        <CaseCard>
            <CardContent>
            <CaseVideo><Stop><StopDec><StopTriangle>&#9650;</StopTriangle></StopDec></Stop></CaseVideo>
            <CaseInfo>
                <BlockTitle title="Украсили остановку в центре города" description="почему вы должны вступить именно в нашу команду" descWidth="80%"></BlockTitle>
                <CaseText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</CaseText>
            </CaseInfo>
            </CardContent>
        </CaseCard>
        {/* Добавьте дополнительные CaseCard для других слайдов */}
      </BlockContent>
    </BlockStyle>
  );
}

export default CasesBlock;
