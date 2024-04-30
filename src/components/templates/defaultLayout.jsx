import React from 'react';
import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export const Content = styled.div`
  padding: 20px 8%;
  // background-color: #f0f0f0;
  min-height: 100vh;
  max-width: 100%;
`;

const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </div>
  );
}

export default DefaultLayout;