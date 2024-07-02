import { useEffect, useState } from "react";
import AdminSideMenu from "../component/AdminSideMenu"
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AdminAppointment() {
   const [input , setInput] = useState('');
   const [searchAppoint, setSearchAppoint] = useState();
   const [searchType, setSearchType] = useState('hn');

   const navigate = useNavigate();
      
   const handleChangeInput = e => {
      setInput(e.target.value)
   }

   const handleClickSearch = async (e) => {
      try {
          if (searchType === 'hn') {
            const result = await adminApi.getAppointmentByHn(input);
            setSearchAppoint(result.data);
          } else if (searchType === 'name') {
             const result = await adminApi.getAppointmentByName(input);
             setSearchAppoint(result.data);
          }
 
       } catch (err) {
      console.log(err);
       }};

       const handleClickConfirm = async (id, hn) => { 
         try {
            const status = "COMPELETED"
            
            await adminApi.setAppointment(id, status)

            const navigationState = {
               state: {
                  hn: hn,
                  searchAppoint: searchAppoint  
               }
            };

            toast.success('Appointment updated');
            navigate('/admin/createvn', navigationState);
         } catch (err) {
            console.log(err);
         }
       }

       useEffect(() => {
         const handleEscPress = (e) => {
            if (e.keyCode === 13) {
               handleClickSearch()
             }
         }
   
         document.addEventListener('keydown', handleEscPress)
   
         return () => document.removeEventListener('keydown', handleEscPress)
     }, [handleClickSearch])

  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

         <div className="flex flex-1 flex-col w-full h-[600px] rounded-[40px] p-8   ">

         <div className="flex items-center justify-start mb-2 text-center  text-ms-gray gap-10 px-9">
            <button className={`font-th font-semibold hover:underline  ${searchType == "hn" ? "text-ms-green"  : null} `}  onClick={() => setSearchType('hn')}> ค้นหาด้วย HN </button>
            <button className={`font-th font-semibold hover:underline  ${searchType == "name" ? "text-ms-green"  : null} `}  onClick={() => setSearchType('name')}> ค้นหาด้วยชื่อ </button>
         </div>

         <div className="flex justify-center items-center px-8 gap-6 mt-4 mb-4">
            <input className="w-full bg-ms-bg rounded-full h-12 border-[1px] border-ms-gold px-4  focus:outline-ms-green" value={input} onChange={handleChangeInput} />
            <button className="font-th w-[150px] h-12 bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]" onClick={handleClickSearch}> ค้นหา </button>
         </div>

         {searchAppoint?.length > 0 && (
                <div className="px-8 mt-4">
                    {searchAppoint?.map((result) => (
                        <div key={result?.hn} className="h-20 w-full rounded-3xl text-xl  bg-card-bg flex items-center justify-between gap-10 mb-4 px-6 font-th text-ms-gray hover:cursor-pointer ">
                            <h1 className="w-1/4"> <span className=" font-medium text-ms-green"> {result?.hn} </span>  </h1>
                            <h1 className="w-full ">คุณ: <span className=" font-sm text-ms-green">{result?.user.firstName} {result?.user.lastName} </span> </h1>
                            <h1 className="w-2/4">ใบนัดที่: <span className=" font-medium text-ms-green">{result?.id} </span></h1>
                            <h1 className="w-full">วันที่นัด: <span className=" text-md text-ms-green">{result?.appointmentTime.split('T')[0] } </span></h1>
                            <button onClick={() => handleClickConfirm(result?.id,result?.hn )} className="text-sm w-2/4 font-th bg-ms-green rounded-full text-white p-2 hover:bg-[#257956]"> ออกใบ VN  </button>
                        </div>
                    ))}
                </div>
            )}
      


</div> 
      </div> 

 </div>
  )
}

export default AdminAppointment