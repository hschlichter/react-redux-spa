import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from 'redux/modules/dummy';

@connect()
export default class DummyAddDataButton extends Component {
	constructor() {
		super();
	}

	handleClick(event) {
		const { dispatch } = this.props;
		dispatch(addData());
	}

	render() {
		return (
			<button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>Dummy Add Data</button>
		);
	}
}

