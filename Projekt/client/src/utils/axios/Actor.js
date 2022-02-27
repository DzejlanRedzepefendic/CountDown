import axios from 'axios'
import config from '../HeadersConfig'

async function getAllActors() {
  return axios.get('http://localhost:5000/api/v1/actor', config)
}

export default getAllActors
