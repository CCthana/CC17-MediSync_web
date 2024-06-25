import { useState } from "react"
import { DetailIcon } from "../../../icons";

function AdminNurseCard() {

   const [open, setOpen] = useState(false);

   
   const handleClick = () => {
     
      setOpen(!open)
   }

  return (
   <div className="flex flex-col bg-card-bg rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px]">
         
            <h1> 1. </h1>
            <h1> HN 123456 </h1>
            <h1> VN 123456 </h1>
            <h1> คุณ: ทวีวิทย์ กิตธารเมธี </h1>
            <h1> เพศ: ชาย </h1>
            <h1> อายุ: 20 ปี </h1>
            <button onClick={handleClick}> <DetailIcon className="h-8"/> </button>

         
      </div>
      
         <div className={`h-96 px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 ${open ? "block opacity-100" : "hidden "} animatedbox `} >
            <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

            <div className="flex gap-6 mt-6 justify-between text-ms-gray">

               <div>
                  <h1>น้ำหนัก</h1>
                  <input className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ส่วนสูง</h1>
                  <input className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center  focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ความดัน</h1>
                  <input className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ชีพจร</h1>
                  <input className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center focus:outline-ms-green" />
               </div>

               <div>
                  <h1>อุณหภูมิ</h1>
                  <input className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center focus:outline-ms-green" />
               </div>

             



            </div>

            <div className="flex items-center gap-20 text-ms-gray">
               <div className="mt-8 ">
                  <h1>อาการเบื้องต้น</h1>
                  <textarea className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
               </div>

               <div> 
                  <h1>ลงชื่อแพทย์</h1>
                  <select name="doctorId" id="doctorId" className="w-[300px] h-[70px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold " >
                     <option value="1">หมอ1</option>
                     <option value="2">หมอ2</option>
                     <option value="3">หมอ3</option>   
                  </select>
               </div>
            </div>


            
            <div className="flex items-center justify-end  gap-4">
               <button className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ยืนยัน </button>
               <button className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> แก้ไข </button>
            </div>
           

         </div>
        
        



         
    </div>
  )
}

export default AdminNurseCard