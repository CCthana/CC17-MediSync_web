import { useEffect, useState } from "react";
import AdminAccountCard from "../component/AdminAccountCard"
import AdminSideMenu from "../component/AdminSideMenu"
import useAdmin from "../../../hooks/useAdmin";
import adminApi from "../../../apis/admin";

function AdminAccountPage() {
  const [paymentVn, setPaymentVn] = useState();

  const { authAdmin } = useAdmin();


  const fetchPaymentVn = async () =>{
    try {
       const result = await adminApi.getAllVnByStatusPayment()
       setPaymentVn(result.data);
       
    } catch (err) {
       console.log(err)
    }
 };

 useEffect(() => {
  fetchPaymentVn()
},[authAdmin])



  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">

      <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
         
            <h1 className="font-th text-4xl  font-semibold text-ms-green flex-1 "> การเงิน </h1>  
            <button onClick={() => fetchPaymentVn()} className="bg-ms-green text-white px-4 py-1 rounded-3xl  hover:bg-[#257956]"> เรียกข้อมูลใหม่ </button> 
        
      </div>
      
    
      {paymentVn?.map((result) => (<AdminAccountCard 
      key={result?.id}
      id={result?.id}
      hn={result?.hn} 
      vn={result?.vn} 
      weight={result?.weight}
      height={result?.height}
      bloodPressure={result?.bloodPressure}
      heartRate={result?.heartRate}
      symptoms={result?.symptoms} 
      treatmentResult={result?.treatmentResult}
      diagnosis={result?.diagnosis}
      medicine={result?.medicine}
      vnType={result?.vnType}
      user={result?.user}
      doctor={result?.doctor}
      clinic={result?.clinic}
      fetchPaymentVn={fetchPaymentVn} 
      />) )}
 

   </div> 

 </div>
    
  )
}

export default AdminAccountPage
