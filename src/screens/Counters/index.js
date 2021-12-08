
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { select } from '../../actions/counter';
import { FlatList } from './styles.js';
import { Counter } from '../../components';

const Counters = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counter.selected);
  }, []);

  return (
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
  );
}

export default Counters;