import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './TodoApp.css';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{id: 0, text: 'Homework'},
				{id: 1, text: 'Webpack in depth'}
			],
			idCounter: 1
		};

		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(todoText) {
		todoText = todoText.trim();

		if (!todoText) return;

		const todo = { id: ++this.state.idCounter, text: todoText};

		this.setState(prevState => {
			prevState.todos.push(todo);
			return {todos: prevState.todos};
		});
	}

	removeTodo(todoId) {
		this.setState(prevState => {
			const remainTodos = prevState.todos.filter(todo => todo.id !== todoId);

			return {todos: remainTodos};
		});
	}

	render() {
		return (
			<div className="TodoAppWrapper">
				<div className="TodoApp">
					<TodoForm addTodo={this.addTodo}/>
					<TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
				</div>
			</div>
		);
	}
}

export default TodoApp;
