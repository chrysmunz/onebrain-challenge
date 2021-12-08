
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { add, decrement, increment, remove, reset } from '../../actions/counter';
import { Container, Controller } from './styles';
import { Button, Counter } from '../../components';

const Config = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const toastAdd = () => {
    Toast.show({
      type: 'success',
      text1: 'counter successfully added'
    });
  };

	const toastRemove = () => {
    Toast.show({
      type: 'success',
      text1: `counter ${counter.selected} successfully removed`,
    });
  };
	
	const addCounter = async () => {
		dispatch(add());
		toastAdd();
	};

	const removeCounter = async () => {
		dispatch(remove(counter.selected));
		toastRemove();
	};

	return (
		<Container>
			<Button type='default' onPress={() => addCounter()}>Add new counter</Button>
			{counter.selected ?
				<>
					<Controller>
						<Button type='less' onPress={() => dispatch(decrement(counter.selected))} />
						<Button type='reset' onPress={() => dispatch(reset(counter.selected))} />
						<Button type='more' onPress={() => dispatch(increment(counter.selected))} />
					</Controller>
					<Counter
						selected={counter.selected}
						data={counter.counters.filter(item => item.id === counter.selected)[0]}
					/>
					<Button type='default' onPress={() => removeCounter()}>Remove</Button>
				</>
				: null
			}

		</Container>
	);
}

export default Config;