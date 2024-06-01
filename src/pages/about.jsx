import React from "react";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";
import Image from 'next/image';

import Van2 from '@/assets/img/van2.JPG'


const Content = styled.section`
  max-width: 100%;
  height: auto;
`;

const Container = styled.div`
  .start {
    padding: 150px 10%;
    @media screen and (max-width: 650px) {
        padding: 40px 10%;
    }
  }
  .start-cont {
    position: relative;
  }
  .horizontal {
    position: absolute;
    top: 35%;
    left: -5%;
    color: rgba(128, 73, 136, 0.5);
    transform: rotate(90deg);

    @media screen and (max-width: 750px) {
      display: none;
    }
    @media screen and (max-width: 1300px) {
      left: -12%;
    }
  }
  .horizontal2 {
    left: -1%;
    font-family: "Jost", sans-serif;

    @media screen and (max-width: 1300px) {
      left: -5%;
    }
  }
  .line {
    width: 100%;
    height: 3px;
    background-color: #804988;
    margin-bottom: 10%;
  }
  .blue-line {
    width: 6%;
    height: 4px;
    background-color: #804988;
  }
  .horizontal p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #804988;
    padding-right: 50px;
    text-transform: uppercase;
    font-family: "Jost", sans-serif;
  }
  .start-info {
    margin-left: 13%;
    margin-right: 13%;

    @media screen and (max-width: 750px) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .title-top {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 15px;
    margin-bottom: 1%;
  }
  
  .title-top .line {
    width: 15px;
    height: 2px;
    background-color: #804988;
    font-family: "Jost", sans-serif;
    margin: 0; /* Убедитесь, что здесь нет отступов */
  }
  
  .title-top p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin: 0; /* Уберите отступы */
  }
  
  .text p {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #777;
    margin-top: 3%;
    width: 90%;

    @media screen and (max-width: 1250px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
  .txt-purple{
    color:  #804988;
  }
  .title-left {
    font-size: 35px; 
    padding: 20px 0px 20px 0px;
    color:  #000;
    text-transform: uppercase;
    font-family: "Jost", sans-serif;
  }
  
`;

const HistorySection = styled.div`
  // padding-top: 5%;
  // padding-bottom: 5%;
  position: relative;

  .background{
    width: 100%;
    position: absolute;
    top: 0;
    background: #804988;
    height: 40vh;
    z-index; 1;
  }
  
  .container{
    padding: 80px 10%;
    position: relative;
    z-index: 5;
    @media screen and (max-width: 650px) {
        padding: 40px 10%;
    }
  }

  .history-cont {
    @media screen and (max-width: 750px) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .history-steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin-top: 5%;

    @media screen and (max-width: 750px) {
      justify-content: center;
    }
  }
  .blue-line{
    background-color: #fff;
  }
  .title{
    color: #fff;
  }
  .step {
    width: 22%;

    @media screen and (max-width: 750px) {
      width: 60%;
      margin-bottom: 5%;
    }
  }
  .img {
    width: 100%;
    height: 27vh;
    background-color: #c2c2c2;

    @media screen and (max-width: 750px) {
      height: 35vh;
    }
  }
  .img img {
    width: 100%;
    height: 100%;
  }
  .year {
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.06em;
    margin-top: 10%;
    margin-bottom: 3%;
  }
  .text {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #999;
  }
`;

const PhilosophySection = styled.div`
  padding-top: 0%;
  padding-bottom: 8%;
`;

export default function About() {
  return (
    <DefaultLayout>
      <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} displayMenuPurple={'none'}/>
      <Container>
        <Content>
          <div className="start">
            <div className="container">
              <div className="start-cont">
                <div className="horizontal">
                  <div className="line"></div>
                  <p>ОСНОВАНИЕ КОМПАНИИ</p>
                </div>
                <div className="start-info">
                  <div className="block-head" data-aos="zoom-in">
                    <div className="title-top">
                      <div className="line"></div>
                      <p>ВАНДАЛИЗМ<span className="txt-purple">OFF</span></p>
                    </div>
                    <p className="title title-left">Компания основана в 2003 году</p>
                    <div className="blue-line"></div>
                  </div>
                  <div className="text" data-aos="zoom-in">
                    <p>Компания начала свою деятельность, которая в основном была связана с поставками оборудования для нефтегазового сектора, в 2003 году. С тех пор название компании сменилось с Urals LTD на Urals QA в 2008 году и расширило сферу своих услуг до поставок электрооборудования и запасных частей.
                      <br /><br /> Клиентская база и партнеры включали, но не ограничивались следующими организациями и их дочерними компаниями: NCOC N.V., КазМунайГаз, Интергаз, КазТрансОйл, Казгермунай, Озенмунайгаз, Эмбамунайгаз.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HistorySection>
            <div className="background"></div>
            <div className="container">
              <div className="history-cont">
                    <div className="block-head" data-aos="zoom-in">
                        <p className="title title-left">наша история</p>
                    <div className="blue-line"></div>
                </div>
                <div className="history-steps">
                  <div className="step" data-aos="zoom-in">
                    <div className="img"> <Image src={Van2} alt="Введение на рынок в 2003 году"  width={500} height={300} /></div>
                    <p className="year">2003</p>
                    <p className="text">Внедрение в рынок</p>
                  </div>
                  <div className="step" data-aos="zoom-in">
                    <div className="img"> <Image src={Van2} alt="Введение на рынок в 2003 году"  width={500} height={300} /></div>
                    <p className="year">2008</p>
                    <p className="text">Ребрендинг</p>
                  </div>
                  <div className="step" data-aos="zoom-in">
                    <div className="img"> <Image src={Van2} alt="Введение на рынок в 2003 году"  width={500} height={300} /></div>
                    <p className="year">2022</p>
                    <p className="text">Расширение</p>
                  </div>
                  <div className="step" data-aos="zoom-in">
                    <div className="img"> <Image src={Van2} alt="Введение на рынок в 2003 году"   width={500} height={300} /></div>
                    <p className="year">2022</p>
                    <p className="text">Расширение</p>
                  </div>
                </div>
              </div>
            </div>
          </HistorySection>
          <PhilosophySection className="start philosophy">
            <div className="container">
              <div className="start-cont">
                <div className="horizontal horizontal2">
                  <div className="line"></div>
                  <p>Философия</p>
                </div>
                <div className="start-info">
                  <div className="block-head" data-aos="zoom-in">
                    <p className="title title-left">наша философия</p>
                    <div className="blue-line"></div>
                  </div>
                  <div className="text" data-aos="zoom-in">
                    <p>Urals QA стремится к построению прочных и долгосрочных партнерских отношений. Мы работаем с точностью и вниманием к каждой детали, выполняя проекты от начала до конца.
                      <br /><br /> Мы постоянно стремимся к совершенству, проявляя мужество и настойчивость в решении сложных задач. Мы заботимся о том, чтобы наши услуги оказывались эффективно, а качество готовой продукции, предлагаемой потребителю, соответствовало стандартам и спецификациям клиента.</p>
                  </div>
                </div>
              </div>
            </div>
          </PhilosophySection>
        </Content>
      </Container>
    </DefaultLayout>
  );
}
