import { useState } from "react"
import UserAppointmentCard from "../component/UserAppointmentCard"
import SideMenuUser from "../component/SideMenuUser"


function UserAppointment() {
  
  return (
   <div className="flex justify-center p-40 gap-10 min-h-[80vh] ">

   <SideMenuUser />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4  ">
      <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
         <h1 className="w-2/5 ">no.</h1>
         <h1 className="w-4/5">วันนัดพบแพทย์</h1>
         <h1 className="w-4/5">เวลานัด</h1>
         <h1 className="w-4/5">วันที่ออกใบนัด</h1>
         <h1 className="w-4/5">แพทย์ที่ทำการนัด</h1>
      </div>
      
      <UserAppointmentCard />
    
   </div>

 </div>
  )
}

export default UserAppointment