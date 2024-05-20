import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
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
    font-size: 18px;
    line-height: 120%;
    color: #606060;
    margin-top: 30px;
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

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

const News = () => {
  return (
    <Content>
        <BlockTitle title="Статьи, новости, полезные материалы" description="Истории и события из жизни компании" />
        <NewsContainer {...settings}>
            {posts.map(post => (
              <NewsCard key={post.id}>
                <NewsContent>
                  <NewsImage>
                  {post.featured_images.map(image => (
                      <Image key={image.path} src={image.path} alt="News" layout="responsive" width={500} height={300} />
                  ))}
                  </NewsImage>
                  <p>{post.excerpt}</p>
                  <div className="line"></div>
                  <div className="underline">
                      <DateText>{new Date(post.published_at).toLocaleDateString()}</DateText>
                      <Elips>
                        <SVG>
                         <MoreNewsSvg/>
                        </SVG>
                      </Elips>
                  </div>
                </NewsContent>
              </NewsCard>
            ))}
        </NewsContainer>
    </Content>
  );
};

export default News;
