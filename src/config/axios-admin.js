import axios from 'axios'
import { getAccessTokenAdmin, removeAccessTokenAdmin } from '../utils/local-storage'

const adminAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL

})

adminAxios.interceptors.request.use((config) => {
    const accessToken = getAccessTokenAdmin()
    // console.log(accessToken)
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
}, (err) => Promise.reject(err)
)

adminAxios.interceptors.response.use((value) =>Promise.resolve(value), (err) => {
    // console.log('err dddd', err)
    if (err.response.status === 401) {
        removeAccessTokenAdmin()
        window.location.assign('/')
        return
    }
    return Promise.reject(err)
})

export default adminAxios