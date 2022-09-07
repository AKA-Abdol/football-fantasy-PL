import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_TITLE,
});

export default {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};
