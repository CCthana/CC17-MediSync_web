import axios from "../config/axios";

const userApi = {}

//user page
userApi.getAllVnByHn = (hn) => axios.get(`/user/getalluservnbyhn/${hn}` );
userApi.getAllAppointByHn = (hn) => axios.get(`/user/appointment/${hn}` );

userApi.updateUserAccount = (body) => axios.patch('./user/updateUserAccount', body);
userApi.createHn = (body) => axios.post('/user/createHN', body)



export default userApi