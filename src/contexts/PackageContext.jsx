import { createContext, useState } from "react"
import packageApi from "../apis/package";

export const PackageContext = createContext()

export default function PackageContextProvider({ children }) {
    const [allPackages, setAllPackages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPackage = async () => {
        try {
          const res = await packageApi.getAllPackage();
          // console.log("res.data fetchPackage", res.data);
          setAllPackages(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
      
  return (
    <PackageContext.Provider value={{ allPackages, fetchPackage, isLoading}}>
        { children }
    </PackageContext.Provider>
  )
}
