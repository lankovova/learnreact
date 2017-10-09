import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

class TemperatureCalc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scale: '',
			temperature: ''
		};
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsiusTemp = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheitTemp = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsiusTemp}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheitTemp}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict
					celsius={parseFloat(celsiusTemp)}
				/>
			</div>
		);
	}
}

export default TemperatureCalc;
