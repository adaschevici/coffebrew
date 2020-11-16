import * as types from '../actions/types'
import { REHYDRATE } from 'redux-persist'
const initialState = {
  loading: false,
  coffeeshops: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return { ...state, coffeeshops: action.payload } || state
    case types.REQUEST_PLACES:
      return { ...state, loading: true }
    case types.REQUEST_PLACES_SUCCESS:
      return { ...state, loading: false, coffeeshops: action.payload }
    case types.REQUEST_PLACES_FAILED:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
