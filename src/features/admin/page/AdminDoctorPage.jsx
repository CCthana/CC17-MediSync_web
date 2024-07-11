import { useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import AdminDoctorCard from "../component/AdminDoctorCard";
import adminApi from "../../../apis/admin";
import HeaderTextAdmin from "../component/HeaderTextAdmin";

function AdminDoctorPage() {
  const [doctorData, setDoctorData] = useState();
  const [vnData, setVnData] = useState();

  const { authAdmin } = useAdmin();

  const fetchDoctorData = async () => {
    try {
      const doctorId = authAdmin.doctorId;
      const result = await adminApi.getAdminDoctorData(doctorId);
      const vn = await adminApi.getTreatmentVnByDocTor(doctorId);
      setDoctorData(result.data);
      setVnData(vn.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, [authAdmin]);

  console.log(doctorData);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between text-center px-4 text-ms-gray">
        <div className="flex items-center justify-center py-4 px-8 rounded-2xl bg-[#e8eae6]">
          <div className="border-r border-ms-gold pr-6 space-y-1">
            <h1>แผนก / คลินิก</h1>
            <h1 className="font-normal text-ms-green">
              {doctorData?.clinic.name}
            </h1>
          </div>

          <div className="pl-6 space-y-1">
            <h1>แพทย์</h1>
            <h1 className="font-normal text-ms-green">
              {doctorData?.firstName} {doctorData?.lastName}
            </h1>
          </div>
        </div>

        <HeaderTextAdmin>ตรวจอาการ</HeaderTextAdmin>

        <div className="w-[347px] text-end">
          <button
            onClick={() => fetchDoctorData()}
            className="bg-ms-green text-[#f3f5f2] px-5 py-2 font-light rounded-3xl  hover:bg-[#257956]"
          >
            <i className="fa-solid fa-rotate text-[#f3f5f2]"></i>&#32;
            เรียกข้อมูลใหม่
          </button>
        </div>
      </div>

   <div className="p-4 mt-4 w-full space-y-4">
      {vnData?.map((result) => (
        <AdminDoctorCard
          key={result?.id}
          id={result?.id}
          hn={result?.hn}
          vn={result?.vn}
          firstName={result?.user.firstName}
          lastName={result?.user.lastName}
          gender={result?.user.gender}
          birthDate={result?.user.birthDate}
          weight={result?.weight}
          height={result?.height}
          bloodPressure={result?.bloodPressure}
          heartRate={result?.heartRate}
          symptoms={result?.symptoms}
          doctorData={doctorData}
          fetchDoctorData={fetchDoctorData}
        />
      ))}
      </div>
    </div>
  );
}

export default AdminDoctorPage;
