import axios from 'axios'
import config from '../HeadersConfig'

export function Auth(data,path) {
  return axios.post(`http://localhost:5000/api/${path}`, data, config)
}

