import React, { useState } from 'react';
import styled from 'styled-components';


import BlockTitle from '../atoms/BlockTitle';
import { colors } from '../base/colors';


const Content = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 80px 10%;

  @media screen and (max-width: 650px) {
      padding: 40px 10%;
  }
`;

const SectionQuestion = styled.section`
    margin-top: 40px;
`;

const Article = styled.article`
  padding: 0.5rem 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-family: "Jost", sans-serif;
  font-weight: bold;
  font-size: 22px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  font-size: 21px;
  font-weight: bold;
  align-items: center;
  color: ${(colors.white)};
  background: ${(colors.mainPurple)};
  cursor: pointer;
  transition: all 0.3s linear;
  border: none;

  &:hover {
    transform: rotate(180deg);
  }

  &.open {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const QuestionText = styled.div`
  display: none;
  margin-top: 30px;
  font-family: "Jost", sans-serif;
  font-size: 17px;
  width: 95%;

  &.open {
    display: block;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
    width: 100%;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(colors.mainPurple)};
  opacity: 10%;
  margin-top: 15px;
`;

const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Content>
        <BlockTitle title="Ваш часто задаваемый вопрос" description="вопросы, которые задают многие с ответами" />        
        <SectionQuestion>
            <div>
                {faqData.map((item, index) => (
                <Article key={index}>
                    <QuestionTitle>
                    <p>{item.ques}</p>
                    <Button onClick={() => toggleQuestion(index)} className={openIndex === index ? 'open' : ''}>
                        {openIndex === index ? '-' : '+'}
                    </Button>
                    </QuestionTitle>
                    <Line />
                    <QuestionText className={openIndex === index ? 'open' : ''}>
                    {item.answer}
                    </QuestionText>
                </Article>
                ))}
            </div>
        </SectionQuestion>
    </Content>
  );
};

const faqData = [
  { ques: "Какова основная цель вашей команды?", answer: "Основной целью нашей команды является изменение общественного мнения и поведения в отношении актов вандализма. Мы стремимся создать общество, где вандализм не принимается и не терпится." },
  { ques: "Какие конкретные меры вы предпринимаете для борьбы с актами вандализма?", answer: "Для борьбы с актами вандализма мы проводим различные мероприятия, такие как кампании просвещения, акции по уборке территорий после актов вандализма, сотрудничество с правоохранительными органами и общественными организациями." },
  { ques: "Как вы планируете изменить общественное мнение о вандализме?", answer: "Мы планируем изменить общественное мнение о вандализме путем освещения проблемы в СМИ, организации образовательных мероприятий и проведения общественных дискуссий на эту тему." },
  { ques: "Какие вызовы вы видите на пути к достижению ваших целей, и как вы планируете их преодолеть?", answer: "Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании . Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст. Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании.  Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст. Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст" },

];

const Questions = () => (
  <div>
    <FAQ faqData={faqData} />
  </div>
);

export default Questions;
