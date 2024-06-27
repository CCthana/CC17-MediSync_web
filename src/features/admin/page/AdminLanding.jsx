import AdminSideMenu from "../component/AdminSideMenu"
import logo from '../../../assets/logos/MediSync-2.svg'


function AdminLanding() {
  return (
   <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">

   <AdminSideMenu />
  

   <div className="flex flex-1 flex-col min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 justify-center items-center opacity-30  ">

    
         <img src={logo} className="h-[500px] " />
   
     
     

   </div> 

 </div>
  )
}

export default AdminLanding