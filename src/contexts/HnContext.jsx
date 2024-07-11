import { createContext, useState } from "react";
import adminApi from "../apis/admin";
import { getAccessTokenAdmin } from "../utils/local-storage";

export const HnContext = createContext()

export default function HnContextProvider ({ children }) {
    const [ getAllHn, setGetAllHn ] = useState(null)

    const fetchAllHn = async () => {
        try {
            if ( getAccessTokenAdmin()) {
                const res = await adminApi.getAllHn()
                setGetAllHn(res.data?.HN)
            }
            
        } catch (err) {
            console.log('err fetchAllHn', err)
        }
    }

    return (<HnContext.Provider value={{ getAllHn, fetchAllHn }}>
        { children }
    </HnContext.Provider>)
}