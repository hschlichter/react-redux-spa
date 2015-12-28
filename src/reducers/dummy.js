import { ADD_DATA } from '../actions/dummy';

const initialState = {
	welcome: '',
	articles: []
};

export default function dummy(state = initialState, action = {}) {
	switch (action.type) {
		case ADD_DATA:
			return Object.assign({}, state, {
				welcome: action.json.welcome,
				articles: action.json.articles
			});
		default:
			return state;
	}
}
