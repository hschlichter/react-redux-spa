import React, { Component } from 'react';

export default class PreviewButton extends Component {
	componentDidMount() {
	}

	handleClick(event) {
		console.log('Preview');
	}

	render() {
		return (
			<button type="button" className="btn btn-primary" onClick={this.handleClick}>Preview</button>
		);
	}
}

