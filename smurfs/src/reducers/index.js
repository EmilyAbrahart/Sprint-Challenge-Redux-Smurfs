import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE,
	ADD_NEW_SMURF_SUCCESS,
	DELETE_SMURF_SUCCESS
} from './../actions';

const initialState = {
	smurfs: [],
	isFetching: false,
	error: ''
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};

		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				error: '',
				isFetching: false,
				smurfs: action.payload
			};

		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false
			};

		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload
			};

		case ADD_NEW_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload
			};

		default:
			return state;
	}
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
