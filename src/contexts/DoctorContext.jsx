import { createContext, useEffect, useState } from "react";
import doctorApi from "../apis/doctor";

export const DoctorContext = createContext()

export default function DoctorContextProvider({ children }) {

    const [ getAllDoctorActive, setGetAllDoctorActive ] = useState(null)
    const [ isDoctorLoading, setIsDoctorLoding ] = useState(true)

    const fetchAllDoctor = async () => {
        try {
            const res = await doctorApi.getAllDoctorActive()
            setGetAllDoctorActive(res.data)
        } catch (err) {
            console.log('err fetchAllDoctor', err)
        } finally {
            setIsDoctorLoding(false)
        }
    }

    useEffect(() => {
        fetchAllDoctor()
    },[])

  return (
    <DoctorContext.Provider value={{ getAllDoctorActive, isDoctorLoading}}>
        { children }
    </DoctorContext.Provider>
  )
}
