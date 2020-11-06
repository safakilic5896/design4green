import { actionTypes } from './actions'

const initialState = [{
  inputDepartement: true
  },{
    inputCommune: true}
]

const changeInputDepartementState = (state) => {
  return [{inputDepartement: false}, {inputCommune: true}]
}

const changeinputCommuneState = (state) => {
  return [{inputDepartement: false}, {inputCommune: false}]
}

const changeInputDepartementCommuneState = (state) => {
  return initialState
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INPUT_DEPARTEMENT:
      return changeInputDepartementState(state)
    case actionTypes.INPUT_COMMUNE:
      return changeinputCommuneState(state)
    case actionTypes.INPUT_DEPARTEMENT_COMMUNE:
      return changeInputDepartementCommuneState(state)
    default:
      return state
  }
}