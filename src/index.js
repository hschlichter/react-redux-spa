import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import reducers from './reducers';
import App from './containers/app';
import DevTools from './containers/devtools';

require('./styles/base.scss');

const store = configureStore(reducers, {});

render(
	<Provider store={store}>
		<div>
			<App />
		</div>
	</Provider>,
	document.getElementById('content')
);

