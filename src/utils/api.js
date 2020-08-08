import axios from "axios";

const url = "http://localhost:8000/v1/";
// const url = "http://192.168.1.178:8000/v1/";
// const url = "http://192.168.1.96:8000/v1/";

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
