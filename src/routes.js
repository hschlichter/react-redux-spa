import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Dummy from './containers/dummy';
import About from './containers/about';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dummy} />
		<Route path="about" component={About} />
	</Route>
);

