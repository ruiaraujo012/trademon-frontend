import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8000/v1/`,
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("access_token")}`;

export default instance;
