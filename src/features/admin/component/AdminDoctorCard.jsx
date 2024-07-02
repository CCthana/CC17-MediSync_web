import { useState } from "react"
import { DetailIcon } from "../../../icons";

function AdminDoctorCard() {

   const [open, setOpen] = useState(false);

   
   const handleClick = () => {
     
      setOpen(!open)
   }

  return (
   <div className="flex flex-col bg-card-bg rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] text-lg">
         
            <h1> 1. </h1>
            <h1> HN 123456 </h1>
            <h1> VN 123456 </h1>
            <h1> คุณ: ทวีวิทย์ กิตธารเมธี </h1>
            <h1> เพศ: ชาย </h1>
            <h1> อายุ: 20 ปี </h1>
            <button onClick={handleClick}> <DetailIcon className="h-8"/> </button>

         
      </div>
      
         <div className={`h-fit px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 mb-10 ${open ? "block opacity-100" : "hidden "} animatedbox `} >
            <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

            <div className="flex gap-6 mt-6 justify-start text-ms-gray font-th">


                  <h1>น้ำหนัก: <span className="mx-2 font-medium text-lg"> 60 </span> kg.</h1>
                  <h1>ส่วนสูง: <span className="mx-2 font-medium text-lg"> 180 </span> cm.</h1>
                  <h1>ความดัน: <span className="mx-2 font-medium text-lg"> 100/100 </span></h1>
                  <h1>ชีพจร: <span className="mx-2 font-medium text-lg"> 100 </span> BPM.</h1>
            

            </div>

            <div className=" text-ms-gray mt-2 ">
                  <h1>อาการเบื้องต้น: <span className="mx-2 font-medium text-lg"> เป็นไข้ปวดหัวตัวร้อน กินไม่ได้ นอนไม่หลับ กระส่ายกระสับ ตับพิการ อาหารไม่ย่อย </span> </h1>
            </div>

            <div className="flex items-start gap-20 text-ms-gray ml-6 ">
               <div className="flex flex-col">

                  <div className="mt-8 ">
                     <h1>การตรวจ</h1>
                     <textarea className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>

                  <div className="mt-8 ">
                     <h1>สรุปอาการ</h1>
                     <textarea className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>

                  <div className="mt-8 ">
                     <h1>จ่ายยา</h1>
                     <textarea className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>



               </div>

               <div className="flex flex-col ml-10 gap-10 mt-14"> 

                  <div>
                     <h1>นัดครั้งต่อไป</h1>
                     <input type='date' name="doctorId" id="doctorId" className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold " />
                        
                  </div>

                  <div>
                     <h1>OPD / ADMIT</h1>
                     <select name="type" id="type" className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold " >
                        <option value="OPD">OPD</option>
                        <option value="ADMIT">ADMIT</option>  
                     </select>
                  </div>


               </div>

            </div>


         <div className="px-10 py-4 text-ms-gray mb-4 mt-6 ">
            <h1 className="mb-2 text-2xl">ประวัติการรักษา</h1>

            {/* map history data */}
            <div>
               <div className="flex justify-start items-center gap-4 font-th">
                  <h1>1. </h1>
                  <h1>HN23456 </h1>
                  <h1>VN123456 </h1>
                  <h1>งูสวัสดี</h1>
                  <h1>12/06/2024 </h1>
               </div>

            
               <div className="flex justify-start items-center gap-4 font-th">
                  <h1>1. </h1>
                  <h1>HN23456 </h1>
                  <h1>VN123456 </h1>
                  <h1>งูสวัสดี</h1>
                  <h1>12/06/2024 </h1>
               </div>

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

export default AdminDoctorCard