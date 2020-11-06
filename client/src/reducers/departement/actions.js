export const actionTypes = {
  DEPARTEMENT: 'DEPARTEMENT'
}

export const departemenData = departementList => ({
  type: actionTypes.DEPARTEMENT,
  departementList
})