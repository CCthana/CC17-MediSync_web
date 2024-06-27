import { createContext, useEffect, useState } from "react";
import clinicApi from "../apis/clinic";

export const ClinicContext = createContext()

export default function ClinicContextProvider({ children }) {

    const [ getAllClinic, setGetAllClinic ] = useState(null)
    const [ isClinicLoading, setIsClinicLoading ] = useState(true)

    const fetchAllDoctor = async () => {
        try {
            const res = await clinicApi.getAllClinic()
            setGetAllClinic(res.data.clinic)
        } catch (err) {
            console.log('err fetchAllDoctor', err)
        } finally {
            setIsClinicLoading(false)
        }
    }

    useEffect(() => {
        fetchAllDoctor()
    },[])

  return (
    <ClinicContext.Provider value={{ getAllClinic, isClinicLoading}}>
        { children }
    </ClinicContext.Provider>
  )
}
