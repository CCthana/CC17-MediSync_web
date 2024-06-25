import axios from "../config/axios-admin";

const adminApi = {}

adminApi.register = (body) => axios.post('/admin/register', body)
adminApi.login = (body) => axios.post('/admin/login', body)
adminApi.getAuthAdmin = () => axios.get('/admin/me')

export default adminApi