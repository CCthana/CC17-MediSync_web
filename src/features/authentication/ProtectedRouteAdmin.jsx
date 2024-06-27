import { Navigate } from "react-router-dom"
import useAdmin from "../../hooks/useAdmin"
import Spinner from "../../components/Spinner"
// import Spinner from "../../../components/Spinner"

export default function ProtectedRouteAdmin({ children }) {
    const { authAdmin, isAuthAdminLoading } = useAdmin()
    if (!authAdmin && !isAuthAdminLoading) {
      return <Navigate to='/' />
    }
  return (
    <>
    { isAuthAdminLoading && <Spinner />}
      {children}
    </>
  )
}
