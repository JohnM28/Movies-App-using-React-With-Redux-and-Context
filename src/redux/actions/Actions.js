import * as actions from './index';


export const addFavouriteAction = (movie) => {
	return {
		type: actions.ADD_FAVOURITE,
		payload: movie,
	};
};

export const RemoveFromFavouriteAction = (id) => {
	return {
		type: actions.REMOVE_FAVOURITE,
		payload: id,
	};
};
