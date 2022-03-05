import axios from "axios";
import config from "./HeadersConfig";

export function getAllCountdowns(path) {
  return axios.get(`http://localhost:5000/api/v1/${path}`, config);
}
