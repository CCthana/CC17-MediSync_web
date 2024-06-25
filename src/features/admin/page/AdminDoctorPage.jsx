
import AdminDoctorCard from "../component/AdminDoctorCard";
import AdminSideMenu from "../component/AdminSideMenu";

function AdminDoctorPage() {

  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">

         
            <h1 className="font-th text-4xl  font-semibold text-ms-green flex-1 "> ตรวจอาการ</h1>   

            <div className="flex items-center justify-center gap-8">

               <div>
                  <h1>แผนก / คลินิก</h1>
                  <select name="clinicId" id="clinicId" className="w-[200px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold  " >
                     <option value="1">หัว</option>
                     <option value="2">ไหล่</option>
                     <option value="3">เอว</option>   
                  </select>
               </div>

               <div>
                  <h1>แพทย์</h1>
                  <select name="doctorId" id="doctorId" className="w-[200px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold  " >
                     <option value="1">หมอ1</option>
                     <option value="2">หมอ2</option>
                     <option value="3">หมอ3</option>   
                  </select>
               </div>

            </div>


        
      </div>
      
      <AdminDoctorCard   />
     

 

   </div> 

 </div>
  )
}

export default AdminDoctorPage