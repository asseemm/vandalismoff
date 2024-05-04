import React from 'react';
import styled from 'styled-components';

const BlockTitleStyle = styled.div`
  // Стили для внешнего контейнера
`;

const TitleText = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.titleColor || '#222'};

  @media screen and (max-width: 1450px) {
    font-size: 36px;
  }

  @media screen and (max-width: 550px) {
    font-size: 28px;
  }
`;

const TitleDesc = styled.div`
  font-family: "Jost", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => props.deskColor || '#9B889D'};
  display: flex;
  gap: 30px;
  width: ${props => props.descWidth || '60%'};
  margin-top: 20px;

  @media screen and (max-width: 1780px) {
    width: 80%;
  }

  @media screen and (max-width: 1450px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 1180px) {
    width: 50%;
  }

  @media screen and (max-width: 880px) {
    width: 80%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 16px;
    margin-top: 15px;
  }
`;

const Line = styled.div`
  margin-top: 20px;
  width: 50px;
  height: 1px;
  background-color: ${props => props.lineColor || '#9B889D'};

  @media screen and (max-width: 1450px) {
    margin-top: 15px;
    width: 40px;
  }
`;

const BlockTitle = ({ title, description, titleColor, deskColor, lineColor, descWidth }) => {
  return (
    <BlockTitleStyle>
        <TitleText titleColor={titleColor}>{title}</TitleText>
        <TitleDesc deskColor={deskColor} descWidth={descWidth}>
            <Line lineColor={lineColor} />
            {description}
        </TitleDesc>
    </BlockTitleStyle>
  );
}

export default BlockTitle;
