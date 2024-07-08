
import { useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import AdminDoctorCard from "../component/AdminDoctorCard";
import AdminSideMenu from "../component/AdminSideMenu";
import adminApi from "../../../apis/admin";

function AdminDoctorPage() {
   const [doctorData, setDoctorData] = useState();
   const [vnData, setVnData] = useState();

   const { authAdmin } = useAdmin();
  

   const fetchDoctorData = async () =>{
      try {
         const doctorId = authAdmin.doctorId
         const result = await adminApi.getAdminDoctorData(doctorId)
         const vn = await adminApi.getTreatmentVnByDocTor(doctorId)
         setDoctorData(result.data);
         setVnData(vn.data);
         
         
      } catch (err) {
         console.log(err)
      }
   };
   
   useEffect(() => {
      fetchDoctorData()
   },[authAdmin])


  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">

            <div className="flex items-center justify-center gap-8">
               <div>
                  <h1>แผนก / คลินิก</h1>
                  <h1 className="font-semibold text-ms-green"> {doctorData?.clinic.name} </h1> 
               </div>
       
               <div>
                  <h1>แพทย์</h1>
                  <h1 className="font-semibold text-ms-green"> {doctorData?.firstName} {doctorData?.lastName}  </h1> 
               </div>


            </div>
         
            <h1 className="font-th text-4xl  font-semibold text-ms-green flex-1 "> ตรวจอาการ</h1>   

            <button onClick={() => fetchDoctorData()} className="bg-ms-green text-white px-4 py-1 rounded-3xl  hover:bg-[#257956]"> เรียกข้อมูลใหม่ </button> 

        
      </div>
      
      {vnData?.map((result) =>  <AdminDoctorCard 
      key={result?.id}
      id={result?.id}
      hn={result?.hn} 
      vn={result?.vn}
      firstName={result?.user.firstName}
      lastName={result?.user.lastName}
      gender={result?.user.gender}
      birthDate={result?.user.birthDate}
      weight={result?.weight}
      height={result?.height}
      bloodPressure={result?.bloodPressure}
      heartRate={result?.heartRate}
      symptoms={result?.symptoms}  
      doctorData={doctorData}
      fetchDoctorData={fetchDoctorData} 
      /> ) }
     

 

   </div> 

 </div>
  )
}

export default AdminDoctorPage