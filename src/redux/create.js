import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './modules';
import DevTools from '../containers/devtools';

export default function create(initialState = {}) {
	const loggerMiddleware = createLogger();

	const finalCreateStore = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		DevTools.instrument()
	)(createStore);

	const store = finalCreateStore(reducer, initialState);

	if (module.hot) {
		module.hot.accept('./modules', () => store.replaceReducers(require('./modules')));
	}

	return store;
}
