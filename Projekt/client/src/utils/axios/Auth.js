import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

export async function loginCheck(data) {
  let response
  try {
    response = await axios.post('http://localhost:5000/api/login', data, config)
    return response
  } catch (error) {
    return error
  }
}

export async function register(data) {
  let response
  try {
    response = await axios.post(
      'http://localhost:5000/api/register',
      data,
      config
    )
    return response
  } catch (error) {
    return error
  }
}
