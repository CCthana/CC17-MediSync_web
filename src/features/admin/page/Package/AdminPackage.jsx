import { useEffect, useState } from "react";
import InputSearch from "../../../../components/InputSearch";
import AdminPackageForm from "./AdminPackageForm";
import Modal from "../../../../components/Modal";
import AddPackage from "./Add";
import usePackage from "../../../../hooks/usePackage";
import HeaderTextAdmin from "../../component/HeaderTextAdmin";
import Button from "../../../../components/Button";

export default function AdminPackage() {
  const { allPackages, fetchPackage } = usePackage();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [packages, setPackages] = useState({});

  const filterPackage = allPackages?.filter((packages) =>
    packages.name.toLowerCase().includes(search.toLowerCase())
  );

  const addNewPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  return (

      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
        <HeaderTextAdmin>แพ็กเกจตรวจสุขภาพ</HeaderTextAdmin>

        <div
          className="relative flex items-center w-1/2 rounded-3xl"
        >
          <InputSearch
            type="text"
            value={search}
            className="border border-[#AE8F4E] rounded-3xl p-3 w-2/5"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            role="button"
            className="fa-solid fa-magnifying-glass transition duration-300
            absolute right-6 text-gray-300 text-2xl hover:text-gray-400"
          ></i>
        </div>

        <Button
          btn="success"
          width="w-fit"
          onClick={() => setOpen(true)}
        >
          เพิ่มแพ็กเกจ
        </Button>
        </div>

        {/* grid package */}
        <div className="grid grid-cols-1 w-9/12 mx-auto p-8 gap-8">
          {filterPackage?.map((el) => (
            <AdminPackageForm
              key={el.id}
              packages={el}
              search={search}
              fetchPackage={fetchPackage}
            />
          ))}

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            width={60}
            title={"เพิ่มแพ็กเกจ"}
          >
            <AddPackage onAdd={addNewPackage} onCancel={handleCancel} fetchPackage={fetchPackage} />
          </Modal>
        </div>
      </div>
  );
}
