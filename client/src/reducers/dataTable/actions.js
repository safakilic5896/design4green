export const actionTypes = {
  CHANGE_DATATABLE: 'CHANGE_DATATABLE'
}

export const changeDataTable = data => ({
  type: actionTypes.CHANGE_DATATABLE,
  data
})