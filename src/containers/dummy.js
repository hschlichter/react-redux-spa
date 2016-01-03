import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import DummyWelcome from 'components/dummywelcome';
import DummyMessage from 'components/dummymessage';
import DummySpinner from 'components/dummyspinner';
import DummyAddDataButton from './dummyadddatabutton';
import DummyAsyncAddDataButton from './dummyasyncadddatabutton';

@connect(
	state => ({ dummy: state.dummy })
)
export default class Dummy extends Component {
	render() {
		return (
			<div>
				<Link to="/about">About</Link>
				<div className="row">
					<div className="col-md-12">
						<DummyWelcome text={this.props.dummy.welcome} />
						<DummyMessage text={this.props.dummy.message} />
						<DummySpinner show={this.props.dummy.isFetching} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<DummyAddDataButton />
						<DummyAsyncAddDataButton />
					</div>
				</div>
			</div>
		);
	}
}

