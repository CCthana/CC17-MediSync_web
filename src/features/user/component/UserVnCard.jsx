

function UserVnCard() {
  return (
   <div className="flex items-center justify-between text-center bg-card-bg h-20 px-8 rounded-3xl text-lg text-ms-gray ">
      <h1 className=" w-2/5 font-th">1</h1>
      <h1 className="w-4/5 font-th">12/06/2024</h1>
      <h1 className="w-4/5 font-th">VN989590</h1>
      <div className="w-4/5 flex justify-center"> <button className=" h-10 bg-ms-green p-4 flex items-center rounded-full text-white ">สรุปผลการรักษา</button> </div>
      <div className="w-4/5 flex justify-center"> <button className=" h-10 bg-ms-green p-4 flex items-center rounded-full text-white">ค่ารักษาพยาบาล</button> </div>
      
</div>
  )
}

export default UserVnCard