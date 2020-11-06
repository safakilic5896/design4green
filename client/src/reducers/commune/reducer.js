import { actionTypes } from './actions'

const initialState = []

const communeList = (state, action) => {
  const {communeList} = action
  return [...communeList]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.COMMUNE:
      return communeList(state, action)
    default:
      return state
  }
}