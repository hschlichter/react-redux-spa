import React, { Component } from 'react';
import { connect } from 'react-redux';

import DummyView from './dummyview';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1>Dummy App</h1>
					<DummyView />
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

