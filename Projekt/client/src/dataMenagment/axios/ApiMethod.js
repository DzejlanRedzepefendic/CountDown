import axios from "axios";
import config from "./HeadersConfig";
import httpMethods from "./HttpMethods";

function ApiMethod(method) {
  return (path, data) =>
    axios[method](`http://localhost:5000/api/v1/${path}`, data, config);
}

export const fetchData = {
  get: ApiMethod(httpMethods.get),
  post: ApiMethod(httpMethods.post),
  put: ApiMethod(httpMethods.put),
  patch: ApiMethod(httpMethods.patch),
  delete: ApiMethod(httpMethods.delete),
};
