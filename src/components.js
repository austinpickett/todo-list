import React from 'react';

// TODO: extract to separate files

export function Todo(props) {
	const { todo } = props;

	if(todo.isDone) {
		return <strike>{todo.text}</strike>
	} else {
		return <span>{todo.text}</span>;
	}
}

export function TodoList(props) {
	const { todos, toggleTodo, addTodo } = props;

	const onSubmit = (e) => {
		const text = e.target.value;
		if(e.which === 13 && text.length > 0) {
	        addTodo(text);
	        e.target.value = '';
      	}
	};

	const toggleClick = (id) => () => toggleTodo(id);

	return(
		<div className='todo'>
			<input type='text' 
				   className='todo_entry'
				   placeholder='Add todo'
				   onKeyDown={onSubmit} />
			<ul  className='todo_list'>
				{todos.map(t => (
					<li key={t.get('id')} 
						className='todo_item'
						onClick={toggleClick(t.get('id'))}>
						<Todo todo={t.toJS()} />
					</li>
				))}
			</ul>
		</div>
	);
}