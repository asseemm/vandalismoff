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

    p{
      max-width: 90%;
    }

    @media screen and (max-width: 500px) {
      font-size: 14px;

      p{
        max-width: 260px;
      }
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
    overflow: hidden;
    transform-origin: top;
    transition: transform 0.7s ease, visibility 0.7s ease;
    height: 0;
    visibility: hidden;
    margin-top: 30px;
    font-family: "Jost", sans-serif;
    font-size: 17px;
    width: 95%;

    &.open {
      transform: scaleY(1);
      visibility: visible;
      height: auto;
    }

    &.closed {
      transform: scaleY(0);
      visibility: hidden;
      height: 0; 
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
      <Content  id='questions'>
          <BlockTitle title="Ваш часто задаваемый вопрос" description="вопросы, которые задают многие с ответами" />        
          <SectionQuestion>
              <div>
                  {faqData.map((item, index) => (
                  <Article key={index}>
                      <QuestionTitle data-aos="fade-up">
                      <p>{item.ques}</p>
                      <Button onClick={() => toggleQuestion(index)} className={openIndex === index ? 'open' : ''} data-aos="fade-up">
                          {openIndex === index ? '-' : '+'}
                      </Button>
                      </QuestionTitle>
                      <Line data-aos="fade-up" />
                      <QuestionText className={openIndex === index ? 'open' : 'closed'} data-aos="fade-up">
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
    {
      ques: "Какова основная цель вашей команды?",
      answer: (
        <>
          <p>Основной целью нашей команды является изменение общественного мнения и поведения в отношении актов вандализма. Мы стремимся создать общество, где каждый несет ответственность за все, что его окружает. Мы хотим, чтобы каждый гражданин Казахстана осознавал, что &quot;Казахстан - это я&quot;, и понимал, что все, что нас окружает, построено на наши деньги и, соответственно, для нашего удобства.</p>
          <p>Мы также стремимся к тому, чтобы каждый гражданин Казахстана осознавал, что наша страна - это не только место, где мы живем, но и место, которое мы создаем своими руками. Мы хотим, чтобы каждый человек понимал, что его действия оказывают влияние на наше общее пространство, и чтобы он принимал активное участие в его сохранении и улучшении.</p>
          <p>Поэтому мы сделаем все возможное, чтобы количество актов вандализма уменьшилось, а люди начали понимать, что забота о нашей общественной среде не только способствует созданию приятного и безопасного окружения для всех граждан, но и является проявлением гражданской ответственности и гордости за нашу страну.</p>
        </>
      )
    },
    {
      ques: "Какие конкретные меры вы предпринимаете для борьбы с актами вандализма?",
      answer: (
        <>
          <p>Мы стремимся к созданию нового Казахстана только через принятие сложных решений, поскольку критика и запреты могут предложить каждые. Мы хотим, чтобы люди осознанно понимали, почему определенные действия недопустимы, и несли ответственность за свои поступки.</p>
          <p>Для этого делаем различные кейсы, организуем мероприятия, создаем видеоролики с использованием арт-объектов и оборудования. Мы стремимся, чтобы люди, видя это, сами задумались и пришли к выводу, что вандализм не имеет места в нашей стране. Таким образом, мы боремся с сбоем мышления, который приводит к различным беспорядкам, включая вандализм</p>
        </>
      )
    },{ ques: "Как вы планируете изменить общественное мнение о вандализме?", answer: "Мы планируем изменить общественное мнение о вандализме путем освещения проблемы в СМИ, организации образовательных мероприятий и проведения общественных дискуссий на эту тему." },
    { ques: "Какие вызовы вы видите на пути к достижению ваших целей, и как вы планируете их преодолеть?", answer: "Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании . Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст. Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании.  Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст. Здесь будет мини-описание. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе информацию. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят текст" },

  ];

  const Questions = () => (
    <div>
      <FAQ faqData={faqData} />
    </div>
  );

  export default Questions;
