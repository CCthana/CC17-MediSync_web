import { useLocation } from "react-router-dom"


function SideMenu() {
   const {pathname} = useLocation();

  return (
   <>

   <div className="flex flex-col w-60 border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 pl-6 gap-4 font-semibold text-ms-gray">

      <div > <button className={`hover:underline ${pathname=="/user" ? 'font-ms-green' : '' }`}> ประวัติการรักษา </button> </div>
      <div> <button className="hover:underline"> ตรวจสอบเวลานัดแพทย์ </button> </div>
      <div> <button className="hover:underline"> ตั้งค่าบัญชี </button> </div>
      <div> <button className="hover:underline"> ออกจากระบบ </button> </div>
   
   </div>
   </>
  )
}

export default SideMenu