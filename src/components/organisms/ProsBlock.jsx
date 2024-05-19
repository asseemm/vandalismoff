import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BlockTitle from '../atoms/BlockTitle';

import ProsPng from '@/assets/img/subtract.png';
// import Vector from '@/assets/icon/vectordown.svg';
import { VectordownSVG } from '@/assets/icon/VectordownSVG';

const BlockStyle = styled.div`
    max-width: 100%;
    height: auto; 
    padding: 80px 10%;

    @media screen and (max-width: 650px) {
        padding: 40px 10%;
    }
`;

const BlockContent = styled.div`
`;

const ProsBlocks = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
`;

const Pros = styled.div`
    position: relative;
    width: 23%;
    height: auto;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1340px) {
        width: 48%;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
        margin-bottom: 40px;
    }   
`;

const ProsCont = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 640px) {
        height: 200px;
    } 
`;

const ProsBack = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ReasonText = styled.p`
    font-family: Rubik Bubbles;
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    text-align: center;
    color: #6C3E73;
    margin: 0 5%;
    margin-bottom: 20px;

    @media screen and (max-width: 1640px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media screen and (max-width: 740px) {
        font-size: 26px;
        line-height: 30px;
    }
`;

const ProsBtn= styled.button`
    position: absolute;
    bottom: 0;
    left: 2%;
    width: 34%;
    height: 22%;
    background: #804988;
    border-radius: 22px;
    border: none;
    color: #fff;
    cursor: pointer;
`;

const VectorImg= styled(Image)`
    height: 20px;
`;

const ProsText = styled.p`
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: #777777;
    margin: 0 5%;
    margin-top: 40px;
    display: ${props => props.$show ? 'block' : 'none'};

    @media screen and (max-width: 640px) {
        font-size: 18px;
        line-height: 22px;
    } 
`;

const prosData = [
    {
        reason: "Дружная команда",
        text: "Наша команда — это пример сотрудничества и взаимоподдержки."
    },
    {
        reason: "Инновационные подходы",
        text: "Мы используем новейшие технологии для достижения наших целей."
    },
    {
        reason: "Экспертное знание",
        text: "Наш коллектив включает ведущих специалистов в области гражданской ответственности."
    },
    {
        reason: "Глобальное влияние",
        text: "Наши инициативы оказывают широкое воздействие на улучшение общественной среды."
    }
];

const ProsBlock = () => {
    const [showText, setShowText] = useState(Array(prosData.length).fill(false));

    const toggleText = (index) => {
        setShowText(showText.map((item, idx) => idx === index ? !item : item));
    };

    return (
        <BlockStyle id='prosblock'>
            <BlockContent>
                <BlockTitle title="Почему мы?" description="почему вы должны вступить именно в нашу команду" $descWidth="30%"></BlockTitle>
                <ProsBlocks>
                    {prosData.map((pros, index) => (
                        <Pros key={index}>
                            <ProsCont>
                                <ProsBack src={ProsPng} alt="Background" />
                                <ReasonText>{pros.reason}</ReasonText>
                                <ProsBtn onClick={() => toggleText(index)}><VectordownSVG /></ProsBtn>
                            </ProsCont>
                            <ProsText $show={showText[index]}>
                                {pros.text}
                            </ProsText>
                        </Pros>
                    ))}
                </ProsBlocks>
            </BlockContent>
        </BlockStyle>
    );
}

export default ProsBlock;
