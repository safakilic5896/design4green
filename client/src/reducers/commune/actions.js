export const actionTypes = {
  COMMUNE: 'COMMUNE'
}

export const communeData = communeList => ({
  type: actionTypes.COMMUNE,
  communeList
})