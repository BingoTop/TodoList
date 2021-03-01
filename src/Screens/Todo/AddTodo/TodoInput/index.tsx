import React from 'react';
import Styled from 'styled-components/native';
import Background from './Background';
import TextInput from './TextInput';
import {Platform} from 'react-native';

const Container = Styled.KeyboardAvoidingView`
    position: absolute;
    bottom: 0;
    top:0;
    left:0;
    right:0;
    justify_content: flex-end;

`;

interface Props {
  hideTodoInput: () => void;
}

const TodoInput = ({hideTodoInput}: Props) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Background onPress={hideTodoInput} />
      <TextInput hideTodoInput={hideTodoInput} />
    </Container>
  );
};

export default TodoInput;
