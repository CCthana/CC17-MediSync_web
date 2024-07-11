import { useEffect, useState } from "react"
import UserVnCard from "../component/UserVnCard"
import { useLocation } from "react-router-dom";
import SideMenuUser from "../component/SideMenuUser";
import useAuth from "../../../hooks/useAuth";
import userApi from "../../../apis/user";

function UserAllVn() {
  const {pathname} = useLocation();
  const {authUser} = useAuth();
  const [allVn, setAllVn] = useState();

  const fetchUserAllVn = async () =>{
    try {
      const result = await userApi.getAllVnByHn(authUser.hn)
      setAllVn(result.data);
       
    } catch (err) {
       console.log(err)
    }
 };

  useEffect(() => {
      fetchUserAllVn();
    }, [authUser]);

 console.log(authUser)
  
  return (
    <>
    <h1 className="pt-14 px-24 font-semibold text-2xl">สวัสดี คุณ <span className="text-ms-green font-th"> {authUser?.firstName} {authUser?.lastName}  </span> </h1>
    <div className="flex justify-center px-20 pt-5  gap-10 min-h-[80vh] ">


     <SideMenuUser />

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 ">
         <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
            <h1 className="w-2/5 ">no.</h1>
            <h1 className="w-4/5">วันที่เข้ารับการรักษา</h1>
            <h1 className="w-4/5">Visit Number</h1>
            <h1 className="w-4/5">สรุปผลการรักษา</h1>
            <h1 className="w-4/5">ค่ารักษาพยาบาล</h1>
         </div>

       {allVn?.map((result) => <UserVnCard 
       key={result?.id} 
       id={result?.id} 
       hn={result?.hn} 
       vn={result?.vn} 
       createdAt={result?.createdAt} 
       recipt={result?.recipt} 
       summary={result?.summary}  
       />)}
      
        
       
      </div>

    </div>
    
    </>
  )
}

export default UserAllVn