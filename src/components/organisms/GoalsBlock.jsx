import React from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';

import GoalsIcon from '@/assets/icon/goal.svg'

const BlockStyle = styled.div`
    position: relative;
    max-width: 100%;
    height: auto;
    background: rgba(128, 73, 136, 0.5);
    padding: 100px 10%;
    background-attachment: fixed;

    @media screen and (max-width: 650px){
        padding: 50px 10%;
    }
`;

const BlockContent = styled.div`
//   display: flex;
//   flex-wrap: wrap-reverse;
//   justify-content: space-between;
`;

const GoalsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;

    @media screen and (max-width: 650px){
        margin-top: 40px;
    }
`;

const GoalBLock = styled.div`
    text-align: center;
    width: 22%;
    height: 400px;
    background-color: rgba(254, 249, 226, 0.76);
    border-radius: 30px;

    @media screen and (max-width: 1580px){
        width: 23%
    }

    @media screen and (max-width: 1350px){
        width: 48%;
        margin-bottom: 4%;
        height: 300px;
    }

    @media screen and (max-width: 1150px){
        height: 350px;
    }

    @media screen and (max-width: 650px){
        height: 200px;
        width: 100%;
    }
`;

const GoalContent = styled.div`
    display: grid;
    gap: 30px;
    padding: 40px;

    @media screen and (max-width: 800px){
        gap: 20px;
    }

    @media screen and (max-width: 650px){
        display: flex;
        justify-content: space-between;
        padding: 30px;
    }
`;

const GoalIcon = styled.div`
    width: 40%;
    margin: 0 30%;

    @media screen and (max-width: 800px){
        width: 30%;
        margin: 0 35%;
    }

    @media screen and (max-width: 650px){
        width: 20%;
        margin: 0;
    }
`;

const GoalInfo = styled.div`
    display: grid;
    gap: 30px;

    @media screen and (max-width: 650px){
        width: 65%;
        display: grid;
        gap: 20px;
        text-align: left;
    }
`;

const GoalTitle = styled.p`
    font-family : "Jost", sans-serif;
    font-size: 24px;
    line-height: 28px;
    color: #222;

    @media screen and (max-width: 1580px){
        font-size: 22px;
        line-height: 26px;
    }

    @media screen and (max-width: 800px){
        font-size: 18px;
        line-height: 22px;
    }
`;

const GoalDesc = styled.p`
    font-family : "Jost", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #222;

    @media screen and (max-width: 1580px){
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 800px){
        font-size: 14px;
        line-height: 18px;
    }
`;

const GoalsBlock = () => {
  return (
    <BlockStyle>
      <div className='goalsblock'></div>
      <BlockContent>
          <BlockTitle title="Наши цели" description="Главные цели нашей Команды " $titleColor="#fff" $deskColor="#fff" $lineColor="#fff"></BlockTitle>
          <GoalsCont>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon><Image src={GoalsIcon} alt="" style={{ width: '100%' }} /></GoalIcon>
                    <GoalInfo>
                        <GoalTitle>Индивидуальный онлайн-расчет</GoalTitle>
                        <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon><Image src={GoalsIcon} alt="" style={{ width: '100%' }} /></GoalIcon>
                    <GoalInfo>
                        <GoalTitle>Забор груза из любого района страны</GoalTitle>
                        <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon><Image src={GoalsIcon} alt="" style={{ width: '100%' }} /></GoalIcon>
                    <GoalInfo>
                        <GoalTitle>Загрузка и выгрузка 24/7</GoalTitle>
                        <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon><Image src={GoalsIcon} alt="" style={{ width: '100%' }} /></GoalIcon>
                    <GoalInfo>
                        <GoalTitle>Видео-и фотоотчет со склада</GoalTitle>
                        <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
          </GoalsCont>
      </BlockContent>
    </BlockStyle>
  );
}

export default GoalsBlock;