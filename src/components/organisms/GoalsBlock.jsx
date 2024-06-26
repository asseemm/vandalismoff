import React from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';

import Vision from '@/assets/icon/Vision.png'
import Kraska from '@/assets/icon/aerosol-can.png'
import Respon from '@/assets/icon/social-responsibility.png'
import  Comfort from '@/assets/icon/friendship.png'


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
    display: flex;
    justify-content: center;

    @media screen and (max-width: 800px){
        width: 30%;
        margin: 0 35%;
    }

    @media screen and (max-width: 650px){
        width: 20%;
        margin: 0;
    }

`;

const GoalIconImg = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`;

const GoalIconImgVis = styled.div`
    width: 70px;
    height: 70px;
    position: relative;
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
    font-size: 23px;
    line-height: 28px;
    color: #222;

    @media screen and (max-width: 1580px){
        font-size: 21px;
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
    <BlockStyle id='goalsblock'>
      <div className='goalsblock'></div>
      <BlockContent>
          <BlockTitle title="Наши цели" description="Главные цели нашей Команды " $titleColor="#fff" $deskColor="#fff" $lineColor="#fff"></BlockTitle>
          <GoalsCont>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon data-aos="fade-up">
                        <GoalIconImgVis>
                            <Image src={Vision} alt="Визион" layout="fill" objectFit="contain" />
                        </GoalIconImgVis>
                    </GoalIcon>
                    <GoalInfo>
                        <GoalTitle data-aos="fade-up">Изменить мышление общества</GoalTitle>
                        <GoalDesc data-aos="fade-up">Исправить старое мышление общества, направив его в правильное русло.</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon data-aos="fade-up">
                        <GoalIconImg>
                        <Image src={Kraska} alt="Визион" layout="fill" objectFit="contain" />
                        </GoalIconImg>
                    </GoalIcon>
                    <GoalInfo>
                        <GoalTitle data-aos="fade-up">Противодействовать актам вандализма</GoalTitle>
                        <GoalDesc data-aos="fade-up">Снизить количество случаев вандализма в нашей стране.</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon data-aos="fade-up">
                        <GoalIconImg>
                        <Image src={Respon} alt="Визион" layout="fill" objectFit="contain" />
                        </GoalIconImg>
                    </GoalIcon>
                    <GoalInfo>
                        <GoalTitle data-aos="fade-up">Пробудить отвественность</GoalTitle>
                        <GoalDesc data-aos="fade-up">Донести до каждого, что Казахстан - это наша зона ответственности.</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
            <GoalBLock>
                <GoalContent>
                    <GoalIcon data-aos="fade-up">
                        <GoalIconImg>
                            <Image src={Comfort} alt="Визион" layout="fill" objectFit="contain" />
                        </GoalIconImg>
                    </GoalIcon>
                    <GoalInfo>
                        <GoalTitle data-aos="fade-up">Достичь нового Казахстана</GoalTitle>
                        <GoalDesc data-aos="fade-up">Перестать создавать дискомфорт своему же городу и стране.</GoalDesc>
                    </GoalInfo>
                </GoalContent>
            </GoalBLock>
          </GoalsCont>
      </BlockContent>
    </BlockStyle>
  );
}

export default GoalsBlock;