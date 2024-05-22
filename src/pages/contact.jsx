import React from "react";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";

const Content = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 80px 10%;
  padding-top: 20vh;

  @media screen and (max-width: 650px) {
      padding: 40px 10%;
  }
`;

export default function Contact() {
return (
    <DefaultLayout>
        <Header backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} displayMenuPurple={'none'}/>
        <Content>
            <BlockTitle title="Наши контакты" description="Обязательно свяжеся с вами сразу как вы отправите" $descWidth="30%" />
        </Content>
    </DefaultLayout>
);
}
