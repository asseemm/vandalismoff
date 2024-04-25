import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#804988')};
  border: ${({ borderColor }) => (borderColor ? `2px solid ${borderColor}` : '2px solid #804988')};
  padding: ${({ padding }) => (padding ? padding : '8px 16px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : '"Jost", sans-serif')};
  cursor: pointer;
  width: ${({ width }) => (width ? width : '70px')};
  height: ${({ height }) => (height ? height : '50px')};  
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '60px')};
`;

const Button = ({
  bgColor,
  borderColor,
  padding,
  fontSize,
  textAlign,
  fontFamily,
  width,
  height,
  borderRadius,
  children,
}) => {
  return (
    <ButtonContainer
      bgColor={bgColor}
      borderColor={borderColor}
      padding={padding}
      fontSize={fontSize}
      textAlign={textAlign}
      fontFamily={fontFamily}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
