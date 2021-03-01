import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableWithoutFeedback`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
`;

const BlackBackground = Styled.View`
    background-color: #000;
    opacity : 0.3;
    width: 100%;
    height: 100%;
`;

interface Props {
  onPress: () => void;
}

const Background = ({onPress}: Props) => {
  return (
    <Container>
      <BlackBackground />
    </Container>
  );
};

export default Background;
