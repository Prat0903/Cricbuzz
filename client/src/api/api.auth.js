import api from "../lib/axios";

export let getMe = () => api.get("/auth/me");
