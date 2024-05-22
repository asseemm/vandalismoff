import React, { useState } from 'react';
import styled from 'styled-components';

import BlockTitle from '../atoms/BlockTitle';

const BlockStyle = styled.div`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;
  // background: #80498880;
`;

const BlockContent = styled.div`
//   display: flex;
//   flex-wrap: wrap-reverse;
//   justify-content: space-between;
  background: #80498880;
  padding: 5%;
  border-radius: 30px;
`;

const Form = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;

  @media screen and (max-width: 1200px){
    width: 700px;
  }

  @media screen and (max-width: 850px){
    width: 100%;
    display: grid;
    gap: 10px;
    margin-top: 30px;
  }
`;

const NameInput = styled.input`
  width: 35%;
  height: 80px;
  border-radius: 40px;
  border: none;
  padding-left: 5%;
  font-size: 18px;

  @media screen and (max-width: 1200px){
    height: 60px;
  }

  @media screen and (max-width: 850px){
    width: 95%;
    height: 50px;
    font-size: 14px;
  }
`;

const PhoneInput = styled.input`
  height: 80px;
  border-radius: 40px;
  border: none;
  padding-left: 5%;
  margin-left: 0%;
  width: 60%;
  font-size: 18px;

  @media screen and (max-width: 1200px){
    height: 60px;
  }

  @media screen and (max-width: 850px){
    width: 95%;
    height: 50px;
    font-size: 14px;
  }
`;

const SubmitBtn = styled.button`
  width: 240px;
  height: 58px;
  background-color: #804988;
  color: #fff;
  border: none;
  border-radius: 30px;
  margin-left: -250px;
  font-size: 18px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);  
  }

  @media screen and (max-width: 1200px){
    height: 45px;
    width: 180px;
    margin-left: -190px;
    font-size: 16px;
  }

  @media screen and (max-width: 850px){
    width: 100%;
    height: 50px;
    margin-left: 0px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ааа;
  margin-left: -10%;

  @media screen and (max-width: 850px){
    display: none;
  }
`;

const Feedback = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    console.log('Submitting', { name, phoneNumber });

    // Place where you would add fetch/axios call to send data to server
    // Example: axios.post('/api/feedback', { name, phoneNumber });
  };

  return (
    <BlockStyle>
      <BlockContent>
        <BlockTitle title="Обратная связь" description="Если есть вопросы или предложения мы ждем вас" $titleColor="#fff" $deskColor="#fff" $lineColor="#fff"></BlockTitle>

        <Form onSubmit={handleSubmit}>
            <NameInput type="text" name="name" placeholder="Ваше имя" value={name} onChange={handleNameChange} required />
            <Line />
            <PhoneInput type="tel" placeholder="+7 ()" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            <SubmitBtn type="submit">Отправить</SubmitBtn>
        </Form>
      </BlockContent>
    </BlockStyle>
  );
}

export default Feedback;