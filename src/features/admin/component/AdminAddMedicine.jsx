import { useState } from "react";
import { toast } from "react-toastify";
import adminApi from "../../../apis/admin";
import Input from "../../../components/Input";
import ButtonAdmin from "../../../components/ButtonAdmin";
import validateMedicine from "../validate/validate-medicine";


function AdminAddMedicine({fetchMedicineData, onClose, setOpen}) {

   const initialInput = {
      name:'',
      price: '',
      stock: ''
   }

   const initialErrorInput = {
      name:'',
      price: '',
      stock: ''
    };

   const [input, setInput] = useState(initialInput)
   const [inputError, setInputError] = useState(initialErrorInput);

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value});
      setInputError({...inputError, [e.target.name]: ""});
   }

   const handleSubmitForm = async () => {
      try {

         const errors = validateMedicine(input)

         if (errors) {
            return setInputError(errors)
         }

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
    <div className="flex flex-col py-12 px-20 gap-8">
       <div>
         <h1 className="relative w-fit">ชื่อยา <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
         <Input error={inputError.name} onChange={handleChangeInput} value={input.name} name="name" />
      </div>

      <div>
         <h1 className="relative w-fit">ราคา <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
         <Input error={inputError.price} typeInput="number" placeholder="" onChange={handleChangeInput} value={input.price} name="price" />
      </div>

      <div>
         <h1 className="relative w-fit">จำนวน <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
         <Input error={inputError.stock} typeInput="number" onChange={handleChangeInput} value={input.stock} name="stock" />
      </div>

      <div className="flex items-center mx-auto gap-4 w-2/3">
         <ButtonAdmin btn="active" onClick={handleSubmitForm}> ยืนยัน </ButtonAdmin>
         <ButtonAdmin btn="success" onClick={onClose}> ยกเลิก </ButtonAdmin>
      </div>

    </div>

      

 </>
  )
}

export default AdminAddMedicine