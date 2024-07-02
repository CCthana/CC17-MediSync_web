import { useState } from "react"
import { DetailIcon } from "../../../icons";
import { toast } from "react-toastify";
import adminApi from "../../../apis/admin";





function AdminNurseCard({id, vn, hn, firstName, lastName, gender, birthDate, doctorData,  symptoms, fetchNurseData }) {

   const initialInput = {
      id: '',
      weight: '' ,
      height: '' ,
      heartRate: '' ,
      bloodPressure: '' ,
      temperature: '' ,
      doctorId: '' ,
      symptoms: symptoms || ''
   }

   const [input, setInput] = useState({ ...initialInput, id });
   const [open, setOpen] = useState(false);


   
   const handleClick = () => {
      setOpen(!open)
   }

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }

   
   const handleSubmitForm = async (e) => {
         try {
            e.preventDefault()
            await adminApi.updateVnById(input);
            toast.success('VN updated');
            
            fetchNurseData();
         } catch (err) {
            console.log(err)
         }};

     
   
  return (
 
   <div className="flex flex-col bg-card-bg rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] ">
         
            <h1 className="w-2/4"> no. <span className="font-medium text-ms-green"> {id} </span> </h1>
            <h1 className="w-2/4" > <span className="font-medium text-ms-green"> {hn} </span> </h1>
            <h1 className="w-2/4" > <span className="font-medium text-ms-green"> {vn} </span> </h1>
            <h1 className="w-full" > คุณ: <span className="font-medium text-ms-green"> {firstName} {lastName} </span> </h1>
            <h1 className="w-2/4" > เพศ: <span className="font-medium text-ms-green"> {gender} </span> </h1>
            <h1 className="w-2/4" > อายุ: <span className="font-medium text-ms-green"> { (new Date().getUTCFullYear())  - birthDate?.split('-')[0] || '-' } </span>  ปี </h1>
            <button onClick={handleClick}> <DetailIcon className="h-8"/> </button>

         
      </div>
      
         <div className={`h-96 px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 ${open ? "block opacity-100" : "hidden "} animatedbox `} >
            <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

            <div className="flex gap-6 mt-6 justify-between text-ms-gray">

               <div>
                  <h1>น้ำหนัก</h1>
                  <input value={input.weight} name="weight" onChange={handleChangeInput} className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center text-ms-green font-semibold focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ส่วนสูง</h1>
                  <input value={input.height} name="height" onChange={handleChangeInput} className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center text-ms-green font-semibold focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ความดัน</h1>
                  <input value={input.bloodPressure} name="bloodPressure" onChange={handleChangeInput} className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center text-ms-green font-semibold focus:outline-ms-green" />
               </div>

               <div>
                  <h1>ชีพจร</h1>
                  <input value={input.heartRate} name="heartRate" onChange={handleChangeInput} className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center text-ms-green font-semibold focus:outline-ms-green" />
               </div>

               <div>
                  <h1>อุณหภูมิ</h1>
                  <input value={input.temperature} name="temperature" onChange={handleChangeInput} className="h-12 w-36 border-[1px] border-ms-gold rounded-full p-4 text-center text-ms-green font-semibold focus:outline-ms-green" />
               </div>

             



            </div>

            <div className="flex items-center gap-20 text-ms-gray">
               <div className="mt-8 ">
                  <h1>อาการเบื้องต้น</h1>
                  <textarea value={input.symptoms } name="symptoms" onChange={handleChangeInput} className=" min-w-[500px] max-w-[500px] min-h-32 max-h-32 rounded-3xl mt-2 p-4 border-[1.5px] border-ms-gold outline-ms-green text-lg text-ms-green font-md   "/>
               </div>

               <div> 
                  <h1>ลงชื่อแพทย์</h1>
                  <select name="doctorId" id="doctorId"  onChange={handleChangeInput} className="w-[300px] h-[60px] outline-ms-green rounded-3xl border-[1.5px] p-4 border-ms-gold text-ms-green font-semibold " >
                  <option defaultValue > --- ลงชื่อแพทย์ --- </option>   
                     {doctorData?.map((result) => (
                        <option key={result?.id} value={result?.id} className=" text-ms-green font-semibold" > {result?.firstName} {result?.lastName}</option>
                     ))}
                       
                  </select>
               </div>
            </div>


            
            <div className="flex items-center justify-end  gap-4">
               <button onClick={handleSubmitForm} className="font-th w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]"> ยืนยัน </button>
               <button onClick={() => {setInput(initialInput)}} className="font-th w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white "> แก้ไข </button>
            </div>
           

         </div>
        
        



         
    </div>
  )
}


export default AdminNurseCard;