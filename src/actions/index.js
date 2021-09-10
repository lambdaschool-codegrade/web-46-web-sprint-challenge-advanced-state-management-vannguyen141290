import getSmurfs from '../services/APIs';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

const fetchStart = () => ({ type: FETCH_START });
const fetchSuccess = smurfsData => ({ type: FETCH_SUCCESS, payload: smurfsData});
const fetchFailure = error => ({ type: FETCH_FAILURE, payload: error});

export const fetchSmurfs = () => dispatch => {
    dispatch(fetchStart());

    getSmurfs()
        .then(res => dispatch(fetchSuccess(res.data)))
        .catch(err => dispatch(fetchFailure(err)))
}

export const addSmurf = newSmurf => dispatch => dispatch({ type: ADD_SMURF, payload: newSmurf});
export const setError = errorMessage => dispatch => dispatch({ type: SET_ERROR, payload: errorMessage})


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.