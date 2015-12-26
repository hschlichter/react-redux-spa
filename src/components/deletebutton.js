import React, { Component } from 'react';

export default class DeleteButton extends Component {
	componentDidMount() {
	}

	handleClick(event) {
		console.log('Delete');
	}

	render() {
		return (
			<button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete</button>
		);
	}
}

