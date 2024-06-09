import React, { useState } from 'react';
import styled from 'styled-components';
import BlockTitle from '../atoms/BlockTitle';

const BlockStyle = styled.div`
  max-width: 100%;
  height: auto;
  padding: 80px 10%;
  padding-top: 0px;
  // background: #80498880;
`;

const BlockContent = styled.div`
  position: relative;
  padding: 50px;
  border-radius: 30px;
  background: #8049887d;

  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
`;

const Form = styled.form`
  width: 800px;
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 850px) {
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
  @media screen and (max-width: 1200px) {
    height: 60px;
  }
  @media screen and (max-width: 850px) {
    width: 95%;
    height: 50px;
    font-size: 14px;
  }
`;

const PhoneInput = styled.input`
  width: 60%;
  height: 80px;
  border-radius: 40px;
  border: none;
  padding-left: 5%;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
    height: 60px;
  }
  @media screen and (max-width: 850px) {
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
  font-size: 18px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: -250px;

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1200px) {
    height: 45px;
    width: 180px;
    margin-left: -190px;
    font-size: 16px;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 50px;
    margin-left: 0px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #aaa;
  margin-left: -10%;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

function Feedback() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/feedback/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ name: name, phone_number: phone })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return (
      <BlockStyle id='feedback'>
       <BlockContent>
        <div className='feedback-back'></div>
         <BlockTitle title="Обратная связь" description="Если есть вопросы или предложения мы ждем вас" $titleColor="#fff" $deskColor="#fff" $lineColor="#fff"></BlockTitle>
         <Form onSubmit={handleSubmit} data-aos="fade-up">
           <NameInput type="text" name="name" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required />
           <Line />
           <PhoneInput type="tel" placeholder="+7 ()" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
           <SubmitBtn type="submit">Отправить</SubmitBtn>
         </Form>
       </BlockContent>
     </BlockStyle>
    );
}

export default Feedback;
