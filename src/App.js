import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers';

export default class App extends Component {
	render() {
		const store = createStore(reducer);
		return (
			<Provider store={store}>
				<TodoList />
			</Provider>
		);
	}
}