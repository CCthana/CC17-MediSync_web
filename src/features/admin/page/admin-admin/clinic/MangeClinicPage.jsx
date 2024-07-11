import { useEffect, useState } from "react";
import useClinic from "../../../../../hooks/useClinic";
import HeaderTextAdmin from "../../../component/HeaderTextAdmin";
import ClinicItem from "./components/ClinicItem";
import ModalInfo from "../../../../../components/ModalInfo";
import UpdateClinic from "./components/UpdateClinic";
import AddClinic from "./components/AddClinic";
import DeleteClinic from "./components/DeleteClinic";
import { toast } from "react-toastify";
import adminApi from "../../../../../apis/admin";
import InputSearch from "../../../../../components/InputSearch";

export default function MangeClinicPage() {
  const { adminGetAllClinic, adminFetchAllClinic } = useClinic();
  const [selectClinicItem, setSelectClinicItem] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState({
    modalSelectClinic: false,
    modalAddClinic: false,
    modalDelete: false
  });

  const handleClickSelect = (clinicSelect) => {
    setOpen({ ...open, modalSelectClinic: true });
    setSelectClinicItem(clinicSelect);
  };

  const handleDeleteClinic = async () => {
    try {
      await adminApi.deleteClinic(selectClinicItem?.id);
      adminFetchAllClinic();
      toast.success("delete success");
      setOpen({ ...open, modalDelete: false, modalSelectClinic: false})
    } catch (error) {
      console.log("error handleDeleteClinic", error);
    }
  }

  useEffect(() => {
    adminFetchAllClinic()
},[])

const filterClinic = adminGetAllClinic?.filter((clinic) =>
  clinic.name.toLowerCase().includes(search.toLowerCase())
);

  // console.log("selectClinicItem MangeClinicPage", selectClinicItem);
  // console.log("adminGetAllClinic MangeClinicPage", adminGetAllClinic);
  return (

      <div className="flex flex-col">
        <div className="flex items-center flex-col justify-center mb-2 text-center px-8 text-ms-gray">
          <div className="flex items-center justify-between text-center text-ms-gray w-full">
            <HeaderTextAdmin>จัดการแผนก/คลินิก</HeaderTextAdmin>

            <div className="relative flex items-center w-1/2 rounded-3xl">
            <InputSearch
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="ค้นหาแพทย์"
            />
            <i
              role="button"
              className="fa-solid fa-magnifying-glass transition duration-300
            absolute right-2 p-3 text-gray-300 text-2xl hover:text-gray-400"
            ></i>
          </div>

            <button className="flex items-center justify-center gap-1 hover:underline"
              onClick={() => setOpen({ ...open, modalAddClinic: true })}
            >
                <span>เพิ่มแผนก/คลินิก</span>
            </button>
          </div>

          <div className="grid-cols-2 grid gap-6 mt-10">
            {filterClinic?.map((el) => (
              <ClinicItem
                key={el.id}
                data={el}
                handleClickSelect={handleClickSelect}
                search={search}
              />
            ))}
          </div>

          <ModalInfo
            open={open.modalAddClinic}
            onClose={() => setOpen({ ...open, modalAddClinic: false })}
            width={65}
          >
            <AddClinic adminFetchAllClinic={adminFetchAllClinic} onClose={() => setOpen({ ...open, modalAddClinic: false })} />
          </ModalInfo>

          <ModalInfo
            open={open.modalSelectClinic}
            onClose={() => setOpen({ ...open, modalSelectClinic: false })}
            width={60}
          >
            <UpdateClinic
              setSelectClinicItem={setSelectClinicItem}
              clickDelete={() => setOpen({ ...open, modalDelete: true,  modalSelectClinic: false  })}
              data={selectClinicItem}
              adminFetchAllClinic={adminFetchAllClinic}
              onClose={() => setOpen({ ...open, modalSelectClinic: false })}
            />
          </ModalInfo>

          <ModalInfo
            open={open.modalDelete}
            onClose={() => setOpen({ ...open, modalDelete: false })}
            width={40}
          >
            <DeleteClinic nameClinic={selectClinicItem?.name} cancel={() => setOpen({ ...open, modalDelete: false,  modalSelectClinic: true  })} handleDeleteClinic={handleDeleteClinic} />
          </ModalInfo>
        </div>
      </div>
  );
}
