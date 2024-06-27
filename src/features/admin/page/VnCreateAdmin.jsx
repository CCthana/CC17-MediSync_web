import { useState } from "react";
import AdminSideMenu from "../component/AdminSideMenu"
import Modal from "../../../components/Modal";
import AdminSearchHn from "../component/AdminSearchHn";

const initialInput = {
   hn: '',
   symptoms: '' ,
   clinicId: '' 
}
function VnCreateAdmin() {
   const [input , setInput] = useState(initialInput);
   const [open, setOpen] = useState(false)

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }
   
   
  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
         <h1 className="font-th text-4xl mb-8 font-semibold text-ms-green ">Visitor Number</h1>
      </div>
      
      <div className="flex">

         <div className="max-w-96 flex flex-col justify-start items-start ml-10 mr-16">
            <h1 className=" mb-3 text-ms-gray font-th"> เลข HN ของคนไข้ </h1>
            <button onClick={() => setOpen(true)} className=" h-14 rounded-full border-[1px] border-ms-gold p-4 text-center font-semibold w-[300px] text-ms-gray hover:bg-[#89713e] hover:text-white font-th" > ค้นหา HN </button> 
         </div>
         
         <div className="flex-1 px-8 ">
            <div className="flex flex-1 flex-col ">
            <div className="flex items-center  gap-10 mb-8 text-xl text-ms-gray">  
               <h1> ชื่อ : คุณทวีวิทย์ กิตธารเมธี </h1>
               <h1> เพศ : ชาย </h1>
               <h1 className="font-th"> อายุ : 20 ปี </h1>
               <h1> สัญชาติ : ไทย </h1>
            </div>

            <div className="mb-10 mt-4"> 
               <h1 className="mb-2 text-ms-gray text-lg"> อาการเบื้องต้น </h1>
               <textarea value={input.symptoms} name='symptoms'  onChange={handleChangeInput} className=" max-w-[580px] max-h-[180px] min-w-[580px] min-h-[180px]  border-[1.5px] border-ms-gold rounded-3xl p-4 outline-ms-green text-lg text-ms-gray" /> 
            </div>
            
            <div>
               <h1 className="mb-2 text-ms-gray text-lg"> แผนก /คลินิก </h1>

               <div>
                  <select name="clinicId" id="clinicId" className="w-[300px] h-[52px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold " onChange={handleChangeInput} value={input.clinicId}>
                     <option value="1">หัว</option>
                     <option value="2">ไหล่</option>
                     <option value="3">เอว</option>
                    
                  </select>
               </div> 
                   <div className="flex items-center justify-start mt-20 gap-20">
                     <button className="font-th w-[210px] h-[60px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> สร้าง VN </button>
                     <button className="font-th w-[210px] h-[60px]  rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> ยกเลิก </button>
                  </div>
            </div>
            
            </div>
         </div>
         
      </div>
    
   </div> 
   <Modal title={'HN Search'} width={80} open={open} onClose={() => setOpen(false)} >
      <AdminSearchHn/>
   </Modal>

 </div>
  )
}

export default VnCreateAdmin