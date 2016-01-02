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
				<div className="container">
					<h1>Hello About</h1>
					<Link to="/">home</Link>
				</div>
			</div>
		);
	}
}

