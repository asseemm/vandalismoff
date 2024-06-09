import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import Link from 'next/link';
import useContentful from '@/useContentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BlockTitle from '../atoms/BlockTitle';
import Image from 'next/image';
import Van3 from '@/assets/img/van3.jpeg'
import { MoreNewsSvg } from '@/assets/icon/MoreNewsSvg';

const Content = styled.div`
  display: block;
  padding: 50px 10%;
`;

const NewsContainer = styled(Slider)`
  margin-top: 2%;
`;

const NewsCard = styled.div`
  max-width: 90%;
  margin: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  p {
    font-family: 'Proxima Soft', sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #606060;
    margin-top: 20px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
    margin: 30px 0;
  }

  .underline {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 180px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 20px 0;
  }

  @media (max-width: 400px) {

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 15px;
    }
  }
`;

const NewsContent = styled.div`
  max-width: 100%;
  padding: 10px;
`;

const DateText = styled.p`
  color: #804988;
`;

const Svg = styled.div`
  width: 20px;
`;

const Elips = styled.div`
  width: 40px;
  height: 40px;
  background-color: #6C3E73;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;

  @media (max-width: 768px) {
    width: 40px;
    height: 30px;
  }

  @media (max-width: 570px) {
    width: 30px;
    height: 20px;
  }
`;

const NewsImage = styled.div`
  width: 100%;
  height: 250px;
  img{
    width: 100%;
    object-fit: cover;
  }
`;

const SVG = styled.div`
  width: 20px;

  @media (max-width: 768px) {
    width: 15px;
  }

  @media (max-width: 570px) {
    width: 10px;
  }
`;

const NewsTitle = styled.h2`
  font-family: 'Jost', sans-serif;
  font-size: 24px;
  line-height: 26px;
  color: #302733;
  margin-top: 30px;

  @media (max-width: 700px){
    font-size: 18px;
    line-height: 22px;
    margin-top: 20px;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,  
  autoplaySpeed: 3000,  
  responsive: [
    {
      breakpoint: 1024, // Для планшетов и меньше
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 500, // Для мобильных устройств
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const News = () => {
  const { getNews } = useContentful();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getNews().then(data => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  return (
    <Content>
      <BlockTitle title="Статьи, новости, полезные материалы" description="Читайте последние новости и интересные статьи здесь." />
      <NewsContainer {...settings}>
        {posts.map(post => (
          <NewsCard key={post.id}>
            <Link href={post.link} target="_blank" >
            <NewsContent>
                <NewsImage data-aos="fade-up">
                  <img src={post.imageLink} alt="News" style={{ width: '100%', height: '100%' }} />
                </NewsImage>
                <NewsTitle data-aos="fade-up">{post.title}</NewsTitle>
                <div data-aos="fade-up">{documentToReactComponents(post.text)}</div> {/* Используйте <div> вместо <p> */}
                <div className="line" data-aos="fade-up"></div>
                <div className="underline" data-aos="fade-up">
                  <DateText>{new Date(post.date).toLocaleDateString()}</DateText>
                  <Elips>
                    <SVG>
                      <MoreNewsSvg />
                    </SVG>
                  </Elips>
                </div>
              </NewsContent>
            </Link>
          </NewsCard>
        ))}
      </NewsContainer>
    </Content>
  );
};

export default News;