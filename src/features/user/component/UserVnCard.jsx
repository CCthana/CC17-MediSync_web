import { Link } from "react-router-dom"


function UserVnCard({id, hn, vn, createdAt, recipt, summary}) {
  return (
   <div className="flex items-center justify-between text-center bg-card-bg h-20 px-8 rounded-3xl text-lg text-ms-gray ">
      <h1 className=" w-2/5 font-th"> <span> {id}  </span> </h1>
      <h1 className="w-4/5 font-th"> <span>{new Date(createdAt).toLocaleDateString("en-GB")}</span> </h1>
      <h1 className="w-4/5 font-th"> <span> {vn}  </span> </h1>
      <div className="w-4/5 flex justify-center"> <Link to={summary}  target="_blank"><button className=" h-10 bg-ms-green p-4 flex items-center rounded-full text-white text-sm ">สรุปผลการรักษา</button> </Link> </div>
      <div className="w-4/5 flex justify-center"> <Link to={recipt}  target="_blank"><button className=" h-10 bg-ms-green p-4 flex items-center rounded-full text-white text-sm ">ค่ารักษาพยาบาล</button> </Link> </div>
    
</div>
  )
}

export default UserVnCard