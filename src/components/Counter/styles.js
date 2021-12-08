import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.selected ? '#D8D8D8' : '#C0C0C0'};;
  width: 100%;
  border-radius: 10px;
  border-width: 6px;
  border-color: ${props => props.selected ? '#FFFFFF' : '#C0C0C0'};
  padding: 10px;
  margin-vertical: 10px;
`;

export const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

export const Count = styled.Text`
  color: #333333;
  text-align: right;
  font-size: 40px;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  margin-top: 20px;
`;