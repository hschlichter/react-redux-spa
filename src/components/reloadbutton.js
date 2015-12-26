import React, { Component } from 'react';

export default class ReloadButton extends Component {
	componentDidMount() {
	}

	handleClick(event) {
		console.log('Reload');
	}

	render() {
		return (
			<button type="button" className="btn btn-warning" onClick={this.handleClick}>Reload</button>
		);
	}
}

