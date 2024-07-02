import { Link, useLocation } from "react-router-dom"
import useAdmin from "../../../hooks/useAdmin";


function AdminSideMenu() {
   const {pathname} = useLocation();
   const{authAdmin, logout} = useAdmin();

   

   const handleClickLogout = () => {
    logout();
    toast.error('Logged out',{autoClose: 2000,theme: "colored"})
    navigate('/');
 };

  return (
   <>

      <div className="flex flex-col w-72 min-w-60 border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 pl-6 gap-4 font-semibold text-ms-gray">
        <div className="flex flex-col gap-4 flex-1">
        {authAdmin?.role == 'RECEPTION' ? <>
        <div >  <Link to='/admin/appointment'>   <button className={` font-th ${pathname=="/admin/appointment" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ค้นหาใบนัด  </button> </Link> </div>
        <div >  <Link to='/admin/createvn'> <button className={` font-th ${pathname=="/admin/createvn" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ลงทะเบียน VN </button> </Link> </div>
        <div >  <Link to='/admin/createhn'>  <button className={` font-th ${pathname=="/admin/createhn" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ลงทะเบียนข้อมูลคนไข้ HN </button> </Link> </div>
        </> : null}

        {authAdmin?.role == 'NURSE' ? <>
          <div >  <Link to='/admin/nurse'>     <button className={` font-th ${pathname=="/admin/nurse" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ตรวจเบื้องต้น</button> </Link> </div>
        </> : null }

        {authAdmin?.role == 'DOCTOR' ? <>
          <div >  <Link to='/admin/doctor'>    <button className={` font-th ${pathname=="/admin/doctor" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ตรวจอาการ  </button> </Link> </div>
        </> : null }

        {authAdmin?.role == 'ACCOUNT' ? <>
        <div >  <Link to='/admin/account'>   <button className={` font-th ${pathname=="/admin/account" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ค่ารักษา </button> </Link> </div>
        </> : null }
        </div>
        <div>  <button className="hover:underline" onClick={handleClickLogout}> ออกจากระบบ </button>  </div>
      </div>
   </>
  )  
}

export default AdminSideMenu