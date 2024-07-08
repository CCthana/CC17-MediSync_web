import axios from "../config/axios-admin";

const userApi = {}

//user page
userApi.getAllVnByHn = (hn) => axios.get(`/user/getalluservnbyhn/${hn}` );
userApi.getAllAppointByHn = (hn) => axios.get(`/user/appointment/${hn}` );

userApi.updateUserAccount = (body) => axios.patch('./user/updateUserAccount', body);



export default userApi