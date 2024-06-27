import { useState } from "react";
import ProfileForm from "./component/ProfileForm";
import useDoctor from "../../hooks/useDoctor";
import InputSearch from "../../components/InputSearch";
import ModalInfo from "../../components/ModalInfo";
import DoctorItem from "./component/DoctorItem";
import HeardText from "../../components/HeardText";

// const doctors = [
//   {
//     id: 1,
//     firstName: "พรชนก",
//     lastName: "ถีระวงษ์",
//     education: "อายุรกรรม",
//     image:
//       "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%9E%E0%B8%A3%E0%B8%8A%E0%B8%99%E0%B8%81.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
//   },
//   {
//     id: 2,
//     firstName: "ธวัชไชย",
//     lastName: "พรหมส่ง",
//     education: "ฟฟฟฟฟฟฟฟฟ",
//     image:
//       "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%99%E0%B8%9E%E0%B8%93%E0%B8%B1%E0%B8%90.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
//   },
//   {
//     id: 3,
//     firstName: "พรชนก",
//     lastName: "ถีระวงษ์",
//     education: "อายุรกรรม",
//     image:
//       "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%9E%E0%B8%A3%E0%B8%8A%E0%B8%99%E0%B8%81.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
//   },
//   {
//     id: 4,
//     firstName: "พรชนก",
//     lastName: "ถีระวงษ์",
//     education: "อายุรกรรม",
//     image:
//       "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%9E%E0%B8%A3%E0%B8%8A%E0%B8%99%E0%B8%81.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
//   },
// ];

export default function ProfilePage() {
  const { getAllDoctorActive, isDoctorLoading } = useDoctor();

  const [getAllDoctor, setGetAllDoctor] = useState(getAllDoctorActive);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectDoctor, setSelectDoctor] = useState(null);

  const handleOpenModal = (dataSelectDoctor) => {
    setIsModalOpen(true);
    setSelectDoctor(dataSelectDoctor);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filter = (search) => {
    const filterList = [];

    const filterFirstName = getAllDoctorActive
      ?.filter((doctors) => doctors.firstName.includes(search))
      .map((el) => el.id);
    filterList.push(filterFirstName);

    const filterLastName = getAllDoctorActive
      ?.filter((doctors) => doctors.lastName.includes(search))
      .map((el) => el.id);
    filterList.push(filterLastName);

    // const filterDepartment = getAllDoctorActive
    //   ?.filter((doctors) => doctors.education.includes(search))
    //   .map((el) => el.id);
    // filterList.push(filterDepartment);

    const flatArray = filterList.flat(Infinity);
    const setFlatArray = new Set(flatArray);

    const finalResult = getAllDoctorActive?.filter((el) =>
      Array.from(setFlatArray).includes(el.id)
    );
    return finalResult;
  };

  // const searchDoctor = doctors.filter((doctors) =>
  //   doctors.firstName.includes(search)
  // );

  console.log("getAllDoctorActive", getAllDoctorActive);
  console.log("getAllDoctor", getAllDoctor);
  console.log("selectDoctor", selectDoctor);

  return (
    <div className="min-h-[75vh] border-t border-gray-300">
      <div className="container mx-auto py-10">
        <HeardText text="ค้นหาแพทย์" />

        <div className="relative flex items-center p-8 w-1/2 mx-auto bg-[#e8eae6]
        rounded-3xl mb-6 mt-5 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">

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
            className="fa-solid p-8 fa-magnifying-glass transition duration-300
            absolute right-6 text-gray-300 text-2xl hover:text-gray-400"
          ></i>
        </div>

        <div className="grid gap-8 grid-cols-2 w-9/12 mx-auto p-6">
          {getAllDoctor
            ? getAllDoctor?.map((doctor) => (
                <ProfileForm
                  key={doctor.id}
                  doctor={doctor}
                  onClick={handleOpenModal}
                  isDoctorLoading={isDoctorLoading}
                />
              ))
            : getAllDoctorActive?.map((doctor) => (
                <ProfileForm
                  key={doctor.id}
                  doctor={doctor}
                  onClick={handleOpenModal}
                  isDoctorLoading={isDoctorLoading}
                />
              ))}
        </div>

        <ModalInfo open={isModalOpen} onClose={handleCloseModal} width={40}>
          {selectDoctor && <DoctorItem selectDoctor={selectDoctor} />}
        </ModalInfo>
      </div>
    </div>
  );
}
