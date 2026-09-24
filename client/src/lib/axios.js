import axios from "axios";
import { API_URL } from "../utils/env";

let api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalRequest = error?.config;
    let errMessage = error.response?.data?.message;
    let errSuccess = error.response?.data?.success;
    let errStatusCode = error.response?.status;

    if (errSuccess) return Promise.reject(error);

    if (errMessage === "Access token expired") {
      if (errStatusCode !== 401 || originalRequest._retry)
        return Promise.reject(error);
      originalRequest._retry = true;
 
      try {
        await axios.get(`${API_URL}/auth/refreshToken`, {
          withCredentials: true,
        });
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
