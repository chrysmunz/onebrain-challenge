import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Title, Type1, Type2 } from './styles';

const Button = (props) => {
  if (props.type === 'default') {
    return (
      <Type1 style={{ opacity: props.disabled ? 0.5 : 1 }} disabled={props.disabled} onPress={props.onPress}>
        <Title>{props.children}</Title>
      </Type1>
    );
  }

  return (
    <Type2 onPress={props.onPress}>
      {props.type === 'more'
        ? <Icon name='plus' size={30} color='#333333' />
        : props.type === 'less'
          ? <Icon name='minus' size={30} color='#333333' />
          : <Icon name='history' size={30} color='#333333' />
      }
    </Type2>
  );
}
export default Button;