export const getDepartement = (region) => {
  return fetch(`http://vps-71135989.vps.ovh.net:4200/departement?region=${region}`, 
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
