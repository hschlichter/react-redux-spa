import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../containers/devtools';

const loggerMiddleware = createLogger();

const finalCreateStore = compose(
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	),
	DevTools.instrument()
)(createStore);


export default function configureStore(reducers, initialState = {}) {
	const store = finalCreateStore(reducers, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () => store.replaceReducers(require('../reducers')));
	}

	return store;
}
