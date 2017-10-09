import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todos, removeTodo}) {
	return (
		<ul>
			{todos.map((todo, index) => <TodoListItem key={index} todo={todo} removeTodo={removeTodo} />)}
		</ul>
	);
}

export default TodoList;
