import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const ADD_NEW_SMURF_SUCCESS = 'ADD_NEW_SMURF_SUCCESS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURFS_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then(res => {
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
		})
		.catch(err =>
			dispatch({
				type: FETCH_SMURFS_FAILURE,
				payload: err.response
			})
		);
};

export const addSmurf = smurf => dispatch => {
	dispatch({ type: ADD_NEW_SMURF});
	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then(res => dispatch({ type: ADD_NEW_SMURF_SUCCESS, payload: res.data }))
		.catch(err => console.log(`Could not add smurf: ${err.message}`));
};

export const deleteSmurf = id => dispatch => {
	dispatch({ type: DELETE_SMURF });
	axios
		.delete(`http://localhost:3333/smurfs/${id}`)
		.then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
		.catch(err => {
			console.log(`Could not delete smurf: ${err.message}`);
		});
};