import axios from "../config/axios";

const hrApi = {}

hrApi.getAllCareer = () => axios.get('/hr')

export default hrApi