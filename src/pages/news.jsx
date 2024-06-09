import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useContentful from '@/useContentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import DefaultLayout from "@/components/templates/defaultLayout";
import Header from "@/components/organisms/Header";
import Image from 'next/image';
import Van3 from '@/assets/img/van3.jpeg'
import { MoreNewsSvg } from '@/assets/icon/MoreNewsSvg';

const PageContent = styled.section`
  max-width: 100%;
  height: auto; 
  padding: 80px 10%;

  @media screen and (max-width: 650px) {
      padding: 40px 10%;
  }
`;

const CardContent = styled.div`
    display: block;
`;

const NewsContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NewsCard = styled.div`
  width: 30%;
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

  @media (max-width: 1080px) {
    width: 45%;
    margin: 20px 0;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    p {
      font-size: 16px;
      line-height: 120%;
      margin-top: 25px;
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

const posts = [
  {
    id: 1,
    title: 'Первый пост',
    excerpt: 'Краткое описание первого поста',
    published_at: '2021-01-01',
    featured_images: [{ path: Van3 }]
  },
  {
    id: 2,
    title: 'Второй пост',
    excerpt: 'Краткое описание второго поста',
    published_at: '2021-01-02',
    featured_images: [{ path: Van3 }]
  },
  {
    id: 3,
    title: 'Третий пост',
    excerpt: 'Краткое описание третьего поста',
    published_at: '2021-01-03',
    featured_images: [{ path: Van3 }]
  }
];

export default function News() {
  const { getNews } = useContentful();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getNews().then(data => {
      console.log(data);
      setPosts(data);
    });
  }, []);
  return (
    <DefaultLayout>
        <Header $backgroundcolor={'#804988'} color={'#fff'} $displaymenuwhite={'block'} $displaymenupurple={'none'}/>
        <div className="line-text">
            <div className="line"></div>    
            <div className="marquee">
                <span>
                <div className="text">
                      <p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p>
                      <p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p>
                      <p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p>
                      <p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p>
                      <p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p><p>новости</p>
                    </div>
                </span>
            </div>
            <div className="line"></div>
        </div>
        <PageContent>
            <CardContent>
                <NewsContainer>
                    {posts.map(post => (
                      <NewsCard key={post.id}>
                        <a href={post.link} target="_blank" >
                        <NewsContent>
                        <NewsImage data-aos="fade-up">
                          <img src={post.imageLink} alt="News" style={{ width: '100%', height: '100%' }} />
                        </NewsImage>
                          <NewsTitle data-aos="fade-up">{post.title}</NewsTitle> 
                          <p data-aos="fade-up">{documentToReactComponents(post.text)}</p>
                          <div className="line" data-aos="fade-up"></div>
                          <div className="underline" data-aos="fade-up">
                              <DateText>{post.date}</DateText>
                              <Elips>
                                <SVG>
                                  <MoreNewsSvg/>
                                </SVG>
                              </Elips>
                          </div>
                        </NewsContent>
                        </a>
                      </NewsCard>
                    ))}
                </NewsContainer>
            </CardContent>
        </PageContent>
    </DefaultLayout>
  );
}
