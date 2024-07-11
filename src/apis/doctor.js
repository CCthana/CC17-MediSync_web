import axios from "../config/axios";

const doctorApi = {}

doctorApi.getAllDoctorActive = () => axios.get('/doctor/getAllDoctorActive')
doctorApi.doctorActiveByClinic = (id) => axios.get(`/doctor/doctorActiveByClinic/${id}`)

export default doctorApi