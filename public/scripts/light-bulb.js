const BASE_URL = 'https://light-bulb-app.herokuapp.com/api'

function setLightBulbColour(colour) {
  axios.put(`${BASE_URL}/bulb/colour`, colour)
    .then((response)  => {
      console.log(response)
    })
}

function turnLightBulb(state) {
  axios.put(`${BASE_URL}/bulb/${state}`)
    .then((response)  => {
      console.log(response)
    })
}