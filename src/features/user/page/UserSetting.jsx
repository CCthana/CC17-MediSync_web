import React, { useState } from 'react'
import SideMenuUser from '../component/SideMenuUser'
import useAuth from '../../../hooks/useAuth';
import userApi from '../../../apis/user';
import { toast } from 'react-toastify';



function UserSetting() {
   const {authUser, fetchUser} = useAuth();

   const initialInput ={
      hn: authUser?.hn,
      password: ''
   }
  

   const [open ,setOpen] = useState(false);
   const [input, setInput] = useState(initialInput)

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }


   const handleClickCancel = () => {
      setInput();
      setOpen(false);
   }

   const handleClickSubmit = async () => {
      try {
         setInput({...input, hn: authUser.hn})
         console.log(input, '++++++++++++++++++++++++++++++++++++');  
         await userApi.updateUserAccount(input);
         setOpen(false);

         toast.success('Account updated');
        
      } catch (err) {
         console.log(err)
      }
   }

   console.log(input)

  return (
   <>
   <h1 className="pt-14 px-24 font-semibold text-2xl">สวัสดี คุณ <span className="text-ms-green font-th"> {authUser?.firstName} {authUser?.lastName}  </span> </h1>
    <div className="flex justify-center px-20 pt-5  gap-10 min-h-[80vh] ">

   <SideMenuUser />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4  ">
      <div className='flex flex-col gap-12'>

        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>HN NUMBER</p>
         <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.hn}</h1>
        </div>

        <div className='grid grid-cols-2 w-1/3'>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>ชื่อ</p>
               <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.firstName}</h1>
            </div>
            <div className='ml-6'>
               <p className='text-sm font-th mb-1 text-ms-gray'>นามสกุล</p>
               <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.lastName}</h1>
            </div>
        </div>

        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>วันเดือนปีเกิด</p>
         <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.birthDate}</h1>
        </div>

        <div className='grid grid-cols-2 w-1/3'>
            <div>
               <p className='text-sm font-th mb-1 text-ms-gray'>เบอร์โทรศัพท์</p>
               <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.phone}</h1>
            </div>
            <div className='ml-6'>
               <p className='text-sm font-th mb-1 text-ms-gray'>email</p>
               <h1 className='text-2xl font-th text-ms-green font-semibold'>{authUser?.email}</h1>
            </div>
        </div>
        
        <div>
         <p className='text-sm font-th mb-1 text-ms-gray'>Password</p>

         {open ? <>
                  <input type="password" name="password" id="password" onChange={handleChangeInput}  className='h-10 rounded-3xl border-[1px] border-ms-gold px-4  focus:outline-ms-green'/> 
                  <button onClick={handleClickSubmit} className='ml-4 h-10 px-4 bg-ms-green rounded-full text-white text-xl hover:bg-[#257956] '> ตกลง </button>
                  <button onClick={handleClickCancel} className='ml-1 h-10 px-4 rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white'> ยกเลิก </button>
               </>
         :
            <button className='text-2xl font-th px-6 h-10 bg-ms-green rounded-full text-white hover:bg-[#257956] ' onClick={()=> setOpen(true)}>แก้ไข</button>
         }


        </div>

  

     
      </div>
      
      
    
   </div>

 </div>
 </>
  )
}

export default UserSetting