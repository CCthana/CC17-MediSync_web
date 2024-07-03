import { Link, useLocation } from "react-router-dom"


function SideMenuUser() {
   const {pathname} = useLocation();

  return (
   <>

      <div className="flex flex-col w-60 border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 pl-6 gap-4 font-semibold text-ms-gray">
        <div className="flex flex-col gap-4 flex-1">
            <div > <Link to='/user'> <button className={` ${pathname=="/user" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ประวัติการรักษา </button> </Link> </div>
            <div > <Link to='/user/appointment'>  <button className={` ${pathname=="/user/appointment" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > ตรวจสอบเวลานัดแพทย์ </button> </Link> </div>
            <div > <Link to='/user/setting'>  <button className={` ${pathname=="/user/setting" ? 'text-ms-green hover:no-underline hover:cursor-default ' : 'hover:underline text-ms-gray' }`} > บัญชี </button> </Link> </div>
        </div>
        <div className=" items-end font-semibold text-xl"> <Link to='/'>  <button className="hover:underline"> ออกจากระบบ </button> </Link> </div>
      </div>
   </>
  )
}

export default SideMenuUser