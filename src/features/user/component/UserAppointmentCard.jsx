

function UserAppointmentCard({ id, createdAt, appointmentTime, doctor }) {
 console.log(doctor)
  return (

   <div className="flex items-center justify-between text-center bg-card-bg h-20 px-8 rounded-3xl text-lg text-ms-gray ">
      <h1 className=" w-2/5 font-th">{id}</h1>
      <h1 className="w-4/5 font-th">{appointmentTime.split("T")[0]}</h1>
      <h1 className="w-4/5 font-th">{createdAt.split("T")[0]}</h1>
      <h1 className="w-4/5 font-th">{doctor?.firstName}</h1>
      <h1 className="w-4/5">{doctor?.clinic.name}</h1>
      
   </div>
  )
}

export default UserAppointmentCard