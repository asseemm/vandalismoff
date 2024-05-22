import React from "react";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import BlockTitle from "@/components/atoms/BlockTitle";
import Header from "@/components/organisms/Header";

const Content = styled.section`
    max-width: 100%;
    height: auto; 
    padding: 100px 10%;

    @media screen and (max-width: 650px) {
        padding: 40px 10%;
    }
`;

const ContactsBlock = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;

const ContactsInfo = styled.div`
    width: 28%;
    border: 1px solid #804988;
    border-radius: 30px;
    // background: #fff;
    // box-shadow: 0px 2px 2px 0px #804988;
`;

const InfoContent = styled.div`
    max-width: 100%;
    padding: 50px;
`;

const Map = styled.div`
    width: 70%;
    height: 50vh;
    background-color: #ccc;
    border-radius: 30px;
`;

const InfoTitle = styled.p`
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 20px;
    color: #804988;
`;

const InfoText = styled.p`
    display: block;
    font-size: 19px;
    font-weight: 500;
    line-height: 24px;

    a{
        color: #222;
        font-family: "Jost", sans-serif;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #804988;
    margin-top: 7%;
    margin-bottom: 7%;
`;


export default function Contact() {
return (
    <DefaultLayout>
        <Header backgroundcolor={'#804988'} color={'#fff'} displaymenuwhite={'block'} displayMenuPurple={'none'}/>
        <Content>
            <BlockTitle title="Наши контакты" description="Обязательно свяжеся с вами сразу как вы отправите" $descWidth="30%" />
            <ContactsBlock>
                <ContactsInfo>
                    <InfoContent>
                    <InfoTitle>Адрес:</InfoTitle>
                    <InfoText><a>РК, Астана, район Есиль, ул. Динмухамеда Кунаева, здание 12/1, 6 этаж, офис 6-06</a></InfoText>
                    <Line />
                    <InfoTitle>Почта:</InfoTitle>
                    <InfoText><a href="mailto:@lwsolution@mail.ru">lwsolution@mail.ru</a></InfoText>
                    <Line />
                    <InfoTitle>Телефон: </InfoTitle>
                    <InfoText><a href="tel:+77172755091">+7 7172 75 50 91</a></InfoText>
                    <InfoText><a target="_blank" href="https://wa.me/+77777755091">+7 777 775 50 91</a></InfoText>
                    </InfoContent>
                </ContactsInfo>
                <Map>
                    <iframe 
                        src="https://yandex.kz/map-widget/v1/?ll=71.417403%2C51.089159&mode=search&oid=39194559687&ol=biz&z=17" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, borderRadius: '30px', }} 
                        allowFullScreen={true}>
                    </iframe>
                </Map>
            </ContactsBlock>
        </Content>
    </DefaultLayout>
);
}
