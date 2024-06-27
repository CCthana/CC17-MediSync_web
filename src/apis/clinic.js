import axios from "../config/axios-public";

const clinicApi = {}

clinicApi.getAllClinic = () => axios.get('/clinic/getAllClinic')

export default clinicApi