import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import AdminSearchHn from "../component/AdminSearchHn";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import useClinic from "../../../hooks/useClinic";
import { useLocation } from "react-router-dom";
import HeaderTextAdmin from "../component/HeaderTextAdmin";
import { DropDownIcon } from "../../../icons";
import ButtonAdmin from "../../../components/ButtonAdmin";
import logo2 from "../../../assets/logos/MediSync-2.svg";

const initialInput = {
  hn: "",
  symptoms: "",
  clinicId: "",
};
function VnCreateAdmin() {
  const [input, setInput] = useState(initialInput);
  const [open, setOpen] = useState(false);
  const [selectedHn, setSelectedHn] = useState();
  const { getAllClinic } = useClinic();

  // from appointment page
  const [searchAppoint, setSearchAppoint] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { hn, searchAppoint } = location.state;
      setInput((prevState) => ({
        ...prevState,
        hn: hn,
      }));
      setSearchAppoint(searchAppoint);
      setSelectedHn({
        hn: searchAppoint[0].hn,
        firstName: searchAppoint[0].user.firstName,
        lastName: searchAppoint[0].user.lastName,
        gender: searchAppoint[0].user.gender,
        nationality: searchAppoint[0].user.nationality,
        birthDate: searchAppoint[0].user.birthDate,
      });
    }
  }, [location.state]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      await adminApi.createVn(input);

      toast.success("VN created");
      setInput(initialInput);
      setSelectedHn(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectedHn = (hn) => {
    setSelectedHn(hn);
    setInput({ ...input, hn: hn.hn });
  };

  return (
   <>
      <div className="flex items-center flex-col justify-center text-center text-ms-gray">
        <div className="flex items-center justify-between px-8 w-full">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border font-normal text-lg border-ms-gold py-4 px-8 text-center text-ms-gray hover:border-ms-green hover:bg-[#e8eae6] hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] font-th"
          >
            <i
              role="button"
              className="fa-solid mr-2 fa-magnifying-glass transition duration-300
            right-6 text-ms-gray text-lg"
            ></i>
            ค้นหาเลข HN
          </button>
          <HeaderTextAdmin>Create Visitor Number</HeaderTextAdmin>
          <button className="invisible py-4 px-8 rounded-full border font-normal text-lg border-ms-gold p-4 text-center text-ms-gray hover:bg-[#89713e] hover:text-white font-th">
            <i
              role="button"
              className="fa-solid fa-magnifying-glass transition duration-300
            right-6 text-ms-gray text-lg"
            ></i>
            &#32;ค้นหาเลข HN
          </button>
        </div>

        {selectedHn?.hn || searchAppoint?.hn ? (
          <div className="flex flex-col p-8 gap-6 my-8">
            <div className="flex bg-[#e8eae6] rounded-3xl py-6 px-12 items-center justify-center gap-10 text-xl font-normal text-ms-gray font-th">
              <h1 className="text-ms-gray">
                เลข HN :
                <span className="mx-2 text-ms-green">
                  {selectedHn?.hn || searchAppoint?.hn}
                </span>
              </h1>
              <h1>
                ชื่อ :
                <span className="mx-2 text-ms-green">
                  {selectedHn?.firstName} {selectedHn?.lastName}
                </span>
              </h1>
              <h1>
                เพศ :
                <span className="mx-2 text-ms-green">{selectedHn?.gender}</span>
              </h1>
              <h1 className="font-th">
                อายุ :
                <span className="mx-2 text-ms-green">
                  {selectedHn?.birthDate
                    ? new Date().getUTCFullYear() -
                      new Date(selectedHn?.birthDate).getUTCFullYear()
                    : ""}
                </span>
                ปี
              </h1>
              <h1>
                สัญชาติ :
                <span className="mx-2 text-ms-green">
                  {selectedHn?.nationality}
                </span>
              </h1>
            </div>

            <div className="w-full space-y-2">
              <h1 className="text-ms-gray text-start text-xl">
                {" "}
                อาการเบื้องต้น{" "}
              </h1>
              <textarea
                value={input.symptoms}
                name="symptoms"
                onChange={handleChangeInput}
                className="max-h-[180px] resize-none min-h-[200px] w-full bg-[#f3f5f2]
                border border-ms-gold rounded-3xl p-4 outline-ms-green text-lg text-ms-gray"
              />
            </div>

            <div className="w-full space-y-2">
              <h1 className="text-ms-gray text-start text-xl">แผนก /คลินิก</h1>

              <div className="relative flex items-center w-fit">
                <select
                  name="clinicId"
                  id="clinicId"
                  className="py-4 outline-none text-lg font-light bg-[#f3f5f2] rounded-full border appearance-none pl-6 pr-12 border-ms-gold text-ms-gray"
                  onChange={handleChangeInput}
                  value={input.clinicId}
                >
                  <option defaultValue>เลือกแผนก/คลินิก</option>

                  {getAllClinic?.map((result) => (
                    <option key={result?.id} value={result?.id}>
                      {result?.name}
                    </option>
                  ))}
                </select>
                <DropDownIcon className="absolute w-7 right-5 rotate-90 text-ms-gold pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mt-20">
              <ButtonAdmin btn="active" width="w-[15rem]" onClick={handleSubmitForm}>
                สร้าง VN
              </ButtonAdmin>
              <ButtonAdmin
                btn="success"
                 width="w-[15rem]"
                onClick={() => {
                  setInput(initialInput);
                }}
              >
                ยกเลิก
              </ButtonAdmin>
            </div>
          </div>
        ) : (
         <div className="w-[40rem] p-[10rem] opacity-10">
          <img className="w-full h-full" src={logo2} alt="logo MediSync" />
        </div>
        )}
      </div>

      <Modal
        title={"HN Search"}
        width={70}
        open={open}
        onClose={() => setOpen(false)}
      >
        <AdminSearchHn
          handleSelectedHn={handleSelectedHn}
          onClose={() => setOpen(false)}
        />
      </Modal>
      </>
  );
}

export default VnCreateAdmin;
