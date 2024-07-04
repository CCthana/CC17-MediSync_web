import { useEffect, useState } from "react";
import AdminSideMenu from "../../../component/AdminSideMenu";
import HeaderTextAdmin from "../../../component/HeaderTextAdmin";
import ModalInfo from "../../../../../components/ModalInfo";
import useDoctor from "../../../../../hooks/useDoctor";
import UpdateDoctor from "./components/UpdateDoctor";
import AddDoctor from "./components/AddDoctor";
import DoctorActive from "./components/DoctorActive";
import DoctorNoActive from "./components/DoctorNoActive";
import DeleteDoctor from "./components/DeleteDoctor";
import useClinic from "../../../../../hooks/useClinic";
import adminApi from "../../../../../apis/admin";
import { toast } from "react-toastify";
import InputSearch from "../../../../../components/InputSearch";

export default function ManageDoctorPage() {
  const { adminGetAllClinic, adminFetchAllClinic } = useClinic()
  const { adminGetAllDoctor, adminFetchAllDoctor } = useDoctor();
  const [getAllDoctor, setGetAllDoctor] = useState([]);
  const [selectDoctorItem, setSelectDoctorItem] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState({
    modalSelectDoctor: false,
    modalAddDoctor: false,
    modalDelete: false
  });
  const [selectMenu, setSelectMenu] = useState(1);

  const handleClickSelect = (doctorSelect) => {
    setOpen({ ...open, modalSelectDoctor: true });
    setSelectDoctorItem(doctorSelect);
  };

  const handleDeleteDoctor = async () => {
    try {
      const data = {
        id: selectDoctorItem.id,
        isDeleted: true
      }

      await adminApi.deleteDoctor(data);
      adminFetchAllDoctor();
      toast.success("delete success");
      setOpen({ ...open, modalDelete: false, modalSelectDoctor: false})
    } catch (error) {
      console.log("error handleDeleteClinic", error);
    }
  }

  const handleReStatusDoctor = async () => {
    try {
      const data = {
        id: selectDoctorItem.id,
        isDeleted: false
      }

      await adminApi.deleteDoctor(data);
      adminFetchAllDoctor();
      toast.success("ReStatus success");
      setOpen({ ...open, modalDelete: false, modalSelectDoctor: false})
    } catch (error) {
      console.log("error handleReStatusDoctor", error);
    }
  }

  const filter = (search) => {
    const filterList = [];

    const filterFirstName = adminGetAllDoctor
      ?.filter((doctors) => doctors.firstName.includes(search))
      .map((el) => el.id);
    filterList.push(filterFirstName);

    const filterLastName = adminGetAllDoctor
      ?.filter((doctors) => doctors.lastName.includes(search))
      .map((el) => el.id);
    filterList.push(filterLastName);

    const filterDepartment = adminGetAllDoctor
      ?.filter((doctors) => doctors.clinic.name.includes(search))
      .map((el) => el.id);
    filterList.push(filterDepartment);

    const flatArray = filterList.flat(Infinity);
    const setFlatArray = new Set(flatArray);

    const finalResult = adminGetAllDoctor?.filter((el) =>
      Array.from(setFlatArray).includes(el.id)
    );
    return finalResult;
  };

  useEffect(() => {
    adminFetchAllDoctor();
    adminFetchAllClinic()
  }, []);

  useEffect(()=>{
    if(adminGetAllDoctor) setGetAllDoctor(adminGetAllDoctor)
  },[adminGetAllDoctor])

  console.log("adminGetAllDoctor", adminGetAllDoctor);

  return (
    <div className="flex justify-center px-40 py-16 gap-4 min-h-[80vh] ">
      <AdminSideMenu />

      <div className="flex flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 w-full">
        <div className="flex items-center flex-col justify-center mb-2 text-center px-8 text-ms-gray">
          <div className="flex items-center justify-between w-full">
            <HeaderTextAdmin>จัดการหมอ</HeaderTextAdmin>
            <button
              className="flex items-center justify-center gap-1 hover:underline"
              onClick={() => setOpen({ ...open, modalAddDoctor: true })}
            >
              <span className="">เพิ่มหมอ</span>
            </button>
          </div>

          <div className="space-x-6">
            <button
              onClick={() => setSelectMenu(1)}
              className={`${
                selectMenu === 1 ? "text-ms-green" : "hover:underline"
              }`}
            >
              หมอปัจจุบัน
            </button>
            <button
              onClick={() => setSelectMenu(2)}
              className={`${
                selectMenu === 2 ? "text-ms-green" : "hover:underline"
              }`}
            >
              หมอที่เคยร่วมงานกับเรา
            </button>
          </div>

          <div className="relative flex items-center w-1/2 mx-auto mt-4
        rounded-3xl">

          <InputSearch
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setGetAllDoctor(filter(e.target.value));
            }}
            placeholder="ค้นหาแพทย์"
          />
          <i
            role="button"
            className="fa-solid p-6 fa-magnifying-glass transition duration-300
            absolute right-0 text-gray-300 text-2xl hover:text-gray-400"
          ></i>
        </div>

          {selectMenu === 1 && (
            <DoctorActive
            getAllDoctor={getAllDoctor}
              handleClickSelect={handleClickSelect}
            />
          )}
          {selectMenu === 2 && (
            <DoctorNoActive
              adminGetAllDoctor={adminGetAllDoctor}
              handleClickSelect={handleClickSelect}
            />
          )}

          <ModalInfo
            open={open.modalAddDoctor}
            onClose={() => setOpen({ ...open, modalAddDoctor: false })}
            width={55}
          >
            <AddDoctor
              adminFetchAllDoctor={adminFetchAllDoctor}
              onClose={() => setOpen({ ...open, modalAddDoctor: false })}
              getAllClinic={adminGetAllClinic}
            />
          </ModalInfo>

          <ModalInfo
            open={open.modalSelectDoctor}
            onClose={() => setOpen({ ...open, modalSelectDoctor: false })}
            width={60}
          >
            <UpdateDoctor
              setSelectDoctorItem={setSelectDoctorItem}
              clickDelete={() => setOpen({ ...open, modalDelete: true,  modalSelectDoctor: false  })}
              data={selectDoctorItem}
              adminFetchAllDoctor={adminFetchAllDoctor}
              onClose={() => setOpen({ ...open, modalSelectDoctor: false })}
              isDelete={open.modalDelete}
              getAllClinic={adminGetAllClinic}
              handleReStatusDoctor={handleReStatusDoctor}
            />
          </ModalInfo>

          <ModalInfo
            open={open.modalDelete}
            onClose={() => setOpen({ ...open, modalDelete: false })}
            width={40}
          >
            <DeleteDoctor nameDoctor={selectDoctorItem?.firstName + " " + selectDoctorItem?.lastName} cancel={() => setOpen({ ...open, modalDelete: false,  modalSelectDoctor: true })} handleDeleteDoctor={handleDeleteDoctor} />
          </ModalInfo>
        </div>
      </div>
    </div>
  );
}
