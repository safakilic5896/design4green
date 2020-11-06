import { actionTypes } from './actions'

const initialState = []

const DepartementList = (state, action) => {
  const {departementList} = action
  return [...departementList]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.DEPARTEMENT:
      return DepartementList(state, action)
    default:
      return state
  }
}