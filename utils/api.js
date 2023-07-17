import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      console.log("logout");
    }

    return Promise.reject(err);
  }
);

export default api;
