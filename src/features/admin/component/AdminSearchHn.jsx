import { useEffect, useState } from "react";
import adminApi from "../../../apis/admin";



function AdminSearchHn( {handleSelectedHn, onClose} ) {
   const [input , setInput] = useState('');
   const [searchType, setSearchType] = useState('name');
   const [searchResults, setSearchResults] = useState();

   
   
   
   const handleChangeInput = e => {
      setInput(e.target.value)
   }

   


   const handleClickSearchName = async (e) => {
     
     try {
     
         if (searchType === 'name') {
           const result = await adminApi.getHnbyName(input);
           setSearchResults(result.data);
         } else if (searchType === 'phone') {
            const result = await adminApi.getHnbyPhone(input);
            setSearchResults(result.data);
         }
     

      } catch (err) {
     console.log(err);
      }
      
   }


   useEffect(() => {
      const handleEscPress = (e) => {
         if (e.keyCode === 13) {
            handleClickSearchName()
          }
      }

      document.addEventListener('keydown', handleEscPress)

      return () => document.removeEventListener('keydown', handleEscPress)
  }, [handleClickSearchName])

      


  return (



   <div className="flex flex-1 flex-col w-full h-[600px] rounded-[40px] p-8   ">

      <div className="flex items-center justify-start mb-2 text-center  text-ms-gray gap-10 px-9">
         <h1 className="font-th font-semibold "> ค้นหาเลข HN </h1>
         <button className={`font-th font-semibold hover:underline  ${searchType == "name" ? "text-ms-green"  : null} `}  onClick={() => setSearchType('name')}> ค้นหาด้วยชื่อ </button>
         <button className={`font-th font-semibold hover:underline" ${searchType == "phone" ? "text-ms-green"  : null} `} onClick={() => setSearchType('phone')}> ค้นหาด้วยเบอร์โทร </button>
      </div>

      <div className="flex justify-center items-center px-8 gap-6 mt-4 mb-4">
         <input className="w-full bg-ms-bg rounded-full h-12 border-[1px] border-ms-gold px-4  focus:outline-ms-green" value={input} onChange={handleChangeInput} />
         <button className="font-th w-[150px] h-12 bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]" onClick={handleClickSearchName}> ค้นหา </button>
         
      </div>


      {searchResults?.length > 0 && (
                <div className="px-8 mt-4">
                    {searchResults?.map((result) => (
                        <div key={result?.hn} onClick={() => {
                           handleSelectedHn(result) 
                           onClose()} 
                           } className="h-20 w-full rounded-3xl text-xl  bg-card-bg flex items-center justify-between gap-20 mb-4 px-10 font-th text-ms-gray hover:cursor-pointer ">
                            <h1 className="w-2/4"> <span className="font-medium text-ms-green"> {result?.hn} </span>  </h1>
                            <h1 className="w-full ">คุณ: <span className="font-medium text-ms-green"> {result?.firstName} {result?.lastName}</span> </h1>
                            <h1 className="w-2/4">เพศ: <span className="font-medium text-ms-green"> {result?.gender}</span> </h1>
                            <h1 className="w-full">เบอร์โทร: <span className="font-medium text-ms-green"> {result?.phone}</span> </h1>
                            <h1 className="w-2/4">อายุ: <span className="font-medium text-ms-green"> {result.birthDate ? (new Date().getUTCFullYear())  - result?.birthDate.split('-')[0] : '' } </span> ปี</h1>
                            
                        </div>
                    ))}
                </div>
            )}
      


   </div> 


  )
}

export default AdminSearchHn