import axios from "axios";
import config from "./HeadersConfig";
import httpMethods from "./HeadersConfig";

function ApiMethod(method) {
  return (path, data) =>
    axios[method](`http://localhost:5000/api/v1/${path}`, data, config);
}

export const fetchDataFromBackend = {
  GetMethod: ApiMethod(httpMethods.get),
  PostMethod: ApiMethod(httpMethods.post),
  PutMethod: ApiMethod(httpMethods.put),
  PatchMethod: ApiMethod(httpMethods.patch),
  DeleteMethod: ApiMethod(httpMethods.delete),
};
