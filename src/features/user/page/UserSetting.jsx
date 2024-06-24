import React from 'react'
import SideMenuUser from '../component/SideMenuUser'

function UserSetting() {
  return (
   <div className="flex justify-center p-40 gap-10 min-h-[80vh] ">

   <SideMenuUser />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4  ">
      <div className='flex flex-col gap-12'>

        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>HN NUMBER</p>
         <h1 className='text-2xl font-th text-ms-gray'>HN123456789</h1>
        </div>

        <div className='grid grid-cols-2 w-1/3'>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>ชื่อ</p>
               <h1 className='text-2xl font-th text-ms-gray'>ทวีวิทย์</h1>
            </div>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>นามสกุล</p>
               <h1 className='text-2xl font-th text-ms-gray'>กิตธารเมธี</h1>
            </div>
        </div>

        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>วันเดือนปีเกิด</p>
         <h1 className='text-2xl font-th text-ms-gray'>29/10/2020</h1>
        </div>

        <div className='grid grid-cols-2 w-1/3'>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>เบอร์โทรศัพท์</p>
               <h1 className='text-2xl font-th text-ms-gray'>098098009</h1>
            </div>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>email</p>
               <h1 className='text-2xl font-th text-ms-gray'>konjeng@gmail.com</h1>
            </div>
        </div>
        
        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>Password</p>
         <h1 className='text-2xl font-th text-ms-gray'>แก้ไข</h1>
        </div>

  

     
      </div>
      
      
    
   </div>

 </div>
  )
}

export default UserSetting