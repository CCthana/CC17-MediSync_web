import axios from "../config/axios-public";

const doctorApi = {}

doctorApi.getAllDoctorActive = () => axios.get('/doctor/getAllDoctorActive')

export default doctorApi