import React, { Component } from 'react';

export default class DummyWelcome extends Component {
	render() {
		return (
			<h3>{this.props.text}</h3>
		);
	}
}

