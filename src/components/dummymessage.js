import React, { Component } from 'react';

export default class DummyMessage extends Component {
	render() {
		return (
			<p>{this.props.text}</p>
		);
	}
}

