import { useEffect, useState } from "react"
import { DetailIcon } from "../../../icons";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";

function AdminDoctorCard({id, hn, vn, firstName, lastName, gender, birthDate, weight, height, bloodPressure, heartRate, symtomps, doctorData, fetchDoctorData}) {

   const initialInput = {
      id: id,
      treatmentResult: '',
      diagnosis: '',
      medicine: '',
      vnType : 'OPD',
   }

   const initialAppointment = {
      hn: hn,
      doctorId: doctorData.id,
      appointmentTime: ''
   }

   const [input, setInput] = useState(initialInput);
   const [open, setOpen] = useState(false);
   const [appointCheck, setAppointCheck] = useState(false)
   const [appointmentData, setAppointmentData] = useState(initialAppointment);
   const [allVn, setAllVn] = useState();

   useEffect(() => {
      const fetchAllVn = async () => {
         try {
            const result = await adminApi.getAllVnByHn(id);
            setAllVn(result.data)

         } catch (err) {
            console.log(err)
         }
      }
      fetchAllVn()
   },[open])

  
   
   const handleClick = () => {
      setOpen(!open)
   }

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }

   const handleChangeInputAppoint = e => {
      setAppointmentData({...appointmentData, [e.target.name]: e.target.value})
   }


   const handleClickConfirm = async () => {
     
      try {

         if(appointCheck == true){
            await adminApi.createAppontmentByDoctor(appointmentData);
            toast.success('appointment created');
         }
        
         await adminApi.doctorUpdateVnByid(input)

         toast.success('Treatment updated');
         fetchDoctorData();
        
      } catch (err) {
         console.log(err);
      }
    }

    

  return (
   <div className="flex flex-col bg-card-bg rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] text-lg">
         
            <h1> no. <span className="text-ms-green font-semibold"> {id} </span> </h1>
            <h1> <span className="text-ms-green font-semibold"> {hn} </span> </h1>
            <h1> <span className="text-ms-green font-semibold"> {vn} </span> </h1>
            <h1>  คุณ:  <span className="text-ms-green font-semibold"> {firstName} {lastName} </span> </h1>
            <h1>  เพศ: <span className="text-ms-green font-semibold"> {gender} </span> </h1>
            <h1> อายุ: <span className="text-ms-green m-2 font-semibold"> { (new Date().getUTCFullYear())  - birthDate?.split('-')[0] || '-' }  </span> ปี   </h1>
            <button onClick={handleClick}> <DetailIcon className="h-8"/> </button>

         
      </div>
      
         <div className={`h-fit px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 mb-10 ${open ? "block opacity-100" : "hidden "} animatedbox `} >
            <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

            <div className="flex gap-6 mt-6 justify-start text-ms-gray font-th">


                  <h1>น้ำหนัก: <span className="mx-2 font-medium text-lg text-ms-green"> {weight} </span> kg.</h1>
                  <h1>ส่วนสูง: <span className="mx-2 font-medium text-lg text-ms-green"> {height} </span> cm.</h1>
                  <h1>ความดัน: <span className="mx-2 font-medium text-lg text-ms-green"> {bloodPressure} </span></h1>
                  <h1>ชีพจร: <span className="mx-2 font-medium text-lg text-ms-green"> {heartRate} </span> BPM.</h1>
            

            </div>

            <div className=" text-ms-gray mt-2 ">
                  <h1>อาการเบื้องต้น: <span className="mx-2 font-medium text-lg"> {symtomps} </span> </h1>
            </div>

            <div className="flex items-start gap-20 text-ms-gray ml-6 ">
               <div className="flex flex-col">

                  <div className="mt-8 ">
                     <h1>การตรวจ</h1>
                     <textarea value={input.treatmentResult} name="treatmentResult" onChange={handleChangeInput}  className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>

                  <div className="mt-8 ">
                     <h1>สรุปอาการ</h1>
                     <textarea value={input.diagnosis} name="diagnosis" onChange={handleChangeInput}  className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>

                  <div className="mt-8 ">
                     <h1>จ่ายยา</h1>
                     <textarea value={input.medicine} name="medicine" onChange={handleChangeInput}  className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-gray  "/>
                  </div>



               </div>

               <div className="flex flex-col ml-10 gap-10 mt-14"> 

                  <div>

                     <h1> <input type="checkbox" onChange={() => setAppointCheck(!appointCheck) } /> นัดครั้งต่อไป  </h1>
                     <input type='date' name="appointmentTime" id="appointmentTime" onChange={handleChangeInputAppoint}  className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold " />
                        
                  </div>

                  <div>
                     <h1>OPD / ADMIT</h1>
                     <select id="vnType" value={input.vnType} name="vnType" onChange={handleChangeInput}  className="w-[300px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold " >
                        <option value="OPD">OPD</option>
                        <option value="ADMIT">ADMIT</option>  
                     </select>
                  </div>


               </div>

            </div>


         <div className="px-10 py-4 text-ms-gray mb-4 mt-6 ">
            <h1 className="mb-2 text-2xl text-ms-green font-semibold">ประวัติการรักษา</h1>

          { allVn?.map((result) => (
               
               <div key={result?.id} className="flex justify-start items-center gap-4 font-th ">
                  <h1 > {result?.id} </h1>
                  <h1> {result?.hn} </h1>
                  <h1> {result?.vn} </h1>
                  <h1>{result?.symptoms}</h1>
                  <h1>{result?.createdAt.split('T')[0]} </h1>
               </div>
               ))}
            
               

            </div>
         
            
            <div className="flex items-center justify-end  gap-4">
               <button onClick={handleClickConfirm} className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ยืนยัน </button>
               <button onClick={() => {setInput(initialInput)}} className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> แก้ไข </button>
            </div>
           

         </div>

        
        



         
    </div>
  )
}

export default AdminDoctorCard