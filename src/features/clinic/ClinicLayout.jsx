import { useState } from "react";
import ClinicForm from "./ClinicForm";
import Modal from "./Modal";
// import clinicsAPI from "../apis/clinics";

export default function ClinicLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectClinics, setSelectClinics] = useState(null);
  const [search, setSearch] = useState("");
  // const [clinics, setClinics] = useState([]);

  const handleClickOpenModal = (clinic) => {
    setSelectClinics(clinic);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectClinics(null);
    setIsOpen(false);
  };

  const clinic = [
    {
      name: "ศูนย์ทันตกรรม",
      detail: "ข้อมูลเพิ่มเติมทันตกรรม",
      image: "public/dentist.svg",
    },
    { name: "ศูนย์หู", detail: "ข้อมูลเพิ่มเติมหู", image: "public/ear.svg" },
    {
      name: "ศูนย์หัวใจ",
      detail: "ข้อมูลเพิ่มเติมหัวใจ",
      image: "public/heart.svg",
    },
    {
      name: "ศูนย์กุมารเวช",
      detail: "ข้อมูลเพิ่มเติมกุมารเวช",
      image: "public/baby.svg",
    },
  ];

  // ทดลองดึงจากหลังบ้านมาโชว์
  // useEffect(() => {
  //   const fetchClinic = async () => {
  //     try {
  //       const response = await clinicsAPI.getAllClinic();
  //       setClinics(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchClinic();
  // }, []);

  //search clinic
  const filterClinic = clinic.filter((clinic) => clinic.name.includes(search));

  return (
    <div className='flex flex-col justify-start items-center p-4 bg-[#E3E7E0] h-screen'>
      <div>ค้นหาแผนก / คลินิก</div>
      <div className='flex justify-around gap-4 m-4 w-2/4'>
        <input
          type='text'
          className='border rounded-3xl w-full px-4 border-[#AE8F4E]'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='border border-[#AE8F4E] p-2 rounded-3xl w-1/4'>
          ค้นหา
        </button>
      </div>

      <div className='grid grid-cols-2 p-4 gap-4 w-2/3'>
        {filterClinic.map((clinic, index) => (
          <button
            key={index}
            className='p-4 bg-[#E3E7E0] rounded-3xl text-[#767676] text-start border border-[#AE8F4E]'
            onClick={() => handleClickOpenModal(clinic)}
          >
            <div className='flex items-center gap-4'>
              <img src={clinic.image} className='w-14' />
              <h1 className='text-2xl'>{clinic.name}</h1>
            </div>
          </button>
        ))}
      </div>

      <Modal open={isOpen} onClose={handleCloseModal}>
        <ClinicForm
          title={selectClinics?.name}
          children={selectClinics?.detail}
          image={selectClinics?.image}
        ></ClinicForm>
      </Modal>
    </div>
  );
}
