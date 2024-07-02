import { useState } from "react"
import AdminSideMenu from "../component/AdminSideMenu"
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialInput = {
   firstName: '',
   lastName: '' ,
   birthDate: '' ,
   gender: 'MALE' ,
   nationality: '' ,
   drugAllergies: '' ,
   address: '' ,
   phone: '' ,
   email: '' ,
   
}



function AdminCreateHn() {
   const [input, setInput] = useState(initialInput);
 

   const navigate = useNavigate();

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }


   const handleSubmitForm = async (e) => {
      try {
         e.preventDefault()
         const result = await adminApi.createHn(input);

         toast.success('HN created')
         setInput(initialInput)

         navigate('/admin/createvn');

      } catch (err) {
         console.log(err)
      }
}


  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
         <h1 className="font-th text-4xl mb-8 font-semibold text-ms-green ">ลงทะเบียนข้อมูลคนไข้</h1>
      </div>
      

      

         <div className="grid grid-cols-3 gap-14 font-th">

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> ชื่อ </h1>
                  <input value={input.firstName} name='firstName' onChange={handleChangeInput} className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> นามสกุล </h1>
                  <input value={input.lastName} name='lastName' onChange={handleChangeInput}  className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> วันเกิด </h1>
                  <input value={input.birthDate}  name='birthDate' onChange={handleChangeInput}  type='date' className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> เพศ </h1>
                  <select value={input.gender}  onChange={handleChangeInput}  name="gender" id="gender" className="h-12 w-72 outline-ms-green rounded-3xl border-[1.5px] px-4 border-ms-gold  " >
                     <option value="MALE">ชาย</option>
                     <option value="FEMALE">หญิง</option>
                     <option value="OTHER">อื่นๆ</option>   
                  </select>
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> สัญชาติ </h1>
                  <input value={input.nationality} name='nationality' onChange={handleChangeInput}  className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> ประวัติการแพ้ยา </h1>
                  <input value={input.drugAllergies}  name='drugAllergies' onChange={handleChangeInput}  className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  justify-center flex-col">
                  <h1 className="font-semibold ml-2"> ที่อยู่ </h1>
                  <textarea value={input.address} name='address' onChange={handleChangeInput}  className=" h-32 w-72 rounded-3xl mt-2  border-[1.5px] border-ms-gold p-4  focus:outline-ms-green" />
               </div>

               <div className="flex  flex-col">
                  <h1 className="font-semibold ml-2"> เบอร์โทร </h1>
                  <input value={input.phone} name='phone' onChange={handleChangeInput}  className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               <div className="flex  flex-col">
                  <h1 className="font-semibold ml-2"> อีเมลล์ </h1>
                  <input value={input.email} name='email' onChange={handleChangeInput}  className=" h-12 w-72 rounded-full mt-2  border-[1.5px] border-ms-gold px-4  focus:outline-ms-green" />
               </div>

               
            
         </div>

         <div className="flex justify-end gap-14 px-16 mt-14">
            <button type="submit" onClick={handleSubmitForm} className="font-th w-[210px] h-[60px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> สร้าง HN </button>
            <button type="submit" onClick={() => {setInput(initialInput)}}  className="font-th w-[210px] h-[60px]  rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> ยกเลิก </button>
         </div>

      
    
   </div> 

 </div>
  )
}

export default AdminCreateHn