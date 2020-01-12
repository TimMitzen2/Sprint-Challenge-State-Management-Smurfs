import axios from 'axios';

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_REQUEST })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response =>
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_SMURFS_ERROR, payload: error.response }))
}

export const createSmurf = (smurf) =>{
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err.response });
      });
  };
}

export const  deleteSmurf = (id) => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_SMURFS_ERROR, payload: error.response });
      });
  };
}


