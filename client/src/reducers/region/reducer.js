import { actionTypes } from './actions'

const initialState = []

const regionList = (state, action) => {
  const {regionList} = action
  return [...regionList]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REGION:
      return regionList(state, action)
    default:
      return state
  }
}