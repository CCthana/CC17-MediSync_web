import axios from 'axios'
import { getAccessTokenAdmin, removeAccessTokenAdmin } from '../utils/local-storage'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use((config) => {
    const accessToken = getAccessTokenAdmin()

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
}, (err) => Promise.reject(err)
)

axios.interceptors.response.use((value) =>Promise.resolve(value), (err) => {
    // console.log('err dddd', err)
    if (err.response.status === 401) {
        removeAccessTokenAdmin()
        window.location.assign('/')
        return
    }
    return Promise.reject(err)
})

export default axios