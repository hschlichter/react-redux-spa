import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import reducers from './reducers';
import Root from './containers/root';

require('./styles/base.scss');

const store = configureStore(reducers, {});

render(
	<Root store={store} />,
	document.getElementById('content')
);

