import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Styled from 'styled-components/native';
import Todo from './Screens/Todo';

const ScrollView = Styled.ScrollView`
background-color : ${Colors.white};
`;

const Body = Styled.ScrollView`
  background-color: ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight:700;
`;

import {TodoListContextProvider} from '~/Context/TodoListContext';

interface Props {}

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
