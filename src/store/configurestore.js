import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(reducers, initialState = {}) {
	const loggerMiddleware = createLogger();

	return applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)(createStore)(reducers, initialState);
}
