import { useState } from "react";
import { DetailIcon, DropDownIcon } from "../../../icons";
import { toast } from "react-toastify";
import adminApi from "../../../apis/admin";
import ButtonAdmin from "../../../components/ButtonAdmin";
import validateNurse from "../validate/validateNurseCard";
import Input from "../../../components/Input";

function AdminNurseCard({
  id,
  vn,
  hn,
  firstName,
  lastName,
  gender,
  birthDate,
  doctorData,
  symptoms,
  fetchNurseData,
}) {
  const initialInput = {
   id: "",
    weight: "",
    height: "",
    heartRate: "",
    bloodPressure: "",
    temperature: "",
    doctorId: "",
    symptoms: symptoms || "",
  };

  const initialErrorInput = {
   weight: "",
   height: "",
   heartRate: "",
   bloodPressure: "",
   temperature: "",
   doctorId: "",
   symptoms: "",
 };

  const [input, setInput] = useState({ ...initialInput, id });
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState(initialErrorInput);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputError({ ...inputError, [e.target.name]: "" });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
console.log('input', input)
      const errors = validateNurse(input)

      if (errors) {
         return setInputError(errors)
      }

      await adminApi.updateVnById(input);
      toast.success("VN updated");

      fetchNurseData();
    } catch (err) {
      console.log(err);
    }
  };

  console.log('inputError', inputError)

  return (
    <div className="flex flex-col bg-[#e8eae6] rounded-3xl shadow-md ">
      <div className="w-full font-th font-normal text-ms-gray h-16 flex items-center justify-between px-6 rounded-3xl border-[1px] ">
        <h1 className="w-2/4">
          no. <span className=" text-ms-green"> {id} </span>
        </h1>
        <h1 className="w-2/4">
          <span className=" text-ms-green"> {hn} </span>
        </h1>
        <h1 className="w-2/4">
          <span className=" text-ms-green"> {vn} </span>
        </h1>
        <h1 className="w-full">
          คุณ:&#32;
          <span className=" text-ms-green">
            {firstName} {lastName}
          </span>
        </h1>
        <h1 className="w-2/4">
          เพศ: &#32; <span className=" text-ms-green"> {gender} </span>
        </h1>
        <h1 className="w-2/4">
          อายุ: &#32;
          <span className=" text-ms-green">
            {new Date().getUTCFullYear() -
              new Date(birthDate).getUTCFullYear() || "-"}
          </span>
          &#32;ปี
        </h1>
        <button onClick={handleClick}>
          <DetailIcon className="h-8" />
        </button>
      </div>

      <div
        className={`px-8 overflow-hidden transition-opacity opacity-0 ease-in duration-2000 ${
          open ? "block opacity-100 space-y-5" : "hidden "
        } animatedbox `}
      >
        <div className="h-[1px] bg-ms-gold px-4"></div>

        <div className="flex gap-6 w-full justify-between text-ms-gray">
          <div>
            <h1 className="relative inline-block">น้ำหนัก<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <Input
              value={input.weight}
              name="weight"
              onChange={handleChangeInput}
              error={inputError.weight}
              type="number"
            />
          </div>

          <div>
            <h1 className="relative inline-block">ส่วนสูง<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <Input
              value={input.height}
              name="height"
              onChange={handleChangeInput}
              error={inputError.height}
              type="number"
            />
          </div>

          <div>
            <h1 className="relative inline-block">ความดัน<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <Input
              value={input.bloodPressure}
              name="bloodPressure"
              onChange={handleChangeInput}
              error={inputError.bloodPressure}
            />
          </div>

          <div>
            <h1 className="relative inline-block">ชีพจร<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <Input
              value={input.heartRate}
              name="heartRate"
              onChange={handleChangeInput}
              error={inputError.heartRate}
              type="number"
            />
          </div>

          <div>
            <h1 className="relative inline-block">อุณหภูมิ<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <Input
              value={input.temperature}
              name="temperature"
              onChange={handleChangeInput}
              error={inputError.temperature}
              type="number"
            />
          </div>
        </div>

        <div className="flex text-ms-gray w-full">
          <div className="w-full flex flex-col items-start">
            <h1 className="relative inline-block">อาการเบื้องต้น<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
            <textarea
              value={input.symptoms}
              name="symptoms"
              onChange={handleChangeInput}
              className="resize-none bg-[#f3f5f2] w-full min-h-32 max-h-32 rounded-3xl mt-2 p-4 border border-ms-gold outline-none text-lg text-ms-green"
            />
            {inputError.symptoms && (
              <small className="text-red-500 text-start block">
                {inputError.symptoms}
              </small>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-start">
          <h1 className="relative">ลงชื่อแพทย์<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-1 -right-2"></i></h1>
          <div className="relative flex items-center">
            <select
              name="doctorId"
              id="doctorId"
              onChange={handleChangeInput}
              className="w-[300px] text-center pr-4 py-2 bg-[#f3f5f2] outline-none rounded-full border border-ms-gold text-ms-green appearance-none"
            >
              <option  defaultValue> --- ลงชื่อแพทย์ --- </option>
              {doctorData?.map((result) => (
                <option
                  key={result?.id}
                  value={result?.id}
                  className=" text-ms-green"
                >
                  {result?.firstName} {result?.lastName}
                </option>
              ))}
            </select>
            <DropDownIcon className="absolute right-4 h-6 w-6 text-ms-gold rotate-90 pointer-events-none" />

            
          </div>
          {inputError.doctorId && (
              <small className="text-red-500 text-start block">
                {inputError.doctorId}
              </small>
            )}
        </div>

        <div className="flex items-center justify-center w-full p-8 gap-4">
          <ButtonAdmin onClick={handleSubmitForm} btn="active" width="w-1/5">
            ยืนยัน
          </ButtonAdmin>
          <ButtonAdmin
            onClick={() => {
              setInput(initialInput);
            }}
            btn="success"
            width="w-1/5"
          >
            แก้ไข
          </ButtonAdmin>
        </div>
      </div>
    </div>
  );
}

export default AdminNurseCard;
