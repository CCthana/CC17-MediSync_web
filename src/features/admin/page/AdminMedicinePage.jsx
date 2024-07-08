import { useEffect, useState } from "react"
import AdminSideMenu from "../component/AdminSideMenu"
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import MedicineCard from "../component/MedicineCard";
import Modal from "../../../components/Modal";
import AdminAddMedicine from "../component/AdminAddMedicine";





function AdminMedicinePage() {
   const [allMedicine, setAllmedicine] = useState()
   const [open, setOpen] = useState(false)

   
   const fetchMedicineData = async () => {
      try {
        const result = await adminApi.getAllMedicineAdmin()
        setAllmedicine(result.data) 
        console.log(allMedicine)
        console.log(result, 'resssssssss')
      } catch (err) {
         console.log(err)
      }
   }
   
   useEffect(() => {
      fetchMedicineData()
   },[])


   console.log(allMedicine)

  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center  text-center px-8 text-ms-gray ">
         <h1 className="font-th text-4xl mb-2 font-semibold text-ms-green  ">ข้อมูลทะเบียนยา</h1>
      </div>
         <button onClick={() => setOpen(true)} className="bg-ms-green text-white px-4 py-1 rounded-3xl mx-14 hover:bg-[#257956] mb-6 "> ลงทะเบียนข้อมูลยา </button> 
     
      
      {allMedicine?.map((item) => <MedicineCard 
         key={item?.id}
         id={item?.id}
         name={item?.name}
         price={item?.price}
         stock={item?.stock}
         fetchMedicineData={fetchMedicineData}
      />) }

   </div> 

   <Modal title={'ลงทะเบียนข้อมูลยา'} width={70} open={open} onClose={() => setOpen(false)} >
      <AdminAddMedicine fetchMedicineData={fetchMedicineData} onClose={() => setOpen(false)} setOpen={setOpen} />
   </Modal>

 </div>
  )
}

export default AdminMedicinePage