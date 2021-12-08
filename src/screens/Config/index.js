
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { add, decrement, increment, remove, removeAll, reset } from '../../actions/counter';
import { Container, Controller, Selected } from './styles';
import { Button, Counter } from '../../components';

const Config = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const showToast = (text) => {
		Toast.show({
			type: 'success',
			text1: text
		});
	};

	const addCounter = async () => {
		dispatch(add());
		showToast('counter successfully added');
	};

	const removeCounter = async () => {
		dispatch(remove(counter.selected));
		showToast(`counter ${counter.selected} successfully removed`);
	};

	const removeAllCounters = async () => {
		dispatch(removeAll());
		showToast('all counters successfully removed');
	};

	return (
		<Container>
			<Selected>
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
			</Selected>
			<Button type='default' onPress={() => addCounter()}>Add new counter</Button>
			<Button
				type='default'
				disabled={counter.counters.length === 0}
				onPress={() => removeAllCounters()}
			>
				Remove all counters
			</Button>
		</Container>
	);
}

export default Config;