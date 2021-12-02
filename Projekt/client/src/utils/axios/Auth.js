import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

export async function loginCheck(data) {
  axios
    .post('http://localhost:5000/api/login', data, config)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export async function register(data) {
  axios
    .post('http://localhost:5000/api/register', data, config)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}
