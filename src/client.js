import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexLink } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import create from './redux/create';
import routes from './routes.js';
import DevTools from './containers/devtools';

require('./styles/main.scss');

const history = createBrowserHistory();
const store = create({});

render(
	<Provider store={store}>
		<div>
			<Router history={history} routes={routes} />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('content')
);

