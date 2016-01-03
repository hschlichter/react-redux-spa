import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(
	state => ({ dummy: state.dummy })
)
export default class About extends Component {
	render() {
		return (
			<div>
				<Link to="/">home</Link>
				<h3>Hello About</h3>
			</div>
		);
	}
}

