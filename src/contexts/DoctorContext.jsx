import { createContext, useEffect, useState } from "react";
import doctorApi from "../apis/doctor";
import { getAccessTokenAdmin } from "../utils/local-storage";
import adminApi from "../apis/admin";

export const DoctorContext = createContext()

export default function DoctorContextProvider({ children }) {

    const [ getAllDoctorActive, setGetAllDoctorActive ] = useState(null)
    const [ adminGetAllDoctor, setAdminGetAllDoctor ] = useState(null)
    const [ isDoctorLoading, setIsDoctorLoding ] = useState(true)
    const [ doctorActiveByClinic, setDoctorActiveByClinic ] = useState(null)

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

    const fetchAllDoctorByClinic = async (id) => {
        try {
            const res = await doctorApi.doctorActiveByClinic(id)
            setDoctorActiveByClinic(res.data)
        } catch (err) {
            console.log('err fetchAllDoctor', err)
        } finally {
            setIsDoctorLoding(false)
        }
    }

    const adminFetchAllDoctor = async () => {
        try {
            if (getAccessTokenAdmin()) {
                const res = await adminApi.adminGetAllDoctor()
                setAdminGetAllDoctor(res.data)
            }
        } catch (err) {
            console.log('err adminFetchAllDoctor', err)
        } finally {
            setIsDoctorLoding(false)
        }
    }

    useEffect(() => {
        fetchAllDoctor()
    },[])

  return (
    <DoctorContext.Provider value={{
        getAllDoctorActive, isDoctorLoading,
        adminFetchAllDoctor, adminGetAllDoctor,
        fetchAllDoctor, fetchAllDoctorByClinic,
        doctorActiveByClinic}}>
        { children }
    </DoctorContext.Provider>
  )
}
