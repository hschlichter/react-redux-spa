import React, { Component } from 'react';

export default class DummySpinner extends Component {
	render() {
		if (this.props.show) {
			return (
				<div className="throbber-loader">
					Loading...
				</div>
			);
		}

		return null;
	}
}

