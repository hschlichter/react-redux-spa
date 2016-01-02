const ADD_DATA = 'redux/dummy/ADD_DATA';
const FETCH_DATA = 'redux/dummy/FETCH_DATA';

const initialState = {
	welcome: '',
	message: '',
	isFetching: false
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case ADD_DATA:
			return {
				...state,
				...action.json,
				isFetching: false
			};
		case FETCH_DATA:
			return {
				...state,
				isFetching: true
			}
		default:
			return state;
	}
}

export function addData() {
	return {
		type: ADD_DATA,
		json: {
			welcome: 'Fubar',
			message: 'Hello World ' + Math.random()
		}
	}
}

export function asyncAddData() {
	return (dispatch, getState) => {
		dispatch({ type: FETCH_DATA });
		const state = getState();
		setTimeout(() => {
			dispatch(addData());
		}, 1500);
	};
}

