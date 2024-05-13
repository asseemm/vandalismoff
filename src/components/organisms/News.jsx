import React from 'react';
import styled from 'styled-components';
import { colors } from '../base/colors';

import BlockTitle from '../atoms/BlockTitle';

const Content = styled.div`
    display: block;
    padding: 50px 10%;
`;

const NewsContainer = styled.div`
  padding: 2% 6%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Svg = styled.div`
  width: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
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
    justify-content: center;
  }
`;

const NewsCard = styled.div`
  width: 30%;
  margin-right: 5%;
  img {
    width: 100%;
  }
  p {
    font-family: proxima-soft, sans-serif;
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
    p {
      width: 180px;
    }
    img {
      width: 100%;
      transition: width 0.3s ease;
      &:hover {
        width: 115%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
    margin-top: 10%;
  }
`;

const posts = [
  {
    id: 1,
    title: 'Первый пост',
    excerpt: 'Краткое описание первого поста',
    published_at: '2021-01-01',
    featured_images: [{ path: '/path/to/image1.jpg' }]
  },
  {
    id: 2,
    title: 'Второй пост',
    excerpt: 'Краткое описание второго поста',
    published_at: '2021-01-02',
    featured_images: [{ path: '/path/to/image2.jpg' }]
  }
];

const News = () => {
  return (
    <Content>
        <BlockTitle title="статьи, новости,полезные материалы" description="истории и события из жизни компании" />        
        <div>
            <NewsContainer>
                {posts.map(post => (
                <NewsCard key={post.id}>
                    {post.featured_images.slice(0, 1).map(image => (
                    <img key={image.path} src={image.path} alt="News" />
                    ))}
                    <p>{post.excerpt}</p>
                    <div className="line"></div>
                    <div className="underline">
                    <p>{new Date(post.published_at).toLocaleDateString()}</p>
                    <Elips>
                    <Svg>
                    <svg fill="#ffffff" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M29.3,10.4l-6.8-6c-0.6-0.4-1.3-0.5-2-0.2c-0.7,0.3-1.1,1-1.1,1.8v1.1C9.5,8.2,2,16.7,2,27c0,0.5,0.3,0.9,0.8,1c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.2,0.9-0.6c2.8-6.3,8.8-10.3,15.4-10.4v1c0,0.8,0.4,1.5,1.1,1.8 c0.7,0.3,1.4,0.2,2-0.2l6.7-6c0.5-0.4,0.8-1,0.8-1.6C30,11.4,29.7,10.8,29.3,10.4z"></path></g></svg>
                    </Svg>
                    </Elips>
                    </div>
                </NewsCard>
                ))}
            </NewsContainer>
        </div>
    </Content>
  );
};

export default News;