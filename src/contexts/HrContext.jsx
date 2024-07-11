import { createContext, useEffect, useState } from "react";
import hrApi from "../apis/hr";
import adminApi from "../apis/admin";

export const HrContext = createContext();

export default function HrContextProvider({ children }) {
  const [allPosition, setAllPosition] = useState(null);
  const [ isPositionLoading, setIsPositionLoading ] = useState(true)

  const fetchAllPosition = async () => {
    try {
      const res = await hrApi.getAllCareer();
      setAllPosition(res.data);
    } catch (err) {
      console.log("err fetchAllDoctor", err);
    } finally {
        setIsPositionLoading(false);
    }
  };

  const addJobsApi = async (data) => {
    try {
      console.log('data---', data)
      await adminApi.createCareer(data);
    } catch (err) {
      console.log("err fetchAllDoctor", err);
    } finally {
        setIsPositionLoading(false);
    }
  };

  const deleteJobsApi = async (id) => {
    try {
      // console.log('id---', id)
      await adminApi.deleteCareer(id);
    } catch (err) {
      console.log("err fetchAllDoctor", err);
    } finally {
        setIsPositionLoading(false);
    }
  };

  const updateJobsApi = async (data) => {
    try {
      console.log('data---', data)
      await adminApi.updateCareer(data);
    } catch (err) {
      console.log("err fetchAllDoctor", err);
    } finally {
        setIsPositionLoading(false);
    }
  };

  // console.log('allPosition', allPosition)

  useEffect(() => {
    fetchAllPosition();
  }, []);

  return (
    <HrContext.Provider value={{ allPosition, isPositionLoading, addJobsApi, fetchAllPosition, deleteJobsApi, updateJobsApi }}>{children}</HrContext.Provider>
  );
}
