import { createContext, useEffect, useState } from "react";
import clinicApi from "../apis/clinic";
import adminApi from "../apis/admin";

export const ClinicContext = createContext()

export default function ClinicContextProvider({ children }) {

    const [ getAllClinic, setGetAllClinic ] = useState(null)
    const [ adminGetAllClinic, setAdminGetAllClinic ] = useState(null)
    const [ isClinicLoading, setIsClinicLoading ] = useState(true)

    const fetchAllClinic = async () => {
        try {
            const res = await clinicApi.getAllClinic()
            setGetAllClinic(res.data.clinic)
        } catch (err) {
            console.log('err fetchAllDoctor', err)
        } finally {
            setIsClinicLoading(false)
        }
    }

    const adminFetchAllClinic = async () => {
        try {
            const res = await adminApi.getAllClinic()
            setAdminGetAllClinic(res.data.clinic)
        } catch (err) {
            console.log('err fetchAllDoctor', err)
        } finally {
            setIsClinicLoading(false)
        }
    }


    useEffect(() => {
        fetchAllClinic()
    },[])
    

  return (
    <ClinicContext.Provider value={{ getAllClinic, isClinicLoading, adminGetAllClinic, adminFetchAllClinic}}>
        { children }
    </ClinicContext.Provider>
  )
}
