import { useState } from "react";
import { toast } from "react-toastify";
import adminApi from "../../../apis/admin";


function AdminAddMedicine({fetchMedicineData, onClose, setOpen}) {

   const initialInput = {
      name:'',
      price: '',
      stock: ''
   }


   const [input, setInput] = useState(initialInput)

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value});
      
   }


   const handleSubmitForm = async () => {
      try {

         await adminApi.createMedicine(input);
         toast.success('Medicine updated');
         
         setOpen(false);
         fetchMedicineData()
      } catch (err) {
         console.log(err)
      } 
   };



  return (
   <>
    <div className="flex justify-between px-10 mb-8">
       <div>
         <h1>ชื่อยา</h1>
         <input onChange={handleChangeInput} value={input.name} name="name"  className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
      </div>

      <div>
         <h1>ราคา</h1>
         <input type="number" min="1" onChange={handleChangeInput} value={input.price} name="price"  className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
      </div>

      <div>
         <h1>จำนวน</h1>
         <input type="number" min="1" onChange={handleChangeInput} value={input.stock} name="stock" className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
      </div>

    

    </div>

      <div className="flex items-center justify-end  gap-4 pt-4  px-10 mb-4">
         <button onClick={handleSubmitForm} className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ยืนยัน </button>
         <button onClick={onClose} className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> ยกเลิก </button>
      </div>

 </>
  )
}

export default AdminAddMedicine