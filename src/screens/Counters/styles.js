import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #406377;
  padding-horizontal: 10%;
  justify-content: center;
`;

export const Empty = styled.View`
  flex: 1;
  background-color: #406377;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #A9A9A9;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  padding-horizontal: 20%;
`;

export const FlatList = styled.FlatList`
  flex: 1;
`;