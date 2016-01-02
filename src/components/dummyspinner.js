import React, { Component } from 'react';

export default class DummySpinner extends Component {
	render() {
		if (this.props.show) {
			return (
				<div className="spinner">
				  	<div className="rect1"></div>
					<div className="rect2"></div>
					<div className="rect3"></div>
					<div className="rect4"></div>
					<div className="rect5"></div>
				</div>
			);
		}

		return null;
	}
}

