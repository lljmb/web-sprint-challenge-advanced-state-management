import axios from 'axios';

export const START_FETCH = 'START_FETCH'
export const FETCH_SMURF_LIST = 'FETCH_SMURF_LIST'
export const FETCH_ERROR = 'FETCH_ERROR'
export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

//1. Add fetch smurfs action: 
export const fetchSmurfs = () => {
    return (dispatch => {
    // dispatch actions that indicate if we are waiting for a server response
    dispatch({type: START_FETCH });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        // fetch and return initial list of smurfs
        dispatch({type: FETCH_SMURF_LIST, payload: res.data});
    })
    .catch(error => {
        // dispatch an error text action if an error is returned from the server
        dispatch({type: FETCH_ERROR, payload: error});
    })
});
}

//2. Add add smurf action:
export const addSmurf = (newSmurf) => dispatch => {
    //  - dispatch an error text action if smurf data does not includes a name, nickname and position field
    axios
    // - send a post request with the smurf as body to see if there is an error
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        // - dispatch add smurf action if request is successful
        dispatch({type: ADD_SMURF, payload: newSmurf});
    })
    .catch(error => {
        // - dispatch an error text action if an request returns an error
        dispatch({type: ADD_SMURF_ERROR, payload: error});
    })
}

//Task List:




//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem necessary to complete application.