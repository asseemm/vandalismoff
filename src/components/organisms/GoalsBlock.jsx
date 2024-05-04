import React, { useState } from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';

import GoalsBack from '@/assets/img/goalsback.png';
import GoalsIcon from '@/assets/icon/goal.svg';


const BlockStyle = styled.div`
    position: relative;
    max-width: 100%;
    height: auto;
    background: rgba(128, 73, 136, 0.5);
    padding: 80px 10%;
    background-attachment: fixed;
`;

const BlockContent = styled.div`
//   display: flex;
//   flex-wrap: wrap-reverse;
//   justify-content: space-between;
`;

const GoalsCont = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    margin-top: 60px;
`;

const GoalBLock = styled.div`
    text-align: center;
    width: 22%;
    height: 400px;
    background-color: #fef9e2a8;
    border-radius: 30px;
`;

const GoalContent = styled.div`
    display: grid;
    gap: 30px;
    padding: 40px;
`;

const GoalIcon = styled.div`
    width: 40%;
    height: 90px;
    margin: 0 30%;
    // background-color: #804988bf;
`;

const GoalTitle = styled.p`
    font-family : "Jost", sans-serif;
    font-size: 24px;
    line-height: 28px;
    color: #222;
`;

const GoalDesc = styled.p`
    font-family : "Jost", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #222;
`;

const GoalsBlock = () => {
  return (
    <BlockStyle>
      <div className='goalsblock'></div>
      <BlockContent>
          <BlockTitle title="Наши цели" description="Главные цели нашей Команды " titleColor="#fff" deskColor="#fff" lineColor="#fff"></BlockTitle>
          <GoalsCont>
            <GoalBLock>
                <GoalContent>
                <GoalIcon><Image src={GoalsIcon} alt="" /></GoalIcon>
                <GoalTitle>Индивидуальный онлайн-расчет</GoalTitle>
                <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                <GoalIcon><Image src={GoalsIcon} alt="" /></GoalIcon>
                <GoalTitle>Забор груза из любого района страны</GoalTitle>
                <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                <GoalIcon><Image src={GoalsIcon} alt="" /></GoalIcon>
                <GoalTitle>Загрузка и выгрузка 24/7</GoalTitle>
                <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                <GoalIcon><Image src={GoalsIcon} alt="" /></GoalIcon>
                <GoalTitle>Видео-и фотоотчет со склада</GoalTitle>
                <GoalDesc>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</GoalDesc>
                </GoalContent>
            </GoalBLock>
          </GoalsCont>
      </BlockContent>
    </BlockStyle>
  );
}

export default GoalsBlock;