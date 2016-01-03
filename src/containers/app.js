import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1>Dummy App</h1>
					<div>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

