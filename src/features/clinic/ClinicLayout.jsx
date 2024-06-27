import { useState } from "react";
import ClinicForm from "./ClinicForm";

import HeardText from "../../components/HeardText";
import InputSearch from "../../components/InputSearch";
import useClinic from "../../hooks/useClinic";
import ModalInfo from "../../components/ModalInfo";
import ClinicItem from "./ClinicItem";

// const clinic = [
//   {
//     name: "ศูนย์ทันตกรรม",
//     detail: "ข้อมูลเพิ่มเติมทันตกรรม",
//     image: "public/dentist.svg",
//   },
//   { name: "ศูนย์หู",
//     detail: "ข้อมูลเพิ่มเติมหู",
//     image: "public/ear.svg" },
//   {
//     name: "ศูนย์หัวใจ",
//     detail: "ข้อมูลเพิ่มเติมหัวใจ",
//     image: "public/heart.svg",
//   },
//   {
//     name: "ศูนย์กุมารเวช",
//     detail: "ข้อมูลเพิ่มเติมกุมารเวช",
//     image: "public/baby.svg",
//   },
// ];

export default function ClinicLayout() {
  
  const { getAllClinic, isClinicLoading } = useClinic();

  const [isOpen, setIsOpen] = useState(false);
  const [selectClinics, setSelectClinics] = useState(null);
  const [search, setSearch] = useState("");

  const handleClickOpenModal = (clinic) => {
    setSelectClinics(clinic);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectClinics(null);
    setIsOpen(false);
  };

  const filterClinic = getAllClinic?.filter((clinic) =>
    clinic.name.includes(search)
  );

  console.log('getAllClinic', getAllClinic)

  return (
    <div className="min-h-[75vh] border-t border-gray-300">
      <div className="container mx-auto py-10">
        <HeardText text="ค้นหาแผนก / คลินิก" />

        <div
          className="relative flex items-center p-8 w-1/2 mx-auto bg-[#e8eae6]
          rounded-3xl mb-6 mt-5 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]"
        >
          <InputSearch
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              // setClinics(filterClinic(e.target.value));
            }}
            placeholder="ค้นหาแผนก / คลินิก"
          />
          <i
            role="button"
            className="fa-solid p-8 fa-magnifying-glass transition duration-300
              absolute right-6 text-gray-300 text-2xl hover:text-gray-400"
          ></i>
        </div>

        <div className="grid gap-8 grid-cols-2 w-9/12 mx-auto p-6">
          {filterClinic?.map((clinic) => (
            <ClinicItem key={clinic.id} clinic={clinic} onClick={handleClickOpenModal} isClinicLoading={isClinicLoading} />
          ))}
        </div>

        <ModalInfo open={isOpen} onClose={handleCloseModal} width={50}>
          <ClinicForm 
            name={selectClinics?.name}
            detail={selectClinics?.detail}
            image={selectClinics?.image} 
          />
        </ModalInfo>
      </div>
    </div>
  );
}
