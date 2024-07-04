import axios from "../config/axios-public";

const doctorApi = {}

doctorApi.getAllDoctorActive = () => axios.get('/doctor/getAllDoctorActive')
doctorApi.adminGetAllDoctor = () => axios.get('/doctor/getAllDoctor')

export default doctorApi