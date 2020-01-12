import { FETCH_SMURFS_REQUEST, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from '../actions/actions';

const initialState = {
    isLoading: false,
    error: '',
    smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          smurfs: action.payload
      }
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}