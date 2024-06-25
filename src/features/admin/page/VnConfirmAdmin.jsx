import AdminSideMenu from "../component/AdminSideMenu"


function VnConfirmAdmin() {
  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
         <h1 className="font-th text-4xl mb-8 font-semibold text-ms-green ">Visitor Number</h1>
      </div>
      
      <div className="flex">

         <div className="max-w-96 flex flex-col justify-start items-start ml-10 mr-10">

            <div>
               <h1 className=" mb-3 text-ms-gray font-th"> เลข HN ของคนไข้ </h1>
               <div className=" h-14 rounded-full border-[1px] border-ms-gold p-4 text-center font-medium w-[300px] text-ms-gray font-th" > HN012345 </div>
            </div>

            <div className="mt-10">
               <h1 className=" mb-3 text-ms-gray font-th"> เลข VN ของคนไข้ </h1>
               <div className=" h-14 rounded-full border-[1px] border-ms-gold p-4 text-center font-medium  w-[300px] text-ms-gray font-th" > VN182736 </div>
            </div>
             
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
               <div className=" max-w-[580px] max-h-[180px] min-w-[580px] min-h-[180px]  border-[1.5px] border-ms-gold rounded-3xl p-4 outline-ms-green text-lg text-ms-gray" > เป็นไข้ปวดหัวตัวร้อน กินไม่ได้ นอนไม่หลับ กระส่ายกระสับ ตับพิการ อาหารไม่ย่อย</div> 
            </div>
            
            <div>
               <h1 className="mb-2 text-ms-gray text-lg"> แผนก /คลินิก </h1>

               <div>
                  <div className="w-[300px] h-[52px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold flex items-center justify-center text-ms-gray"> หัว ไหล่ ตูด </div>
                     
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

 </div>
  )
}

export default VnConfirmAdmin