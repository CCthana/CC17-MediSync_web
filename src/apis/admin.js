import adminAxios from "../config/axios-admin";

const adminApi = {}

adminApi.register = (body) => adminAxios.post('/admin/register', body)
adminApi.login = (body) => adminAxios.post('/admin/login', body)
adminApi.getAuthAdmin = () => adminAxios.get('/admin/me')

//clinic
adminApi.getAllClinic = () => adminAxios.get('/admin/getAllClinic')
adminApi.updateClinic = (body) => adminAxios.patch('/admin/updateClinic', body)
adminApi.createClinic = (body) => adminAxios.post('/admin/createClinic', body)
adminApi.deleteClinic = (id) => adminAxios.delete(`/admin/deleteClinic/${id}`)

//doctor
adminApi.deleteDoctor = (body) => adminAxios.patch('/admin/deleteDoctor', body)
adminApi.updateDoctor = (body) => adminAxios.patch('/admin/updateDoctor', body)
adminApi.createDoctor = (body) => adminAxios.post('/admin/createDoctor', body)

//HN
adminApi.getAllHn = () => adminAxios.get('/hn/getAllHN')

adminApi.createVn = (body) => adminAxios.post('/reception/createVN', body)
adminApi.createHn = (body) => adminAxios.post('/reception/createHN', body)

adminApi.getHnbyName = (name) => adminAxios.get(`hn/getHnByName/${name}` )
adminApi.getHnbyPhone = (phone) => adminAxios.get(`hn/getHnByPhone/${phone}`)

//admin reception
adminApi.getAppointmentByHn = (hn) => adminAxios.get(`/reception/getappoint/${hn}` )
adminApi.getAppointmentByName = (name) => adminAxios.get(`/reception/getappointByName/${name}`)
adminApi.setAppointment = (id , status) => adminAxios.patch(`/reception/updateAppointment/${id}`, {status} )

//admin Nurse
adminApi.getAllVnByClinic = (clinicId) => adminAxios.get(`/nurse/getAllVnByClinic/${clinicId}`)
adminApi.getAllDoctorByClinic = (clinicId) => adminAxios.get(`/nurse/getAllDoctorByClinic/${clinicId}`)
adminApi.updateVnById = (body) => adminAxios.patch('/nurse/updateVN', body)

//admin Doctor
adminApi.adminGetAllDoctor = () => adminAxios.get('/doctor/getAllDoctor')
adminApi.getAdminDoctorData = (doctorId) => adminAxios.get(`/adminDoctor/getAdminDoctorData/${doctorId}`)
adminApi.getTreatmentVnByDocTor = (doctorId) => adminAxios.get(`/adminDoctor/getTreatmentVnByDocTor/${doctorId}`)
adminApi.getAllVnByHn = (hn) => adminAxios.get(`/vn/getAllVnByHn/${hn}`)
adminApi.doctorUpdateVnByid = (body) => adminAxios.patch(`/adminDoctor/updateVnById`, body)
adminApi.createAppontmentByDoctor = (body) => adminAxios.post(`/adminDoctor/createAppointmentByDoctor`, body)


//admin account
adminApi.getAllVnByStatusPayment = () => adminAxios.get(`/account/getAllVnByStatusPayment`)
adminApi.updateTotalPriceVnByAccount = (body) => adminAxios.patch(`/account/updateVnByVn`, body)


// package
adminApi.createPackage = (body) => adminAxios.post(`/package`, body)
adminApi.updatePackage = (id, body) => adminAxios.patch(`/package/${id}`, body)
adminApi.deletePackage = (id) => adminAxios.delete(`/package/${id}`)

// hr
adminApi.createCareer = (body) => adminAxios.post(`/hr`, body)
adminApi.deleteCareer = (id) => adminAxios.delete(`/hr/${id}`)
adminApi.updateCareer = (body) => adminAxios.patch(`/hr`, body)

// Vn
adminApi.getVnPerDay = (day) => adminAxios.get(`/vn/getVnPerDay/${day}` )



export default adminApi


