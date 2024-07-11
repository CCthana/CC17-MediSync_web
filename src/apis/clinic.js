import axios from "../config/axios";

const clinicApi = {}

clinicApi.getAllClinic = () => axios.get('/clinic/getAllClinic')

export default clinicApi