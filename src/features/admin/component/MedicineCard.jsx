import { useState } from "react"
import { DetailIcon } from "../../../icons";
import { toast } from "react-toastify";
import adminApi from "../../../apis/admin";




function MedicineCard({id, name, price, stock, fetchMedicineData}) {

   const initialInput = {
      id: id,
      name: name,
      price: price, 
      stock: stock
   }


   const [open, setOpen] = useState(false);
   const [input, setInput] = useState(initialInput);


   const handleClickOpen = () => {
      setOpen(!open)
   }
   
   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value});
      
   }

      
   const handleSubmitForm = async (e) => {
      try {
         e.preventDefault()
         setOpen(!open)

         await adminApi.updateMedicineAdmin(input);
         toast.success('Medicine updated');
         
         fetchMedicineData();
      } catch (err) {
         console.log(err)
      } 
   };


  return (
  
   <div className="flex flex-col bg-card-bg rounded-3xl shadow-md mx-14 font-th">
       
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] ">
      
         <h1 className="w-full"> no. <span className="font-medium text-ms-green"> {id}  </span> </h1>
         <h1 className="w-full" > name: <span className="font-medium text-ms-green"> {name} </span> </h1>
         <h1 className="w-full" > price: <span className="font-medium text-ms-green"> {price} </span> </h1>
         <h1 className="w-full" > quantity: <span className="font-medium text-ms-green"> { stock } </span>  </h1>
          <button onClick={handleClickOpen}> <DetailIcon className="h-8"/> </button>
        

        
      </div>
   
         {open ? 
            <div className=" px-6 pb-4">
               <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>
               
               <div className="flex justify-between items-center">
                  <div>
                     <h1>Name</h1>
                     <input onChange={handleChangeInput} value={input.name} name="name"  className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
                  </div>

                  <div>
                     <h1>Price</h1>
                     <input onChange={handleChangeInput} value={input.price} name="price"  className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
                  </div>

                  <div>
                     <h1>Stock</h1>
                     <input onChange={handleChangeInput} value={input.stock} name="stock" className="h-10 rounded-2xl px-4 text-center border-[1px] border-ms-gold text-ms-green font-semibold focus:outline-ms-green " />
                  </div>
               </div>   

               <div className="flex items-center justify-end  gap-4 pt-4">
                  <button onClick={handleSubmitForm} className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ยืนยัน </button>
                  <button onClick={handleClickOpen} className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> ยกเลิก </button>
               </div>

            </div> 
         : null}

        </div>
  


  )}

export default MedicineCard