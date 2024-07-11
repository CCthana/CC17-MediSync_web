import { createContext, useEffect, useState } from "react";
import { getAccessTokenAdmin } from "../utils/local-storage";
import adminApi from "../apis/admin";

export const VnContext = createContext();

export default function VnContextProvider({ children }) {

    const [ getVnPerDay, setGetVnPerDay ] = useState(null)
    const [ getVnPerWeek, setGetVnPerWeek ] = useState(null)
    const [ getVnPerMonth, setGetVnPerMonth ] = useState(null)
    const [ getVnPerYear, setGetVnPerYeat ] = useState(null)

    const fetchVnPerDay = async (day) => {
      try {
        if (getAccessTokenAdmin()) {
          const res = await adminApi.getVnPerDay(day)
          setGetVnPerDay(res.data)
        }
        
      } catch (err) {
        console.log('err fetchAllVn', err)
      }
    }
  
    useEffect(() => {

    }, [])

  return (
    <VnContext.Provider value={{ fetchVnPerDay }}>{children}</VnContext.Provider>
  );
}
