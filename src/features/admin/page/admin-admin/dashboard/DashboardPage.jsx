import { useEffect } from "react";
import useClinic from "../../../../../hooks/useClinic";
import useDoctor from "../../../../../hooks/useDoctor";
import useHn from "../../../../../hooks/useHn";
import AdminSideMenu from "../../../component/AdminSideMenu";
import HeaderTextAdmin from "../../../component/HeaderTextAdmin";

export default function DashboardPage() {
  const { getAllDoctorActive, fetchAllDoctor } = useDoctor();
  const { adminGetAllClinic, adminFetchAllClinic } = useClinic();
  const { getAllHn, fetchAllHn } = useHn();

  useEffect(() => {
    adminFetchAllClinic();
    fetchAllDoctor()
    fetchAllHn()
  }, []);

  // console.log("adminGetAllClinic DashboardPage", adminGetAllClinic);

  return (
    <div className="flex justify-center px-40 py-16 gap-10 min-h-[80vh] ">
      <AdminSideMenu />

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4   ">
        <div className="flex items-center justify-center mb-2 text-center px-8 text-ms-gray">
          <HeaderTextAdmin>Admin-medisync</HeaderTextAdmin>
        </div>

        <div className="flex items-center gap-4">

          <div className="py-4 px-8 bg-[#e8eae6] text-center rounded-3xl">
            <h1 className="text-6xl font-light">
              {getAllDoctorActive?.length}
            </h1>
            <span className="font-th">จำนวนหมอทั้งหมด</span>
          </div>

          <div className="py-4 px-8 bg-[#e8eae6] text-center rounded-3xl">
            <h1 className="text-6xl font-light">{adminGetAllClinic?.length}</h1>
            <span className="font-th">จำนวนแผนก/คลินิค</span>
          </div>

          <div className="py-4 px-8 bg-[#e8eae6] text-center rounded-3xl">
            <h1 className="text-6xl font-light">{getAllHn?.length}</h1>
            <span className="font-th">จำนวนคนไข้ทั้งหมด (HN)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
