import axios from "axios";
import config from "./HeadersConfig";

function GetDataFromBackend(method) {
  return (path,data) =>  axios[method](`http://localhost:5000/api/v1/${path}`,data, config);
}

export default GetDataFromBackend;
