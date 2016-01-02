import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexLink } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import create from './redux/create';

import App from './containers/app';
import About from './containers/about';
import DevTools from './containers/devtools';

require('./styles/base.scss');

const history = createBrowserHistory();
const store = create({});

render(
	<Provider store={store}>
		<div>
			<Router history={history} >
				<Route path="/" component={App} />
				<Route path="about" component={About} />
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('content')
);

