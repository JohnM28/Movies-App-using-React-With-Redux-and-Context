import * as actions from '../actions';

const initialState = {
	movies: [],
	favourite: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_FAVOURITE:
			const newMovie = [...state.favourite, action.payload];
			return {
				...state,
				favourite: newMovie,
			};
		case actions.REMOVE_FAVOURITE:
			const originalFav = state.favourite;
			const filtredFav = originalFav.filter((f) => f.id !== action.payload);
			return {
				...state,
				favourite: filtredFav,
			};
		default:
			return state;
	}
};
