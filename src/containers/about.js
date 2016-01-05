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
				<div className="row">
					<Link to="/">home</Link>
				</div>
				<div className="row">
					<h3>Hello About</h3>
				</div>
			</div>
		);
	}
}

