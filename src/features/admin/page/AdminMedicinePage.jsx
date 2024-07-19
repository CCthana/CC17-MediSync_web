import { useEffect, useState } from "react"
import AdminSideMenu from "../component/AdminSideMenu"
import adminApi from "../../../apis/admin";
import MedicineCard from "../component/MedicineCard";
import Modal from "../../../components/Modal";
import AdminAddMedicine from "../component/AdminAddMedicine";
import HeaderTextAdmin from "../component/HeaderTextAdmin";





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

   <>
   <div className="flex flex-1 flex-col">

      <div className="flex items-center justify-center  text-center px-8 text-ms-gray ">
         <HeaderTextAdmin>ข้อมูลทะเบียนยา</HeaderTextAdmin>
      </div>
         <button onClick={() => setOpen(true)} className="bg-ms-green w-1/6 text-white px-4 py-2 text-lg font-light my-4 rounded-full mx-14 hover:bg-[#257956] mb-6 "> ลงทะเบียนข้อมูลยา </button>
      
      <div className="space-y-4">
      {allMedicine?.map((item) => <MedicineCard 
         key={item?.id}
         id={item?.id}
         name={item?.name}
         price={item?.price}
         stock={item?.stock}
         fetchMedicineData={fetchMedicineData}
      />) }
      </div>
   </div> 

   <Modal title={'ลงทะเบียนข้อมูลยา'} width={50} open={open} onClose={() => setOpen(false)} >
      <AdminAddMedicine fetchMedicineData={fetchMedicineData} onClose={() => setOpen(false)} setOpen={setOpen} />
   </Modal>

   </>
  )
}

export default AdminMedicinePage