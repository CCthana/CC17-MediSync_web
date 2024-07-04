import { useEffect, useState } from "react";
import useClinic from "../../../../../hooks/useClinic";
import AdminSideMenu from "../../../component/AdminSideMenu";
import HeaderTextAdmin from "../../../component/HeaderTextAdmin";
import ClinicItem from "./components/ClinicItem";
import ModalInfo from "../../../../../components/ModalInfo";
import UpdateClinic from "./components/UpdateClinic";
import AddClinic from "./components/AddClinic";
import DeleteClinic from "./components/DeleteClinic";
import { toast } from "react-toastify";
import adminApi from "../../../../../apis/admin";

export default function MangeClinicPage() {
  const { adminGetAllClinic, adminFetchAllClinic } = useClinic();
  const [selectClinicItem, setSelectClinicItem] = useState(null);
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

  console.log("selectClinicItem MangeClinicPage", selectClinicItem);
  console.log("adminGetAllClinic MangeClinicPage", adminGetAllClinic);
  return (
    <div className="flex justify-center px-40 py-16 gap-4 min-h-[80vh] ">
      <AdminSideMenu />

      <div className="flex flex-col border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 w-full">
        <div className="flex items-center flex-col justify-center mb-2 text-center px-8 text-ms-gray">
          <div className="flex items-center justify-between w-full">
            <HeaderTextAdmin>จัดการแผนก/คลินิก</HeaderTextAdmin>
            <button className="flex items-center justify-center gap-1 hover:underline"
              onClick={() => setOpen({ ...open, modalAddClinic: true })}
            >
                <span>เพิ่มแผนก/คลินิก</span>
            </button>
          </div>

          <div className="grid-cols-2 grid gap-6 mt-8">
            {adminGetAllClinic?.map((el) => (
              <ClinicItem
                key={el.id}
                data={el}
                handleClickSelect={handleClickSelect}
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
            width={65}
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
    </div>
  );
}
