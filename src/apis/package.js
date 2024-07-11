import axios from "../config/axios";

const packageApi = {}

packageApi.getAllPackage = () => axios.get('/package')

export default packageApi