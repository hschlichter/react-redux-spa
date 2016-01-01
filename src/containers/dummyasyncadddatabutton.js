import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncAddData } from 'redux/modules/dummy';

@connect()
export default class DummyAsyncAddDataButton extends Component {
	constructor() {
		super();
	}

	handleClick(event) {
		const { dispatch } = this.props;
		dispatch(asyncAddData());
	}

	render() {
		return (
			<button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>Dummy Async Add Data</button>
		);
	}
}

