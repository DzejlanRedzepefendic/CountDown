import axios from 'axios'
import config from '../HeadersConfig'

async function getAllActors(path) {
  return axios.get(`http://localhost:5000/api/v1/${path}`, config)
}

export default getAllActors
