import { useEffect, useState } from "react";
import { DetailIcon, DropDownIcon } from "../../../icons";
import adminApi from "../../../apis/admin";
import { toast } from "react-toastify";
import ButtonAdmin from "../../../components/ButtonAdmin";

function AdminDoctorCard({
  id,
  hn,
  vn,
  firstName,
  lastName,
  gender,
  birthDate,
  weight,
  height,
  bloodPressure,
  heartRate,
  symptoms,
  doctorData,
  fetchDoctorData,
}) {
  const initialInput = {
    id: id,
    treatmentResult: "",
    diagnosis: "",
    medicine: "",
    vnType: "OPD",
  };

  const initialAppointment = {
    hn: hn,
    doctorId: doctorData.id,
    appointmentTime: "",
  };

  const [input, setInput] = useState(initialInput);
  const [open, setOpen] = useState(false);
  const [appointCheck, setAppointCheck] = useState(false);
  const [appointmentData, setAppointmentData] = useState(initialAppointment);
  const [allVn, setAllVn] = useState();

  useEffect(() => {
    const fetchAllVn = async () => {
      try {
        const result = await adminApi.getAllVnByHn(id);
        setAllVn(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllVn();
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeInputAppoint = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleClickConfirm = async () => {
    try {
      if (appointCheck == true) {
        await adminApi.createAppontmentByDoctor(appointmentData);
        toast.success("appointment created");
      }

      await adminApi.doctorUpdateVnByid(input);

      toast.success("Treatment updated");
      fetchDoctorData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col h-fit bg-[#e8eae6] rounded-3xl shadow-md ">
      <div className="w-full font-th text-ms-gray h-16 font-normal flex items-center justify-between px-6 rounded-3xl border-[1px] text-lg">
        <h1>
          no. <span className="text-ms-green"> {id} </span>
        </h1>
        <h1>
          <span className="text-ms-green"> {hn} </span>
        </h1>
        <h1>
          <span className="text-ms-green"> {vn} </span>
        </h1>
        <h1>
          คุณ: &#32;
          <span className="text-ms-green">
            {firstName} {lastName}
          </span>
        </h1>
        <h1>
          เพศ: <span className="text-ms-green"> {gender} </span>
        </h1>
        <h1>
          อายุ:
          <span className="text-ms-green m-2">
            {new Date().getUTCFullYear() - birthDate?.split("-")[0] || "-"}
          </span>
          ปี
        </h1>
        <button onClick={handleClick}>
          <DetailIcon className="h-8" />
        </button>
      </div>

      <div
        className={`px-8 overflow-hidden transition-opacity font-normal opacity-0 ease-in duration-500 ${
          open ? "block opacity-100" : "hidden h-fit"
        } animatedbox `}
      >
        <div className="h-[1px] bg-ms-gold mb-4 px-4 "></div>

        <div className="flex gap-10 text-ms-gray">
          <div className="w-7/12 space-y-4">
            <div className="">
              <h1>การตรวจ</h1>
              <textarea
                value={input.treatmentResult}
                name="treatmentResult"
                onChange={handleChangeInput}
                className="resize-none min-h-32 w-full max-h-32 rounded-3xl mt-2 p-4
                border border-ms-gold outline-none text-lg text-ms-gray focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]"
              />
            </div>

            <div className="">
              <h1>สรุปอาการ</h1>
              <textarea
                value={input.diagnosis}
                name="diagnosis"
                onChange={handleChangeInput}
                className="resize-none w-full min-h-32 max-h-32 rounded-3xl mt-2 p-4
                border border-ms-gold text-lg text-ms-gray outline-none focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]"
              />
            </div>

            <div className="">
              <h1>จ่ายยา</h1>
              <textarea
                value={input.medicine}
                name="medicine"
                onChange={handleChangeInput}
                className="resize-none w-full min-h-32 max-h-32 rounded-3xl mt-2 p-4
                border border-ms-gold outline-ms-green text-lg text-ms-gray focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] "
              />
            </div>

            <div className="text-ms-gray-6 ">
              <h1 className="mb-2 text-2xl text-ms-green font-normal">
                ประวัติการรักษา
              </h1>
              { allVn?.length === 0 ? (
               <div className="p-4 w-full bg-[#f3f5f2] rounded-2xl text-center">
               <h1 className="text-gray-400">ยังไม่มีประวัติการรักษา</h1>
               </div>
              ) : (
               <>
               {allVn?.map((result) => (
                  <div
                    key={result?.id}
                    className="flex justify-start items-center gap-4 font-th p-4"
                  >
                    <h1> {result?.id} </h1>
                    <h1> {result?.hn} </h1>
                    <h1> {result?.vn} </h1>
                    <h1>{result?.symptoms}</h1>
                    <h1>{result?.createdAt.split("T")[0]} </h1>
                  </div>
                ))}</>
              )}
              
            </div>
          </div>

          <div className="flex flex-col gap-6 w-1/3 mt-7">
            <div className="flex flex-col text-ms-gray font-th">
              <div className="flex gap-4">
                <h1>
                  น้ำหนัก:
                  <span className="mx-2 text-lg text-ms-green">{weight}</span>
                  kg.
                </h1>
                <h1>
                  ส่วนสูง:
                  <span className="mx-2 text-lg text-ms-green">{height}</span>
                  cm.
                </h1>
              </div>

              <div className="flex gap-4">
                <h1>
                  ความดัน:
                  <span className="mx-2 text-lg text-ms-green">
                    {bloodPressure}
                  </span>
                </h1>
                <h1>
                  ชีพจร:
                  <span className="mx-2 text-lg text-ms-green">
                    {heartRate}
                  </span>
                  BPM.
                </h1>
              </div>
            </div>

            <div className="text-ms-gray space-y-2">
              <h1>อาการเบื้องต้น</h1>
              <p className="font-normal text-base text-ms-green p-4 bg-[#f3f5f2] rounded-2xl">
                {symptoms}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onChange={() => setAppointCheck(!appointCheck)}
                  className="w-5 h-5 bg-[#f3f5f2] border border-ms-gold outline-none "
                />

                <h1>นัดครั้งต่อไป</h1>
              </div>
              <input
                type="date"
                name="appointmentTime"
                id="appointmentTime"
                onChange={handleChangeInputAppoint}
                className="w-full h-[50px] outline-ms-green rounded-full border px-4 border-ms-gold bg-[#f3f5f2]"
              />
            </div>

            <div>
              <h1>OPD / ADMIT</h1>
              <div className="flex items-center relative">
                <select
                  id="vnType"
                  value={input.vnType}
                  name="vnType"
                  onChange={handleChangeInput}
                  className="w-full px-4 h-[50px] outline-ms-green rounded-3xl border p-2 border-ms-gold appearance-none bg-[#f3f5f2]"
                >
                  <option value="OPD">OPD</option>
                  <option value="ADMIT">ADMIT</option>
                </select>
                <DropDownIcon className="absolute right-4 h-6 w-6 text-ms-gold rotate-90 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-12 w-5/12 mx-auto mb-4">
          <ButtonAdmin
            onClick={handleClickConfirm}
            btn = "active"
          >
            ยืนยัน
          </ButtonAdmin>
          <ButtonAdmin
            onClick={() => {
              setInput(initialInput);
            }}
            btn = "success"
          >
            แก้ไข
          </ButtonAdmin>
        </div>
      </div>
    </div>
  );
}

export default AdminDoctorCard;
