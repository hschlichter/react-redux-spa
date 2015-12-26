import React, { Component } from 'react';

export default class SaveButton extends Component {
	componentDidMount() {
	}

	handleClick(event) {
		console.log('Save');
	}

	render() {
		return (
			<button type="button" className="btn btn-success" onClick={this.handleClick}>Save</button>
		);
	}
}

