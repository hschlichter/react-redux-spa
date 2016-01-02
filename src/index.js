import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import create from './redux/create';

import App from './containers/app';
import DevTools from './containers/devtools';

require('./styles/base.scss');

const store = create({});

render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('content')
);

