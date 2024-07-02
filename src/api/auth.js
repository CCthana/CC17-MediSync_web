import axios from "../config/axios";

const authApi = {};

authApi.login = (body) => {
  return axios.post("/auth/login", body);
};

authApi.loginOTP = (body) => {
  return axios.post("/auth/verify-otp", body);
};

authApi.getAuthUser = () => axios.get("/auth/me");

export default authApi;
