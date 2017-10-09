import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {inputValue: ''};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({inputValue: e.target.value});
	}

	handleSubmit() {
		this.props.addTodo(this.state.inputValue);
		// Clear input field
		this.setState({inputValue: ''});
	}

	render() {
		return (
			<div className="TodoForm">
				<input
					type="text"
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
				<button onClick={this.handleSubmit}>
					Add
				</button>
			</div>
		);
	}
}

export default TodoForm;
