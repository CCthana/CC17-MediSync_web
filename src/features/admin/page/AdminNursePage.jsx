import { useEffect, useState } from "react";
import AdminNurseCard from "../component/AdminNurseCard";
import AdminSideMenu from "../component/AdminSideMenu";
import adminApi from "../../../apis/admin";
import useClinic from "../../../hooks/useClinic";

function AdminNursePage() {
  const [clinicId, setClinicId] = useState();
  const [nurseData, setNurseData] = useState();
  const [doctorData, setDoctorData] = useState();
  const { getAllClinic } = useClinic();

  const fetchNurseData = async () => {
    try {
      const result = await adminApi.getAllVnByClinic(clinicId);
      const doctor = await adminApi.getAllDoctorByClinic(clinicId);
      setNurseData(result.data);
      setDoctorData(doctor.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNurseData();
  }, [clinicId]);

  const handleClinicChange = (e) => {
    setClinicId(e.target.value);
  };

  return (
    <div className='flex justify-center px-40 py-16 gap-10 min-h-[80vh] '>
      <AdminSideMenu />

      <div className='flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   '>
        <div className='flex items-center justify-between mb-2 text-center px-8 text-ms-gray'>
          <div className='flex items-center justify-center'>
            <div>
              <h1>แผนก / คลินิก</h1>
              <select
                name='clinicId'
                id='clinicId'
                onChange={handleClinicChange}
                className='w-[200px] h-[50px] outline-ms-green rounded-3xl border-[1.5px] p-2 border-ms-gold text-center font-semibold text-ms-green '
              >
                <option defaultValue> --- เลือกแผนก --- </option>
                {getAllClinic?.map((result) => (
                  <option
                    key={result?.id}
                    value={result?.id}
                    className=' text-ms-green font-semibold'
                  >
                    {" "}
                    {result?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className='font-th text-4xl  font-semibold text-ms-green flex-1  '>
            {" "}
            ตรวจอาการเบื้องต้น{" "}
          </h1>
        </div>

        {nurseData?.map((result) => (
          <AdminNurseCard
            fetchNurseData={fetchNurseData}
            key={result?.id}
            clinicId={result?.clinicId}
            id={result?.id}
            vn={result?.vn}
            hn={result?.hn}
            firstName={result?.user.firstName}
            lastName={result?.user.lastName}
            gender={result?.user.gender}
            birthDate={result?.user.birthDate}
            doctorData={doctorData}
            symptoms={result?.symptoms}
            setClinicId={setClinicId}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminNursePage;
