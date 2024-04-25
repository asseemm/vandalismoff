import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  color: ${({ color }) => (color ? color : '#222222')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : '"Jost", sans-serif')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 'inherit')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'inherit')};
  text-align: ${({ textAlign }) => textAlign};
`;

const Text = ({
  fontSize,
  children,
  fontSizeTablet,
  fontSizePhone,
  fontWeight,
  lineHeight,
  lineHeightTablet,
  lineHeightPhone,
  color,
  textAlign,
}) => {
  return (
    <TextContainer
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
      fontSizePhone={fontSizePhone}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      lineHeightTablet={lineHeightTablet}
      lineHeightPhone={lineHeightPhone}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </TextContainer>
  );
};

export default Text;
