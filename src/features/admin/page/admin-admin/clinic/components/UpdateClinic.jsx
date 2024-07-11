import { useRef, useState } from "react";
import InputAdmin from "../../../../component/InputAdmin";
import adminApi from "../../../../../../apis/admin";
import { toast } from "react-toastify";
import { getAccessTokenAdmin } from "../../../../../../utils/local-storage";
import validateCreateClinic from "../validate/validate-createClinic";

const initialInputError = {
  name: "",
  detail: "",
  location: "",
};

export default function UpdateClinic({
  data,
  adminFetchAllClinic,
  setSelectClinicItem,
  clickDelete
}) {
  const fileEl = useRef();
  const fileElCover = useRef();

  const [fileCover, setFileCover] = useState(null);
  const [file, setFile] = useState(null);
  const [isEdit, setIsEdit] = useState({
    name: false,
    detail: false,
    location: false,
  });
  const [input, setInput] = useState({
    id: data?.id,
    name: data?.name,
    detail: data?.detail,
    location: data?.location
  });

  const [inputError, setInputError] = useState(initialInputError);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleClickSave = async () => {
    try {
      if (getAccessTokenAdmin()) {
        const error = validateCreateClinic(input);
        // console.log('error', error)

        if (error) {
          setInputError(error);
          return
        }

        const formData = new FormData();
        {
          file ? formData.append("icon", file) : null;
        }
        {
          fileCover ? formData.append("image", fileCover) : null;
        }
        formData.append("name", input?.name);
        formData.append("detail", input?.detail);
        formData.append("location", input?.location);
        formData.append("id", input?.id);

        const res = await adminApi.updateClinic(formData);
        setIsEdit(false);
        toast.success("update success");
        adminFetchAllClinic();
        setSelectClinicItem(res.data.updateClinic);
        setFile(null);
      }
    } catch (error) {
      console.log("error handleClickSave", error);
    }
  };

  return (
    <div className="flex gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <div
          role="button"
          className="rounded-3xl overflow-hidden w-[25rem] h-60 relative"
          onClick={() => fileElCover.current.click()}
        >

          {fileCover ? (
            <div
              className="text-gray-400 text-base absolute right-4 top-2"
              onClick={(e) => {
                e.stopPropagation();
                setFileCover(null);
                fileElCover.current.value = "";
              }}
            >
              &#10005;
            </div>
          ) : null}

          <img
            className="w-full h-full object-cover"
            src={fileCover ? URL.createObjectURL(fileCover) : data?.image}
            alt={data?.name}
          />

          <input
            type="file"
            ref={fileElCover}
            className="hidden"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFileCover(e.target.files[0]);
              }
            }}
          />
        </div>

        <div>
          {!fileCover ? (
            <button
              className="text-gray-400 hover:underline"
              onClick={() => fileElCover.current.click()}
            >
              เปลี่ยนรูปภาพ
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={() => {
                  setFileCover(null);
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

        <small>ขนาดภาพที่แนะนำ 1200 x 800 px ไฟล์ .jpeg .png</small>

        <div className="flex flex-col items-center mt-6 gap-2">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-normal">icon แผนก / คลินิก</h1>
            {!file ? (
              <button
                onClick={() => {
                  setIsEdit({ ...isEdit, icon: true });
                  fileEl.current.click();
                }}
                className="text-gray-400 hover:underline"
              >
                เปลี่ยนรูป icon
              </button>
            ) : (
              <div className="space-x-2 text-sm">
                <button
                  onClick={() => {
                    setFile(null);
                    fileEl.current.value = "";
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

          <div className="flex items-center gap-4">
            <div
              role="button"
              onClick={() => fileEl.current.click()}
              className={`w-14 h-14 rounded-xl overflow-hidden relative border flex items-center justify-center`}
            >
              {file ? (
                <div
                  className="text-gray-400 text-sm absolute right-1 -top-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    fileEl.current.value = "";
                  }}
                >
                  &#10005;
                </div>
              ) : null}

              <img
                src={file ? URL.createObjectURL(file) : data?.icon}
                alt="imgSelect"
              />
            </div>

            <div className="flex flex-col">
              <small>ขนาดที่แนะนำ 60 x 60 px</small>
              <small>ไฟล์ .png, .svg</small>
            </div>

            <input
              type="file"
              ref={fileEl}
              className="hidden"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full space-y-6">

        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-normal">ชื่อแผนก / คลินิก</h1>
            {!isEdit.name ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, name: true })}
                className="text-gray-400 hover:underline text-sm"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, name: false })}
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
            {!isEdit.name ? (
              <h1 className="text-xl font-light">{data?.name}</h1>
            ) : (
              <InputAdmin
                value={input.name}
                onChange={handleChange}
                name={"name"}
                error={inputError.name}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-normal">รายละเอียด</h1>
            {!isEdit.detail ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, detail: true })}
                className="text-gray-400 hover:underline text-sm"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, detail: false })}
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
            {!isEdit.detail ? (
              <h1 className="text-base font-light">{data?.detail}</h1>
            ) : (
              <textarea
                rows={8}
                className="w-full bg-[#f3f5f1] resize-none px-4 py-2 focus:border-ms-green font-light text-lg rounded-3xl border border-ms-gold outline-none"
                name={"detail"}
                onChange={handleChange}
                value={input.detail}
              ></textarea>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-normal">สถานที่ตั้ง</h1>
            {!isEdit.location ? (
              <button
                onClick={() => setIsEdit({ ...isEdit, location: true })}
                className="text-gray-400 hover:underline text-sm"
              >
                แก้ไข
              </button>
            ) : (
              <div className="space-x-2 text-sm">
                <button
                  onClick={() => setIsEdit({ ...isEdit, location: false })}
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
            {!isEdit.location ? (
              <h1 className="text-xl font-light">{data?.location}</h1>
            ) : (
              <InputAdmin
                value={input.location}
                onChange={handleChange}
                name={"location"}
                error={inputError.location}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">อัพเดตวันที่ {new Date(data?.updatedAt).toLocaleDateString("en-GB")}</p>
          <button onClick={clickDelete} className="text-sm hover:underline">ลบแผนก / คลินิก</button>
        </div>
      </div>
    </div>
  );
}
