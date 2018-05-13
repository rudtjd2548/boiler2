import { createAction, handleActions } from 'redux-actions'

const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

export const api_call_request = createAction(API_CALL_REQUEST)
export const api_call_success = createAction(API_CALL_SUCCESS, dog => dog)
export const api_call_failure = createAction(API_CALL_FAILURE, error => error)

const initialState = {
  fetching: false,
  dog: null,
  error: null
};
export default handleActions({
  [API_CALL_REQUEST]: (state, action) => {
    return { ...state, fetching: true, error: null }
  },
  [API_CALL_SUCCESS]: (state, { payload: dog }) => {
    return { ...state, fetching: false, dog: dog }
  },
  [API_CALL_FAILURE]: (state, { payload: error }) => {
    return { ...state, fetching: false, dog: null, error: error }
  }
}, initialState)
