import axios from "../config/axios-admin";

const adminApi = {}

adminApi.register = (body) => axios.post('/admin/register', body)
adminApi.login = (body) => axios.post('/admin/login', body)
adminApi.getAuthAdmin = () => axios.get('/admin/me')

adminApi.createVn = (body) => axios.post('/reception/createVN', body)
adminApi.createHn = (body) => axios.post('/reception/createHN', body)

adminApi.getHnbyName = (name) => axios.get(`hn/getHnByName/${name}` )
adminApi.getHnbyPhone = (phone) => axios.get(`hn/getHnByPhone/${phone}`)

//admin reception
adminApi.getAppointmentByHn = (hn) => axios.get(`/reception/getappoint/${hn}` )
adminApi.getAppointmentByName = (name) => axios.get(`/reception/getappointByName/${name}` )
adminApi.setAppointment = (id , status) => axios.patch(`/reception/updateAppointment/${id}`, {status} )

//admin Nurse
adminApi.getAllVnByClinic = (clinicId) => axios.get(`/nurse/getAllVnByClinic/${clinicId}`)
adminApi.getAllDoctorByClinic = (clinicId) => axios.get(`/nurse/getAllDoctorByClinic/${clinicId}`)
adminApi.updateVnById = (body) => axios.patch('/nurse/updateVN', body)

//admin Doctor
adminApi.getAdminDoctorData = (doctorId) => axios.get(`/adminDoctor/getAdminDoctorData/${doctorId}`)
adminApi.getTreatmentVnByDocTor = (doctorId) => axios.get(`/adminDoctor/getTreatmentVnByDocTor/${doctorId}`)
adminApi.getAllVnByHn = (hn) => axios.get(`/vn/getAllVnByHn/${hn}`)
adminApi.doctorUpdateVnByid = (body) => axios.patch(`/adminDoctor/updateVnById`, body)
adminApi.createAppontmentByDoctor = (body) => axios.post(`/adminDoctor/createAppointmentByDoctor`, body)


//admin account
adminApi.getAllVnByStatusPayment = () => axios.get(`/account/getAllVnByStatusPayment`)
adminApi.updateTotalPriceVnByAccount = (body) => axios.patch(`/account/updateVnByVn`, body)





export default adminApi


