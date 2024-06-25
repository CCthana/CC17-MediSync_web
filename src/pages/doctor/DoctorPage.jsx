
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import ProfileForm from "./component/ProfileForm";
// import userApi from "../../api/doctor";

const doctors = [
{
  id: 1,
  firstName: "พรชนก",
  lastName: "ถีระวงษ์",
  education: "อายุรกรรม",
  image:
    "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%9E%E0%B8%A3%E0%B8%8A%E0%B8%99%E0%B8%81.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
},
{
  id: 2,
  firstName: "ธวัชไชย",
  lastName: "พรหมส่ง",
  education: "ฟฟฟฟฟฟฟฟฟ",
  image:
    "https://e86myswzu45.exactdn.com/wp-content/uploads/%E0%B8%99%E0%B8%9E%E0%B8%93%E0%B8%B1%E0%B8%90.jpg?strip=all&lossy=1&quality=92&webp=92&ssl=1",
},
];

export default function ProfilePage() {
const [selectedDoctor, setSelectedDoctor] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [search, setSearch] = useState("");
// const [doctors, setDoctors] = useState([]);

useEffect(() => {
  const fetchDoctor = async () => {
    try {
      // const res = await userApi.getDoctor();
      // setDoctors(res);
      // console.log("xxxxxxxxxxxxxxxxx", res);
    } catch (error) {
      console.log(error);
    }
  };
  fetchDoctor();
}, []);

const handleDoctorClick = (doctor) => {
  setSelectedDoctor(doctor);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedDoctor(null);
};

const filter = (search) => {
  const filterList = []
  const filterFirstName = doctors.filter((doctors) =>
    doctors.firstName.includes(search)).map(el=>el.id)
  filterList.push(filterFirstName)
  
  const filterLastName = doctors.filter((doctors) =>
    doctors.lastName.includes(search)).map(el=>el.id)
  filterList.push(filterLastName)

  const filterDepartment = doctors.filter((doctors) =>
    doctors.education.includes(search)).map(el=>el.id)
  filterList.push(filterDepartment)


  const flatArray = filterList.flat(Infinity)
  const setFlatArray = new Set(flatArray)

  const finalResult = doctors.filter(el => Array.from(setFlatArray).includes(el.id))
  return finalResult
}

filter(search)
console.log('filter(search)', filter(search))


const searchDoctor = doctors.filter((doctors) =>
  doctors.firstName.includes(search)
);

return (
  <div className="h-[80vh]">
    <div className="container mx-auto py-10">
      <h1 className="text-2xl text-ms-gray text-center mb-6">ค้นหาแพทย์</h1>

      <div className="flex justify-center mb-6 gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => {setSearch(e.target.value)
            setSelectedDoctor(filter(e.target.value))
          }}
          placeholder="ค้นหาจากชื่อ"
          className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-1/2"
        />
        <button className="text-[#767676] border border-[#AE8F4E] rounded-3xl px-4 py-2">
          ค้นหา
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {selectedDoctor.map((doctor) => (
          <ProfileForm
            key={doctor.id}
            doctor={doctor}
            onClick={handleDoctorClick}
          />
        ))}
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal} width={60}>
        {selectedDoctor && (
          <div className="py-8 flex justify-start items-center gap-8 px-20">
            <div className="bg-gray-300 rounded-full h-32 w-32 overflow-hidden mt-4 ">
              <img
                src={selectedDoctor.image}
                // alt={`${selectedDoctor.doctor_firstname} ${selectedDoctor.doctor_lastname}`}
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h2 className="text-xl font-medium text-[#767676]">
                ชื่อ {selectedDoctor.firstName} {selectedDoctor.lastName}
              </h2>
              <p className="text-gray-500">
                แผนก: {selectedDoctor.education}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  </div>
);
}