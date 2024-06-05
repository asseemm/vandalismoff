  import React from 'react';
  import styled from 'styled-components';
  import Image from 'next/image';
  import BlockTitle from '../atoms/BlockTitle';

  import Van1 from '@/assets/img/van1.jpg'
  import Van2 from '@/assets/img/van2.JPG'
  import Van3 from '@/assets/img/van3.jpeg'
  import Van4 from '@/assets/img/van5.jpg'


  const BlockStyle = styled.div`
    max-width: 100%;
    height: auto; 
    padding: 120px 10%;

    @media screen and (max-width: 650px){
      padding: 60px 10%;
    }
  `;

  const BlockContent = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  `;

  const AboutInfo = styled.div`
    width: 48%;

    @media screen and (max-width: 1180px){
      width: 100%;
    }
  `;

  const AboutText = styled.p`
    font-family : "Jost", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: #222;
    margin-top: 30px;

    @media screen and (max-width: 1450px){
      font-size: 16px;
      line-height: 24px;
      margin-top: 20px;
    }

    @media screen and (max-width: 550px){
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (max-width: 420px) {
      font-size: 12px;
      line-height: 16px;
  }
  `;

  const MoreButton = styled.button`
    background-color: transparent;
    border: 2px solid #804988;
    cursor: pointer;
    width: 240px;
    height: 50px;
    border-radius: 30px;
    color: #804988;
    font-size: 18px;
    margin-top: 50px;
    transition: 0.3s all ease;

    &:hover{
      background-color: #804988;
      color: #fff;
    }

    @media screen and (max-width: 550px){
      width: 70%;
      height: 40px;
      font-size: 16px;
      margin-top: 30px;
      margin-left: 15%;
      margin-right: 15%; 
    }

    a{
      color: #804988;
    }

    &:hover a{
      color: #fff;
    }

  `;

  const AboutImages = styled.div`
    width: 48%;
    display: flex;
    flex-wrap: wrap;
    // gap: 20px;
    justify-content: space-between;

    @media screen and (max-width: 1180px){
      width: 100%;
    }
  `;

  const ImagesColumn = styled.div`
    width: 48%;
  `;

  const SecondColumn = styled(ImagesColumn)`
    margin-top: 60px;

    @media screen and (max-width: 550px){
      margin-top: 30px;
    }
  `;

  const AboutImage = styled.div`
    width: 100%;
    height: 260px;
    background-color: #6C3E73;
    border-radius: 16px;
    margin-bottom: 8%;

    @media screen and (max-width: 780px){
      height: 200px;
    }

    @media screen and (max-width: 550px){
      height: 150px;
    }
  `;

  const AboutImg = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  `;


  const AboutBlock = () => {
    return (
      <BlockStyle>
        <BlockContent>
          <AboutInfo data-aos="fade-up">
            <BlockTitle title="Кто мы?" description="Краткое знакомство с нашей командой" />
            <AboutText data-aos="fade-up">
              Мы, команда VandalismOFF, ежедневно работаем над тем, чтобы противостоять актам вандализма и пропагандировать уважение к общественным пространствам. Вдохновленные общей целью, мы объединились для того, чтобы внести свой вклад в сохранение культурного и градостроительного наследия нашей страны. Наши усилия направлены не только на борьбу с проявлениями вандализма, но и на формирование культуры уважения и бережного отношения к общественным пространствам. Мы проводим образовательные кампании, организуем мероприятия и разрабатываем инициативы, призванные мотивировать жителей к активному участию в улучшении качества жизни в их городах. Наш сайт служит платформой для обмена опытом и успешными практиками, помогая каждому осознать свою роль в создании безопасного и привлекательного городского пространства.
            </AboutText>
            <MoreButton data-aos="fade-up"><a href="/about">Больше</a></MoreButton>
          </AboutInfo>
          <AboutImages>
            <ImagesColumn>
              <AboutImage data-aos="fade-up"><AboutImg src={Van3} alt='img' priority /></AboutImage>
              <AboutImage data-aos="fade-up"><AboutImg src={Van1} alt='img' priority /></AboutImage>
            </ImagesColumn>
            <SecondColumn>
              <AboutImage data-aos="fade-up"><AboutImg src={Van2} alt='img' priority /></AboutImage>
              <AboutImage data-aos="fade-up"><AboutImg src={Van4} alt='img' priority /></AboutImage>
            </SecondColumn>
          </AboutImages>
        </BlockContent>
      </BlockStyle>
    );
  }

  export default AboutBlock;