
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { select } from '../../actions/counter';
import { Container, Empty, FlatList, Text, Title } from './styles.js';
import { Counter } from '../../components';

const Counters = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      {counter.counters.length === 0 ?
       <Empty>
         <Icon name='list-alt' size={60} color='#FFFFFF' />
         <Title>Empty list</Title>
         <Text>You have no counters at the moment</Text>
       </Empty> :
        <FlatList
          data={counter.counters}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Counter
              data={item}
              selected={counter.selected}
              onPress={() => dispatch(select(item.id))}
            />
          )}
        />
      }

    </Container>
  );
}

export default Counters;