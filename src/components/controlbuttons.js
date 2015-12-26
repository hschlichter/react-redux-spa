import React, { Component } from 'react';

import SaveButton from './savebutton';
import PreviewButton from './previewbutton';
import ReloadButton from './reloadbutton';
import DeleteButton from './deletebutton';

export default class ControlButtons extends Component {
	render() {
		let controlButtonsClassName = '';
		if (this.props.top) {
			controlButtonsClassName = 'control-buttons-top-div';
		}
		else if (this.props.bottom) {
			controlButtonsClassName = 'control-buttons-bottom-div';
		}

		return (
			<div className="row">
				<div className="col-md-2">
				</div>
				<div className="col-md-8">
					<div className={controlButtonsClassName}>
						<SaveButton />
						<PreviewButton />
						<ReloadButton />
						<DeleteButton />
					</div>
				</div>
				<div className="col-md-2">
				</div>
			</div>
		);
	}
}

