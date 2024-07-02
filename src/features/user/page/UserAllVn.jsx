import { useState } from "react"
import UserVnCard from "../component/UserVnCard"
import { useLocation } from "react-router-dom";
import SideMenu from "../component/SideMenuUser";
import SideMenuUser from "../component/SideMenuUser";
import Slide from "../../../components/Slide";

function UserAllVn() {
  const {pathname} = useLocation();

  return (
    <>
    <div className="flex justify-center px-20 pt-14 gap-10 min-h-[80vh] ">


     <SideMenuUser />

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 ">
         <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
            <h1 className="w-2/5 ">no.</h1>
            <h1 className="w-4/5">วันที่เข้ารับการรักษา</h1>
            <h1 className="w-4/5">Visit Number</h1>
            <h1 className="w-4/5">สรุปผลการรักษา</h1>
            <h1 className="w-4/5">ค่ารักษาพยาบาล</h1>
         </div>
         <UserVnCard />
         <UserVnCard />
         <UserVnCard />
       
      </div>

    </div>
    
    </>
  )
}

export default UserAllVn