import { useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import validateFormCareer from "./validate/validate-form";
import { toast } from "react-toastify";
import careerApi from "../../apis/career";
import Spinner from "../../components/Spinner";
import useHr from "../../hooks/useHr";
import { DropDownIcon } from "../../icons";

const initialInput = {
  firstname: "",
  lastname: "",
  age: "",
  phone: "",
  email: "",
  position: "",
  detail: "",
};

const initialInputError = {
  firstname: "",
  lastname: "",
  age: "",
  phone: "",
  email: "",
  position: "",
  detail: "",
  file: "",
};

export default function CareerPage() {

  const { allPosition } = useHr()

  const [applyData, setApplyData] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileInput = useRef(null);
  

  const handleFileUploadClick = () => {
    fileInput.current.click();
  };

  const handleChangeInput = (e) => {
    setApplyData({ ...applyData, [e.target.name]: e.target.value });
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmitFrom = async (e) => {
    try {
      e.preventDefault();

      const err = validateFormCareer(applyData);

      if (err || !file) {
        setInputError(err);
        if (!file) {
          return setInputError((prev) => ({
            ...prev,
            file: "CV is required.",
          }));
        }
        return;
      }

      setInputError({ ...initialInputError });

      const formData = new FormData();
      formData.append("cv", file);
      formData.append("firstname", applydata?.firstname);
      formData.append("lastname", applydata?.lastname);
      formData.append("age", applydata?.age);
      formData.append("phone", applydata?.phone);
      formData.append("email", applydata?.email);
      formData.append("position", applydata?.position);
      formData.append("detail", applydata?.detail);

      setTimeout(() => {
        setIsLoading(false);
        toast.success("send email successfully.");
        setApplyData(initialInput);
        setFile(null);
        fileInput.current.value = ''
      }, 1500);

      setIsLoading(true);
      
      await careerApi.sendEmailHr(formData);
    } catch (err) {
      console.log("err contact", err);
    }
  };

  console.log("applyData", applyData);
  console.log('file', file)

  return (
    <>
      {isLoading && <Spinner />}
      <div className="min-h-[75vh] flex flex-col items-center py-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full contents ">
          <h1 className="text-ms-gray text-4xl font-light text-center mb-6">
            ร่วมงานกับเรา
          </h1>
          <div className="mb-6 w-[770px] max-w-full flex flex-col justify-start">
            <h2 className="text-[#767676] text-xl font-normal mb-2">
              ตำแหน่งที่รับสมัคร
            </h2>
            <ul className="list-disc pl-5 text-ms-gray font-th font-light space-y-0.5">
              {allPosition?.map((job, index) => (
                <li key={job.id} className="flex justify-between">
                  <span>
                    {index + 1}. {job.name} {job.quantity} อัตรา
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="space-y-4 w-2/3 py-10 px-12 rounded-[32px] shadow-[0px_0px_6px_rgba(174,143,78,0.4)]"
            onSubmit={handleSubmitFrom}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-0.5">
                <label className="font-light relative">
                  ชื่อจริง
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <Input
                  value={applydata?.firstname}
                  placeholder="ชื่อของผุ้สมัคร"
                  className=""
                  name="firstname"
                  onChange={handleChangeInput}
                  error={inputError.firstname}
                />
              </div>

              <div className="space-y-0.5">
                <label className="font-light relative">
                  นามสกุล
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <Input
                  value={applydata?.lastname}
                  type="text"
                  placeholder="นามสกุล"
                  className=""
                  name="lastname"
                  onChange={handleChangeInput}
                  error={inputError.lastname}
                />
              </div>

              <div className="space-y-0.5">
                <label className="font-light relative">
                  อายุ
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <Input
                  value={applydata?.age}
                  typeInput="number"
                  placeholder="อายุของผุ้สมัคร"
                  name="age"
                  onChange={handleChangeInput}
                  error={inputError.age}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-0.5">
                <label className="font-light relative">
                  เบอร์ติดต่อ
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <Input
                  value={applydata?.phone}
                  type="text"
                  placeholder="เบอร์ติดต่อ"
                  className=""
                  name="phone"
                  onChange={handleChangeInput}
                  error={inputError.phone}
                />
              </div>

              <div className="space-y-0.5">
                <label className="font-light relative">
                  email
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <Input
                  value={applydata?.email}
                  type="email"
                  placeholder="email"
                  className=""
                  name="email"
                  onChange={handleChangeInput}
                  error={inputError.email}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-0.5">
                <label className="font-light relative">
                  เลือกตำแหน่งที่ต้องการสมัคร
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <div className="relative">
                <select
                  onChange={handleChangeInput}
                  value={applydata?.position}
                  name="position"
                  className="border border-ms-gold
              text-[0.9rem] font-light bg-[#f3f5f1] rounded-3xl px-4 py-2 w-full text-[#b0afad] outline-none
              hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] h-11 appearance-none"
                >
                  <option disabled value="">กรุณาเลือกตำแหน่ง</option>
                  
                  {allPosition?.map((job)=>(
                    <option key={job.id} value={job.name}>{job.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                  <DropDownIcon className="h-5 w-5 text-ms-gold rotate-90 pointer-events-none" />
                </div>
                
                
                </div>
                <small className="text-red-500">{inputError.position}</small>
              </div>
              

              <input
                type="file"
                ref={fileInput}
                style={{ display: "none" }}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                    setInputError((prev) => ({ ...prev, file: "" }));
                  }
                }}
              />

              <div className="space-y-0.5">
                <label className="font-light relative">
                  แนบ CV
                  <i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i>
                </label>
                <button
                  type="button"
                  onClick={handleFileUploadClick}
                  className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full text-[#b0afad] bg-[#f3f5f1]
                flex outline-none items-center h-[44px] hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] text-[0.85rem] font-light"
                >
                  เลือกไฟล์ {file && file.name}
                </button>
                {inputError.file && (
                  <small className="text-red-500">{inputError.file}</small>
                )}
              </div>
            </div>

            <div className="space-y-0.5">
              <label className="font-light">รายละเอียดเพิ่มเติม</label>
              <textarea
                value={applydata?.detail}
                name="detail"
                placeholder="รายละเอียดเพิ่มเติม"
                className="border resize-none bg-[#f3f5f1] border-[#AE8F4E] rounded-3xl px-4 py-2 w-full h-32 placeholder:text-[#b0afad] font-light
              focus:outline-none focus:border focus:border-ms-green hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)]
              focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)] text-[0.9rem]"
                onChange={handleChangeInput}
              ></textarea>
            </div>

            <div role="button" className="flex justify-center">
              <Button btn="active" width="w-[15rem]">
                สมัครงาน
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
