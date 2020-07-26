const BASE_URL = 'https://dinnye-karancs.herokuapp.com/api'

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

function setHotelColour(colour) {
  return axios.put(`${BASE_URL}/hotel/colour`, {colour})
}

function setHotelMatrix(data) {
  let matrix = {data: JSON.parse(data)}
  return axios.put(`${BASE_URL}/hotel/matrix`, matrix)
}

function setRoomColour(floor, room, colour) {
  let data = {floor, room, colour}
  return axios.put(`${BASE_URL}/hotel/rooms`, data)
}

//
// function setLightBulbColour(colour) {
//   axios.put(`${BASE_URL}/bulb/colour`, colour)
//     .then((response)  => {
//       console.log(response)
//     })
// }
//
// function turnLightBulb(state) {
//   axios.put(`${BASE_URL}/bulb/${state}`)
//     .then((response)  => {
//       console.log(response)
//     })
// }