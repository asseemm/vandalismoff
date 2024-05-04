import React from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';

const BlockStyle = styled.div`
    max-width: 100%;
    height: auto; 
    padding: 100px 10%;
`;

const BlockContent = styled.div`
  
`;

const CaseCard = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
`;

const CaseVideo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: auto;
    background: #9B889DA6;
    border-radius: 30px;
`;

const CaseInfo = styled.div`
    width: 46%;
    padding: 20px 0px;
`;

const CaseText = styled.p`
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 30px;
`;

const Stop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: #804988;
`;

const StopDec = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 10px solid #fff;
    text-align: center;
`;

const StopTriangle = styled.span`
    font-size: 48px;
    color: #fff;
    transform: rotate(30deg);
`;

const CasesBlock = () => {
  return (
    <BlockStyle>
      <BlockContent>
        <CaseCard>
            <CaseVideo><Stop><StopDec><StopTriangle>&#9650;</StopTriangle></StopDec></Stop></CaseVideo>
            <CaseInfo>
                <BlockTitle title="Украсили остановку в центре города" description="почему вы должны вступить именно в нашу команду" descWidth="80%"></BlockTitle>
                <CaseText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</CaseText>
            </CaseInfo>
        </CaseCard>
      </BlockContent>
    </BlockStyle>
  );
}

export default CasesBlock;