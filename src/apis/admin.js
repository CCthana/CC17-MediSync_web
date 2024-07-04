import axios from "../config/axios-admin";

const adminApi = {}

adminApi.register = (body) => axios.post('/admin/register', body)
adminApi.login = (body) => axios.post('/admin/login', body)
adminApi.getAuthAdmin = () => axios.get('/admin/me')

//clinic
adminApi.getAllClinic = () => axios.get('/admin/getAllClinic')
adminApi.updateClinic = (body) => axios.patch('/admin/updateClinic', body)
adminApi.createClinic = (body) => axios.post('/admin/createClinic', body)
adminApi.deleteClinic = (id) => axios.delete(`/admin/deleteClinic/${id}`)

//doctor
adminApi.deleteDoctor = (body) => axios.patch('/admin/deleteDoctor', body)
adminApi.updateDoctor = (body) => axios.patch('/admin/updateDoctor', body)
adminApi.createDoctor = (body) => axios.post('/admin/createDoctor', body)

//HN
adminApi.getAllHn = () => axios.get('/hn/getAllHN')

export default adminApi