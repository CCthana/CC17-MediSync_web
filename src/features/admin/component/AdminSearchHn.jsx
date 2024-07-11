import { useEffect, useState } from "react";
import adminApi from "../../../apis/admin";
import InputSearch from "../../../components/InputSearch";
import ButtonSearch from "../../../components/ButtonSearch";
import validateSearch from "../validate/validate-search";
import logo2 from "../../../assets/logos/MediSync-2.svg"


function AdminSearchHn( {handleSelectedHn, onClose} ) {
   const [input , setInput] = useState('');
   const [searchType, setSearchType] = useState('name');
   const [searchResults, setSearchResults] = useState();
   const [inputError, setInputError] = useState({
      input: '',
      notFound: ''
     });
   
   
   
   const handleChangeInput = e => {
      setInput(e.target.value)
      setInputError({...inputError, input: ''})
   }

   


   const handleClickSearchName = async (e) => {
     
     try {
      const error = validateSearch({input})

      if (error) {
         setInputError(error);
         return;
       }
     
         if (searchType === 'name') {
           const result = await adminApi.getHnbyName(input);
           setSearchResults(result.data);
           if (result.data?.length === 0) {
            setInputError({...inputError, notFound: 'ไม่พบข้อมูล'})
           } else {
            setInputError({...inputError, notFound: ''})
           }
         } else if (searchType === 'phone') {
            const result = await adminApi.getHnbyPhone(input);
            setSearchResults(result.data);
            if (result.data?.length === 0) {
               setInputError({...inputError, notFound: 'ไม่พบข้อมูล'})
              } else {
               setInputError({...inputError, notFound: ''})
              }
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



   <div className="flex flex-1 flex-col w-full h-[600px] p-8">

<div className="px-12 space-y-2">
      <div className="flex items-center justify-start text-center px-4 font-normal text-ms-gray space-x-4">
         {/* <h1 className="font-th font-semibold "> ค้นหาเลข HN </h1> */}
         <button className={`font-th hover:underline  ${searchType == "name" ? "text-ms-green hover:no-underline"  : null} `}  onClick={() => {
            setSearchType('name')
            setInputError({...inputError, input: ''})
         }}> ค้นหาด้วยชื่อ </button>
         <button className={`font-th hover:underline ${searchType == "phone" ? "text-ms-green hover:no-underline"  : null} `} onClick={() => {
            setSearchType('phone')
            setInputError({...inputError, input: ''})
         }}> ค้นหาด้วยเบอร์โทร </button>
      </div>

      <div className="flex justify-center items-center space-x-4">
         <InputSearch placeholder={searchType === 'name' ? 'ซื่อคนไข้' : 'เบอร์โทรศัพท์'} value={input} onChange={handleChangeInput} />
         <ButtonSearch btn="active" width="w-[15rem]" onClick={handleClickSearchName}> ค้นหา </ButtonSearch>
         
      </div>
      {inputError.input ? <small className="text-red-500 px-4 text-start block">{inputError.input}</small> : null}
        {inputError.notFound ? <div className="pt-4"><h1 className="text-gray-400 bg-[#e8eae6] text-center rounded-3xl p-32 text-3xl font-light">{inputError.notFound}</h1></div> : null}
      </div>


      {searchResults?.length > 0 ? (
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
            ) : (
               <div className="w-full h-full grid place-content-center opacity-10">
                  <img className="w-full h-full" src={logo2} alt="logo MediSync" />
                  </div>
            ) }
      


   </div> 


  )
}

export default AdminSearchHn