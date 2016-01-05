import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<h1>Jockstrap</h1>
				</div>
				{this.props.children}
			</div>
		);
	}
}

