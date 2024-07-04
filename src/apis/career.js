import axios from "../config/axios-public";

const careerApi = {}

careerApi.sendEmailHr = (body) => axios.post('/hr/sendemail', body)

export default careerApi