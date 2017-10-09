import React from 'react';

function TodoListItem({todo, removeTodo}) {
	return <li className="TodoListItem">{todo.text} <button onClick={() => removeTodo(todo.id)}>&#10004;</button></li>;
}

export default TodoListItem;
