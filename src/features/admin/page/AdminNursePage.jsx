import AdminNurseCard from "../component/AdminNurseCard"
import AdminSideMenu from "../component/AdminSideMenu"


function AdminNursePage() {
  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">

         <div className="flex items-center justify-center">
            <div>
            <h1>แผนก / คลินิก</h1>
            <select name="clinicId" id="clinicId" className="w-[200px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold  " >
               <option value="1">หัว</option>
               <option value="2">ไหล่</option>
               <option value="3">เอว</option>   
            </select>
            </div>
         </div>
            <h1 className="font-th text-4xl  font-semibold text-ms-green flex-1  "> ตรวจอาการเบื้องต้น </h1>      
      </div>
      
      <AdminNurseCard />
      <AdminNurseCard />
      <AdminNurseCard />
      <AdminNurseCard />
      <AdminNurseCard />



   </div> 

 </div>
  )
}

export default AdminNursePage