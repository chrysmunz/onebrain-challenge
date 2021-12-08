import React from 'react';

import { Container, Count, Title } from './styles';

const Counter = (props) => {
  return (
    <Container
      selected={props.selected === props.data.id}
      onPress={props.onPress}
    >
      <Title selected={props.selected === props.data.id}>Counter {props.data.id + 1}</Title>
      <Count selected={props.selected === props.data.id}>{props.data.count}</Count>
    </Container>

  );
}
export default Counter;