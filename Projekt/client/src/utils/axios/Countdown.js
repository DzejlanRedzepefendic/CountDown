import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

export async function getAllCountdowns() {
  let response
  try {
    response = await axios.get('http://localhost:5000/api/v1/countdown', config)
    return response
  } catch (error) {
    return error
  }
}
