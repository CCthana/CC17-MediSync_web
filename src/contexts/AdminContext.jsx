import { createContext, useEffect, useState } from "react";
import { getAccessTokenAdmin, removeAccessTokenAdmin, setAccessTokenAdmin } from "../utils/local-storage";
import adminApi from "../apis/admin";

export const AdminContext = createContext()

export default function AdminContextProvider({ children }) {

    const [ authAdmin, setAuthAdmin ] = useState(null)
    const [ isAuthAdminLoading, setIsAuthAdminLoding ] = useState(true)

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                if (getAccessTokenAdmin()) {
                    const res = await adminApi.getAuthAdmin()
                    // console.log('res.data',res.data)
                    setAuthAdmin(res.data.admin)

                }
            } catch (err) {
                console.log(err)
            } finally {
                setIsAuthAdminLoding(false)
            }
        }

        fetchAdmin()
    }, [])

    const login = async ( credentials ) => {
        // console.log('credentials', credentials)
        const res = await adminApi.login(credentials)
        setAccessTokenAdmin(res.data.accessTokenAdmin)
    
        const resGetAuthUser = await adminApi.getAuthAdmin()
        setAuthAdmin(resGetAuthUser.data.admin)
// console.log("first-----------")

      }

    const logout = () => {
        removeAccessTokenAdmin()
        setAuthAdmin(null)
    }

    // console.log('authAdmin', authAdmin)


    return (
        <AdminContext.Provider value={{ login, logout, authAdmin, isAuthAdminLoading }}>
            { children }
        </AdminContext.Provider>
      )
}
