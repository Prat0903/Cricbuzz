import axios from "axios";
import { API_URL } from "../utils/env";

let api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;
