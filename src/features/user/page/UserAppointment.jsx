import { useEffect, useState } from "react"
import UserAppointmentCard from "../component/UserAppointmentCard"
import SideMenuUser from "../component/SideMenuUser"
import useAuth from "../../../hooks/useAuth";
import userApi from "../../../apis/user";


function UserAppointment() {

   const [allAppointment, setAllAppointment] = useState();
   const {authUser} = useAuth();

   const fetchUserAllAppointment = async () =>{
      try {
        const result = await userApi.getAllAppointByHn(authUser?.hn)
        setAllAppointment(result.data);
         
      } catch (err) {
         console.log(err)
      }
   };

   useEffect(() => {
      fetchUserAllAppointment();
    }, [authUser]);
  
   

  return (
  <>
   <h1 className="pt-10 px-24 font-semibold text-2xl text-gray-600">สวัสดี คุณ <span className="text-ms-green font-th"> {authUser?.firstName} {authUser?.lastName}  </span> </h1>
    <div className="flex justify-center px-20 pt-5  gap-10 min-h-[80vh] ">

   <SideMenuUser />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4  ">
      <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
         <h1 className="w-2/5 ">ใบนัดที่</h1>
         <h1 className="w-4/5">วันนัดพบแพทย์</h1>
         <h1 className="w-4/5">วันที่ออกใบนัด</h1>
         <h1 className="w-4/5">แพทย์ที่ทำการนัด</h1>
         <h1 className="w-4/5">แผนก</h1>
      </div>
      
      {allAppointment?.map ((result)=> <UserAppointmentCard 
      key={result?.id}
      id={result?.id} 
      createdAt={result?.createdAt} 
      appointmentTime={result?.appointmentTime} 
      doctor={result?.doctor}  /> )}
    
   </div>

 </div>
 </>
  )
}

export default UserAppointment