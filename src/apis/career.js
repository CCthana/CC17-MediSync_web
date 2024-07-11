import axios from "../config/axios";

const careerApi = {}

careerApi.sendEmailHr = (body) => axios.post('/hr/sendemail', body)

export default careerApi