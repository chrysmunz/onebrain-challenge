
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, decrement, increment, remove, reset } from '../../actions/counter';
import { Container, Controller } from './styles';
import { Button, Counter } from '../../components';

const Config = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<Container>
			<Button type='default' onPress={() => dispatch(add())}>Add</Button>
			<Button type='default' onPress={() => dispatch(remove(counter.selected))}>Remove</Button>
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
				</>
				: null
			}

		</Container>
	);
}

export default Config;