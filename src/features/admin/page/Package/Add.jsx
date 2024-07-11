import { useRef, useState } from "react";
import validateFormPackage from "./validate/validate-package";
import Input from "../../../../components/Input";
import adminApi from "../../../../apis/admin";
import { toast } from "react-toastify";
import Button from "../../../../components/Button";
import Spinner from "../../../../components/Spinner";
import { getAccessTokenAdmin } from "../../../../utils/local-storage";

const initialInput = {
  name: "",
  detail: "",
  price: "",
  expireDate: "",
};

const initialInputError = {
  name: "",
  detail: "",
  price: "",
  expireDate: "",
  image: "",
};

export default function AddPackage({ onCancel, fetchPackage }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [isLoading, setIsLoaging] = useState(false);

  const [selectFile, setSelectFile] = useState(null);
  const fileEl = useRef();

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
    setInputError((prev) => ({ ...prev, image: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setInputError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const handleAddPackage = async () => {
    try {
      if (getAccessTokenAdmin()) {
      const error = validateFormPackage(input);

      // if (error) {
      //   setInputError(error);
      //   return;
      // }

      if (error || !selectFile) {
        console.log("error", error);
        setInputError(error);
        if (!selectFile) {
          return setInputError((prev) => ({
            ...prev,
            image: "image is required.",
          }));
        }
        return;
      }

      const formData = new FormData();
      {
        selectFile && formData.append("image", selectFile);
      }
      formData.append("name", input?.name);
      formData.append("detail", input?.detail);
      formData.append("price", input?.price);
      formData.append("expireDate", input?.expireDate);

      setIsLoaging(true);
      await adminApi.createPackage(formData);
      fetchPackage()
      setIsLoaging(false);

      toast.success("create Package success");
      setInputError(initialInputError);
      setSelectFile(null);
      fileEl.current.value = "";
      onCancel();
    }
    } catch (err) {
      console.error("Error adding package:", err);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="flex p-8 gap-6">
        <div className="text-center flex flex-col gap-4">
          <input
            className="hidden"
            type="file"
            ref={fileEl}
            onChange={handleFileChange}
          />
          {selectFile ? (
            <div
              role="button"
              className="min-w-72 h-72 bg-[#E3E7E0] rounded-3xl overflow-hidden"
              onClick={() => fileEl.current?.click()}
            >
              <img
                className="w-full h-full object-cover"
                src={URL.createObjectURL(selectFile)}
                alt="package"
              />
            </div>
          ) : (
            <div
              className="min-w-72 h-72 bg-[#E3E7E0] flex items-center justify-center rounded-3xl cursor-pointer"
              onClick={() => fileEl.current?.click()}
            >
              <h1 className="font-th text-gray-400">Image</h1>
            </div>
          )}
          <small className="text-center">
            ขนาดภาพที่แนะนำ 800 x 800 px <br />
            ไฟล์ .jpeg .png
          </small>

          {inputError.image && (
            <small className="text-red-500">{inputError.image}</small>
          )}
        </div>

        <div className="w-full space-y-4 flex flex-col">
          <div className="space-y-1">
            <label className="font-light relative">ชื่อแพ็กเกจ<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <Input
              placeholder="ชื่อแพ็กเกจ"
              name="name"
              value={input.name}
              onChange={handleChange}
              error={inputError.name}
            />
          </div>

          <div className="space-y-1">
            <label className="font-light relative">รายละเอียด<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <textarea
              className={`w-full px-4 resize-none py-2 h-64 bg-[#f3f5f1] text-ms-gray border rounded-3xl transition duration-200 placeholder:text-[0.9rem] placeholder:text-[#b0afad] placeholder:font-light focus:outline-none ${
                inputError.detail ? "border-[#E84A4A]" : "border-ms-gold"
              } focus:border-ms-green focus:bg-[#f3f5f1] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]`}
              name="detail"
              value={input.detail}
              onChange={handleChange}
            />
            {inputError.detail && (
              <small className="text-red-500">{inputError.detail}</small>
            )}
          </div>

          <div className="space-y-1">
            <label className="font-light relative">ราคา<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <Input
              placeholder="ราคา"
              name="price"
              value={input.price}
              onChange={handleChange}
              typeInput="number"
              error={inputError.price}
            />
          </div>

          <div className="space-y-1">
            <label className="font-light relative">package ใช้ได้ถึง<i className="fa-solid fa-asterisk text-red-400 text-[8px] absolute top-0 -right-2"></i></label>
            <Input
              typeInput="date"
              name="expireDate"
              value={input.expireDate}
              onChange={handleChange}
              error={inputError.expireDate}
            />
          </div>

          <div className="flex items-center gap-6 justify-start pt-8">
            <Button btn="active" onClick={handleAddPackage} width="w-[10rem]">
              เพิ่ม package
            </Button>
            <Button btn="success" width="w-[10rem]" onClick={onCancel}>
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
