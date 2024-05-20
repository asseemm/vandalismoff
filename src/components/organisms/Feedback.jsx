import React from 'react';
import styled from 'styled-components';

import BlockTitle from '../atoms/BlockTitle';

const BlockStyle = styled.div`
  max-width: 100%;
  height: auto; 
  padding: 100px 10%;
`;

const BlockContent = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

const Feedback = () => {
  return (
    <BlockStyle>
      <BlockContent>
        <BlockTitle title="Почему мы?" description="почему вы должны вступить именно в нашу команду" $descWidth="30%"></BlockTitle>
      </BlockContent>
    </BlockStyle>
  );
}

export default Feedback;