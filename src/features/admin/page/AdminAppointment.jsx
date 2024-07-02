import AdminSideMenu from "../component/AdminSideMenu"


function AdminAppointment() {
  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

         <div className="flex flex-1 flex-col w-full h-[600px] rounded-[40px] p-8   ">

         <div className="flex items-center justify-start mb-2 text-center  text-ms-gray gap-10 px-9">
            <button className="font-th font-semibold hover:underline"> ค้นหาเลข HN </button>
            <button className="font-th font-semibold hover:underline"> ค้าหาด้วยชื่อ </button>
            <button className="font-th font-semibold hover:underline"> ค้าหาด้วยเบอร์โทร </button>
         </div>

         <div className="flex justify-center items-center px-8 gap-6 mt-4 mb-4">
            <input className="w-full bg-ms-bg rounded-full h-12 border-[1px] border-ms-gold px-4  focus:outline-ms-green" />
            <button className="font-th w-[150px] h-12 bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ค้นหา </button>
         </div>

         <div className="px-8 mt-4">
            <div className="h-20 w-full rounded-3xl text-xl bg-card-bg flex items-center justify-between gap-20 px-20 font-th text-ms-gray">
               
                  <h1> HN 123456 </h1>
               
                  <h1> คุณ: ทวีวิทย์ กิตธารเมธี </h1>
                  <h1> เพศ: ชาย </h1>
                  <h1> อายุ: 20 ปี </h1>
            </div>
         </div>


</div> 
      </div> 

 </div>
  )
}

export default AdminAppointment