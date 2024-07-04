import { useRef, useState } from "react";
import { getAccessTokenAdmin } from "../../../../../../utils/local-storage";
import { toast } from "react-toastify";
import InputAdmin from "../../../../component/InputAdmin";
import adminApi from "../../../../../../apis/admin";
import imgPlus from "../../../../../../assets/icons/plus-solid.svg";
import Button from "../../../../../../components/Button";
import validateCreateDoctor from "../validate-createDoctor.js/validate-createDoctor";

const initialInputError = {
  firstName: "",
  lastName: "",
  education: "",
  clinicId: "",
  birthDate: "",
  image: ''
};

export default function AddDoctor({
  setSelectDoctorItem,
  data,
  adminFetchAllDoctor,
  getAllClinic,
  onClose,
}) {
  const fileElCover = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    education: "",
    clinicId: "",
    birthDate: "",
  });
  const [inputError, setInputError] = useState(initialInputError);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      if (getAccessTokenAdmin()) {
        const error = validateCreateDoctor(input);

        if (error || !file) {
          console.log('error', error)
          setInputError(error);
          if (!file) {
            return setInputError((prev) => ({...prev, image: "image is required."}))
          }
          return
        }

        const formData = new FormData();
        {
          file && formData.append("image", file);
        }
        formData.append("firstName", input?.firstName);
        formData.append("lastName", input?.lastName);
        formData.append("education", input?.education);
        formData.append("clinicId", input?.clinicId);
        {
          input?.birthDate && formData.append("birthDate", input?.birthDate);
        }

        const res = await adminApi.createDoctor(formData);
        toast.success("create success");
        adminFetchAllDoctor();
        onClose()
        setSelectDoctorItem(res.data.createDoctor);
        setFile(null);
      }
    } catch (error) {
      console.log("error handleClickSave", error);
    }
  };

  console.log("input", input);
  console.log("file", file);
  console.log("data", data);

  return (
    <form onSubmit={handleClickSave}>
      <div className="flex p-8 space-x-4 justify-center">
        <div className="flex items-center flex-col gap-2">
          <div
            onClick={() => fileElCover.current.click()}
            role="button"
            className="w-40 h-40 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              className={`w-full h-full ${file ? "object-cover" : "p-14"}`}
              src={file ? URL.createObjectURL(file) : imgPlus}
              alt="image doctor"
            />
            <input
              type="file"
              ref={fileElCover}
              className="hidden"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                  setInputError((prev) => ({...prev, image: ""}))
                }
              }}
            />
          </div>
          <div>
            <button
              className="text-gray-400 hover:underline relative"
              onClick={() => fileElCover.current.click()}
            >
              เลือกรูปภาพ <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
            </button>
            
          </div>
          <small className="text-center">
            ขนาดภาพที่แนะนำ 800 x 800 px ไฟล์ .jpeg .png
          </small>

          {inputError.image && <small className="text-red-500">{inputError.image}</small>}
        </div>

        <div className="w-full p-4 space-y-5">
          <div className="flex gap-6">
            <div className="flex-1 space-y-1">
              <div className="space-x-2">
                <label className="relative">ชื่อหมอ <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
                
              </div>

              <div>
                <InputAdmin
                  value={input.firstName}
                  onChange={handleChange}
                  name={"firstName"}
                  error={inputError.firstName}
                />
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <div className="space-x-2">
                <label className="relative">นามสกุล<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
              </div>

              <div>
                <InputAdmin
                  value={input.lastName}
                  onChange={handleChange}
                  name={"lastName"}
                  error={inputError.lastName}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1 space-y-1">
              <div className="space-x-2">
                <label className="relative">วัน/เดือน/ปีเกิด<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
              </div>

              <div className="w-fit">
                <input
                  className="overflow-hidden py-1 px-3 rounded-full border border-ms-gold"
                  defaultValue={input?.birthDate}
                  onChange={handleChange}
                  name={"birthDate"}
                  type="date"
                />
                {inputError.birthDate ? (
                <small className="text-red-500">{inputError.birthDate}</small>
              ) : null}
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <div className="space-x-2">
                <label className="relative">แผนก/คลินิก <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
              </div>

              <div className="w-fit">
                <select name="clinicId" className="border border-ms-gold outline-none" onChange={handleChange}>
                  <option name="clinicId" value="">
                    please select
                  </option>
                  {getAllClinic?.map((el) => (
                    <option name="clinicId" key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {inputError.clinicId ? (
                <small className="text-red-500">{inputError.clinicId}</small>
              ) : null}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-1">
            <div className="space-x-2">
              <label className="relative">ประสบการณ์  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            </div>

            <div className="w-full">
              <textarea
                rows={3}
                className="overflow-hidden focus:border-ms-green rounded-3xl border border-ms-gold w-full bg px-4 py-2 outline-none bg-[#f3f5f1]"
                value={input.education}
                onChange={handleChange}
                name={"education"}
              />
              {inputError.education ? (
                <small className="text-red-500">{inputError.education}</small>
              ) : null}
            </div>
          </div>

          <div className="space-x-4">
            <Button btn="active" width="w-[10rem]">
              บันทึก
            </Button>
            <Button onClick={onClose} btn="success" width="w-[10rem]">
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
