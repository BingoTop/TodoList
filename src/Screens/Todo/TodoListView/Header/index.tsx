import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
    height:40px;
    justify-content:center;
    align-items:center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props {}

const Header = ({}: Props) => {
  return (
    <Container>
      <TitleLabel>TodoListApp</TitleLabel>
    </Container>
  );
};

export default Header;
