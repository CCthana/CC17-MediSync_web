import axios from "../config/axios-admin";

const userApi = {}

userApi.login = (body) => axios.post('/user/login', body)