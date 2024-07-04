import { createContext, useEffect, useState } from "react";
import adminApi from "../apis/admin";

export const HnContext = createContext()

export default function HnContextProvider ({ children }) {
    const [ getAllHn, setGetAllHn ] = useState(null)

    const fetchAllHn = async () => {
        try {
            const res = await adminApi.getAllHn()
            setGetAllHn(res.data.HN)
        } catch (err) {
            console.log('err fetchAllHn', err)
        }
    }

    useEffect(() => {
        fetchAllHn()
    },[])

    return (<HnContext.Provider value={{ getAllHn, fetchAllHn }}>
        { children }
    </HnContext.Provider>)
}