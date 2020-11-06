import { actionTypes } from './actions'

const initialState = []

const changeDataTableState = (state, action) => {
  const {data} = action
  return [...data]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DATATABLE:
      return changeDataTableState(state, action)
    default:
      return state
  }
}