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

export default function News() {
return (
    <DefaultLayout>
        <Header backgroundcolor={'#804988'} color={'#fff'} displaymenuwhite={'block'} displayMenuPurple={'none'}/>
        <div class="line-text">
            <div class="line"></div>    
                <div class="marquee">
                    <span>
                        <div class="text"><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p></div>
                    </span>
                </div>
            <div class="line"></div>
        </div>
        <Content>
        
            <BlockTitle title="Новости" description="Все новости где есть мы и акты вандализма" />
        </Content>
    </DefaultLayout>
);
}
