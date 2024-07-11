import { useRef, useState } from "react";
import { getAccessTokenAdmin } from "../../../../../../utils/local-storage";
import { toast } from "react-toastify";
import InputAdmin from "../../../../component/InputAdmin";
import adminApi from "../../../../../../apis/admin";
import { DropDownIcon } from "../../../../../../icons";
import validateCreateDoctor from "../validate-createDoctor.js/validate-createDoctor";

const initialInputError = {
  firstName: "",
  lastName: "",
  education: "",
  clinicId: "",
};

export default function UpdateDoctor({
  setSelectDoctorItem,
  data,
  adminFetchAllDoctor,
  clickDelete,
  getAllClinic,
  handleReStatusDoctor,
}) {
  const fileElCover = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    id: data?.id,
    firstName: data?.firstName,
    lastName: data?.lastName,
    education: data?.education,
    clinicId: data?.clinicId,
    birthDate: data?.birthDate,
  });
  const [inputError, setInputError] = useState(initialInputError);
  const [isEdit, setIsEdit] = useState({
    firstName: false,
    lastName: false,
    education: false,
    clinicId: false,
    birthDate: false,
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleClickSave = async () => {
    try {
      if (getAccessTokenAdmin()) {

        const error = validateCreateDoctor(input);
console.log('error', error)
        if (error) {
          setInputError(error);
          return
        }
        const formData = new FormData();
        {
          file && formdata?.append("image", file);
        }
        formdata?.append("firstName", input?.firstName);
        formdata?.append("lastName", input?.lastName);
        formdata?.append("education", input?.education);
        formdata?.append("id", input?.id);
        formdata?.append("clinicId", input?.clinicId);
        {
          input?.birthDate && formdata?.append("birthDate", input?.birthDate);
        }

        const res = await adminApi.updateDoctor(formData);
        setIsEdit(false);
        toast.success("update success");
        adminFetchAllDoctor();
        setSelectDoctorItem(res.data?.updateDoctor);
        setFile(null);
      }
    } catch (error) {
      console.log("error handleClickSave", error);
    }
  };

  return (
    <div className="flex py-8 px-10 space-x-4 justify-center">
      <div className="flex items-center flex-col gap-2">
        <div
          onClick={() => fileElCover.current.click()}
          role="button"
          className="w-40 h-40 rounded-full overflow-hidden bg-gray-200"
        >
          <img
            className="object-cover w-full h-full"
            src={file ? URL.createObjectURL(file) : data?.image}
            alt="image doctor"
          />
          <input
            type="file"
            ref={fileElCover}
            className="hidden"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div>
          {!file ? (
            <button
              className="text-gray-400 hover:underline"
              onClick={() => fileElCover.current.click()}
            >
              เปลี่ยนรูปภาพ
            </button>
          ) : (
            <div className="space-x-3">
              <button
                onClick={() => {
                  setFile(null);
                  fileElCover.current.value = "";
                }}
                className="text-red-400 hover:underline"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleClickSave}
                className="text-ms-green hover:underline"
              >
                บันทึก
              </button>
            </div>
          )}
        </div>
        <small className="text-center">
          ขนาดภาพที่แนะนำ 800 x 800 px ไฟล์ .jpeg .png
        </small>
      </div>

      <div className="w-full space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex-1 space-y-1">
            <div className="space-x-4">
              <label>ชื่อหมอ</label>
              {!isEdit.firstName ? (
                <button
                  onClick={() => setIsEdit({ ...isEdit, firstName: true })}
                  className="text-gray-400 text-sm hover:underline"
                >
                  แก้ไข
                </button>
              ) : (
                <div className="space-x-2 inline-block text-sm">
                  <button
                    onClick={() => setIsEdit({ ...isEdit, firstName: false })}
                    className="text-red-400 hover:underline"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={handleClickSave}
                    className="text-ms-green hover:underline"
                  >
                    บันทึก
                  </button>
                </div>
              )}
            </div>

            <div>
              {!isEdit.firstName ? (
                <h1 className="text-xl font-light">{data?.firstName}</h1>
              ) : (
                <InputAdmin
                  value={input.firstName}
                  onChange={handleChange}
                  name={"firstName"}
                  error={inputError.firstName}
                />
              )}
            </div>
          </div>

          <div className="flex-1 space-y-1">
            <div className="space-x-4">
              <label>นามสกุล</label>
              {!isEdit.lastName ? (
                <button
                  onClick={() => setIsEdit({ ...isEdit, lastName: true })}
                  className="text-gray-400 text-sm hover:underline"
                >
                  แก้ไข
                </button>
              ) : (
                <div className="space-x-2 inline-block text-sm">
                  <button
                    onClick={() => setIsEdit({ ...isEdit, lastName: false })}
                    className="text-red-400 hover:underline"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={handleClickSave}
                    className="text-ms-green hover:underline"
                  >
                    บันทึก
                  </button>
                </div>
              )}
            </div>

            <div>
              {!isEdit.lastName ? (
                <h1 className="text-xl font-light">{data?.lastName}</h1>
              ) : (
                <InputAdmin
                  value={input.lastName}
                  onChange={handleChange}
                  name={"lastName"}
                  error={inputError.lastName}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-1">
          <div className="space-x-4">
            <label>วัน/เดือน/ปีเกิด</label>
            {!isEdit.birthDate ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, birthDate: true })}
                className="text-gray-400 text-sm hover:underline"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 inline-block text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, birthDate: false })}
                  className="text-red-400 hover:underline"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleClickSave}
                  className="text-ms-green hover:underline"
                >
                  บันทึก
                </button>
              </div>
            )}
          </div>

          <div className="w-fit">
            {!isEdit.birthDate ? (
              <h1 className="text-xl font-th font-light">
                {new Date(input?.birthDate).toLocaleDateString("en-GB")}
              </h1>
            ) : (
              <input
                className="overflow-hidden rounded-full border border-ms-gold py-2 px-4 bg-[#f3f5f1] outline-none"
                defaultValue={input?.birthDate}
                onChange={handleChange}
                name={"birthDate"}
                type="date"
              />
            )}
          </div>
        </div>

        <div className="flex-1 space-y-1">
          <div className="space-x-4">
            <label>แผนก/คลินิก</label>
            {!isEdit.clinicId ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, clinicId: true })}
                className="text-gray-400 text-sm hover:underline"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 inline-block text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, clinicId: false })}
                  className="text-red-400 hover:underline"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleClickSave}
                  className="text-ms-green hover:underline"
                >
                  บันทึก
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            {!isEdit.clinicId ? (
              <h1 className="text-xl font-light">{data?.clinic?.name}</h1>
            ) : (
              <>
                <select
                  name="clinicId"
                  className="py-2 px-4 bg-[#f3f5f1] border border-ms-gold appearance-none outline-none rounded-full w-full text-base"
                  onChange={handleChange}
                  defaultValue={data?.clinic.name}
                >
                  <option name="clinicId text-sm" value="">
                    please select
                  </option>
                  {getAllClinic?.map((el) => (
                    <option name="clinicId text-sm" key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                  <DropDownIcon className="h-5 w-5 text-ms-gold rotate-90 pointer-events-none" />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-1">
          <div className="space-x-4">
            <label>ปริญญาบัตรและสถาบันการศึกษา</label>
            {!isEdit.education ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, education: true })}
                className="text-gray-400 hover:underline text-sm"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 inline-block text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, education: false })}
                  className="text-red-400 hover:underline"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleClickSave}
                  className="text-ms-green hover:underline"
                >
                  บันทึก
                </button>
              </div>
            )}
          </div>

          <div className="w-full">
            {!isEdit.education ? (
              <h1 className="text-xl font-light">{data?.education}</h1>
            ) : (
              <textarea
                rows={3}
                className="overflow-hidden resize-none focus:border-ms-green rounded-3xl border border-ms-gold w-full bg px-4 py-2 outline-none bg-[#f3f5f1]"
                value={input.education}
                onChange={handleChange}
                name={"education"}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">
            อัพเดตวันที่ {new Date(data?.updatedAt).toLocaleDateString("en-GB")}
          </p>
          {!data?.isDeleted ? (
            <button onClick={clickDelete} className="text-sm hover:underline">
              ลบหมอ
            </button>
          ) : (
            <button
              onClick={handleReStatusDoctor}
              className="text-sm hover:underline"
            >
              เพิ่มหมอกลับ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
