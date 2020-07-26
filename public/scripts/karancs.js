const BASE_URL = 'https://dinnye-karancs.herokuapp.com/api'

async function wait(duration) {
  await new Promise(resolve => setTimeout(resolve, duration));
}

function setHotelColour(colour) {
  axios.put(`${BASE_URL}/hotel/colour`, {colour})
    .then((response)  => {
      console.log(response)
    })
}

function setHotelMatrix(data) {
  axios.put(`${BASE_URL}/hotel/matrix`, data)
    .then((response)  => {
      console.log(response)
    })
}

function setRoomColour(floor, room, colour) {
  let data = {floor, room, colour}
  axios.put(`${BASE_URL}/hotel/rooms`, data)
    .then((response)  => {
      console.log(response)
    })
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