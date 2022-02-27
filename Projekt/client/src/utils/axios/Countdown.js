import axios from "axios";
import config from "../HeadersConfig";

export function getAllCountdowns() {
  return axios.get("http://localhost:5000/api/v1/countdown", config);
}
