import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(
		thunkMiddleware
	)
)(createStore);

export default function configureStore(reducers, initialState = {}) {
	const store = finalCreateStore(reducers, initialState);
	return store;
}
