import { actionTypes } from './actions'

const initialState = [{
  inputDepartement: false,
  inputCommune: false
}]

const changeInputDepartementState = (state) => {
  return [...state, state.map((item) => item.index===0 ? item.inputDepartement=!item.inputDepartement : 
    item.inputCommune=item.inputCommune)]
}

const changeinputCommuneState = (state) => {
  return [...state, state.map((item) => item.index===1 ? item.inputCommune=!item.inputCommune : 
    item.inputDepartement=item.inputDepartement)]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INPUT_DEPARTEMENT:
      return changeInputDepartementState(state)
    case actionTypes.INPUT_COMMUNE:
      return changeinputCommuneState(state)
    default:
      return state
  }
}