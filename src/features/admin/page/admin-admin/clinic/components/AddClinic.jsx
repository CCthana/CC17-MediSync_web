import { useRef, useState } from "react";
import InputAdmin from "../../../../component/InputAdmin";
import adminApi from "../../../../../../apis/admin";
import { toast } from "react-toastify";
import { getAccessTokenAdmin } from "../../../../../../utils/local-storage";
import Button from "../../../../../../components/Button";
import imgPlus from "../../../../../../assets/icons/plus-solid.svg";
import Spinner from "../../../../../../components/Spinner";
import validateCreateClinic from "../validate/validate-createClinic";

const initialInputError = {
  name: "",
  detail: "",
  location: "",
  fileCover: '',
  file: ''
};

export default function AddClinic({ adminFetchAllClinic, onClose }) {
  const fileEl = useRef();
  const fileElCover = useRef();

  const [fileCover, setFileCover] = useState(null);
  const [file, setFile] = useState(null);
  const [isClinicLoading, setIsClinicLoading] = useState(false);

  const [input, setInput] = useState({
    name: "",
    detail: "",
    location: "",
    fileCover: "",
    file: ""
  });

  const [inputError, setInputError] = useState(initialInputError);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (getAccessTokenAdmin()) {
        const error = validateCreateClinic(input);
        // console.log('error', error)

        if (error || !fileCover || !file) {
          setInputError(error);
          if (!fileCover) {
            setInputError((prev) => ({...prev, fileCover: "image cover is required."}))
          }
          if (!file) {
            return setInputError((prev) => ({...prev, file: "icon is required."}))
          }
          return
        }

        const formData = new FormData();
        {
          file ? formdata?.append("icon", file) : null;
        }
        {
          fileCover ? formdata?.append("image", fileCover) : null;
        }
        formdata?.append("name", input?.name);
        formdata?.append("detail", input?.detail);
        formdata?.append("location", input?.location);

        setIsClinicLoading(true);
        await adminApi.createClinic(formData);
        adminFetchAllClinic();
        toast.success("create success");
        setFile(null);
        onClose();
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsClinicLoading(false);
    }
  };

  return (
    <>
    {isClinicLoading &&  <Spinner /> }
    <form onSubmit={handleSubmitForm} className="p-4">
      <div className="flex gap-6 h-[40rem] ">

            <div className="flex flex-col items-center gap-2">
              <div
                role="button"
                className="rounded-3xl overflow-hidden w-[25rem] h-60 relative bg-gray-200 flex items-center justify-center"
                onClick={() => fileElCover.current.click()}
              >
                {fileCover ? (
                  <div
                    role="button"
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
                  className={`w-full h-full ${
                    fileCover ? "object-cover" : "p-20"
                  }`}
                  src={fileCover ? URL.createObjectURL(fileCover) : imgPlus}
                  alt="cover Clinic"
                />

                <input
                  type="file"
                  ref={fileElCover}
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setFileCover(e.target.files[0])
                      setInputError((prev) => ({...prev, fileCover: ""}) );
                    }
                  }}
                />
              </div>
              <button
                className="text-gray-400 hover:underline relative"
                onClick={() => fileElCover.current.click()}
              >
                เลือกรูปภาพ <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
              </button>

              <small>ขนาดภาพที่แนะนำ 1200 x 800 px ไฟล์ .jpeg .png</small>
              {inputError.fileCover ? <small className="text-red-500">{inputError.fileCover}</small> : null}

              <div className="flex flex-col items-center mt-6 gap-2">
                <div className="flex gap-3 items-center">
                  <h1 className="text-lg font-normal relative">icon แผนก / คลินิก <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></h1>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    role="button"
                    onClick={() => fileEl.current.click()}
                    className={`w-14 h-14 bg-gray-200 rounded-xl overflow-hidden relative border flex items-center justify-center`}
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
                      className={`${file ? "" : "p-4"}`}
                      src={file ? URL.createObjectURL(file) : imgPlus}
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
                        setInputError((prev) => ({...prev, file: ""}) );
                      }
                    }}
                  />
                </div>
                {inputError.file ? <small className="text-red-500">{inputError.file}</small> : null}
              </div>
            </div>
            <div className="w-full space-y-6">
              <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center">
                  <h1 className="text-lg font-normal relative">ชื่อแผนก / คลินิก <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></h1>
                </div>

                <div>
                  <InputAdmin
                    value={input.name}
                    onChange={handleChange}
                    name={"name"}
                    error={inputError.name}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center">
                  <h1 className="text-lg font-normal relative">รายละเอียด <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></h1>
                </div>

                <div>
                  <textarea
                    rows={8}
                    className={`w-full bg-[#f3f5f1] resize-none focus:border-ms-green focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] p-4 font-light text-lg rounded-3xl ${inputError.detail ? 'border-[#E84A4A] focus:ring-red-200' : 'border-ms-gold'} border  outline-none`}
                    name={"detail"}
                    onChange={handleChange}
                    value={input.detail}
                  ></textarea>
                  {inputError.detail ? <small className="text-red-500">{inputError.detail}</small> : null}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center">
                  <h1 className="text-lg font-normal relative">สถานที่ตั้ง <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></h1>
                </div>

                <div>
                  <InputAdmin
                    value={input.location}
                    onChange={handleChange}
                    name={"location"}
                    error={inputError.location}
                  />
                </div>
              </div>
              
              <div>
              <Button btn="active" width="w-[10rem]">
                บันทึก
              </Button>
              </div>
            </div>

      </div>
    </form>
    </>
  );
}
