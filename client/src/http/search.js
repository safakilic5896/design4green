export const getSearch = (region, departement, commune) => {

  var regionQ = ''
  var departementQ = ''
  var communeQ = ''
  if (regionQ !== undefined) {
    regionQ = region
  }
  if (departement !== undefined) {
    departementQ = departement
  }
  if (communeQ !== undefined) {
    communeQ = commune
  }
  return fetch(`http://vps-71135989.vps.ovh.net:4200/search?region=${regionQ}&departement=${departementQ}&commune=${communeQ}`, 
  {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
    .catch(err => console.log(err))
  }
