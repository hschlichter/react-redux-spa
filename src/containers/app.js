import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<p>Hello</p>
					<p>World</p>
					<p>Fubar</p>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		dummy: state.dummy
	};
})(App);

