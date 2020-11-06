export const actionTypes = {
  INPUT_COMMUNE: 'INPUT_COMMUNE',
  INPUT_DEPARTEMENT: 'INPUT_DEPARTEMENT',
  INPUT_DEPARTEMENT_COMMUNE: 'INPUT_DEPARTEMENT_COMMUNE'
}

export const inputCommuneChange = () => ({
  type: actionTypes.INPUT_COMMUNE
})

export const inputDepartementChange = () => ({
  type: actionTypes.INPUT_DEPARTEMENT
})

export const inputDepartementCommuneChange = () => ({
  type: actionTypes.INPUT_DEPARTEMENT_COMMUNE
})