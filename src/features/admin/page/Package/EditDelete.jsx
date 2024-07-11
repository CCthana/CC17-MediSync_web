import { useRef, useState } from "react";
import Input from "../../../../components/Input";
import adminApi from "../../../../apis/admin";
import Button from "../../../../components/Button";
import validateFormPackage from "./validate/validate-package";
import Spinner from "../../../../components/Spinner";
import { toast } from "react-toastify";
import { getAccessTokenAdmin } from "../../../../utils/local-storage";

const initialInputError = {
  name: "",
  detail: "",
  price: "",
  expireDate: "",
  image: "",
};

export default function EditDeletePackage({
  initialPackage,
  onUpdate,
  setOpen,
}) {
  const [input, setInput] = useState({
    name: initialPackage.name || "",
    detail: initialPackage.detail || "",
    price: initialPackage.price || 0,
    expireDate: initialPackage.expireDate || "",
  });
  const [inputError, setInputError] = useState(initialInputError);
  const [selectFile, setSelectFile] = useState(null);
  const [isLoading, setIsLoaging] = useState(false);

  const fileEl = useRef();

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
    setInputError((prev) => ({ ...prev, image: "" }));
  };

  const handleEdit = async () => {
    try {
      if (getAccessTokenAdmin()) {

      // const updatePackage = {
      //   ...initialPackage,
      //   name: input.name,
      //   detail: input.detail,
      //   price: input.price,
      //   expireDate: input.expireDate,
      //   image: selectFile
      //     ? URL.createObjectURL(selectFile)
      //     : initialPackage.image,
      // };

      // console.log("updatePackage", updatePackage);
      const error = validateFormPackage(input);
      console.log("input", input);
      console.log("error", error);
      console.log("selectFile", selectFile);

      if (error) {
        setInputError(error);
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
      const result = await adminApi.updatePackage(initialPackage.id, formData);
      setIsLoaging(false);

      onUpdate(result.data.updatePackage);
      toast.success("update Package success");
      setSelectFile(null);
      fileEl.current.value = "";
      console.log("result", result.data.updatePackage);
      setOpen(false);
    }
    } catch (err) {
      console.log("err handleEdit package", err);
    }
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  console.log("initialPackage", initialPackage);
  console.log("input", input);

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
              className="min-w-72 bg-[#E3E7E0] h-72 rounded-3xl overflow-hidden"
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
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={initialPackage.image}
                alt="packageImage"
              />
            </div>
          )}

          <small className="text-center">
            ขนาดภาพที่แนะนำ 800 x 800 px <br />
            ไฟล์ .jpeg .png
          </small>

          {inputError.image && (
            <small className="text-red-500">{inputError.image}</small>
          )}

          {!selectFile ? (
            <button
              className="text-gray-400 hover:underline"
              onClick={() => fileEl.current.click()}
            >
              เปลี่ยนรูปภาพ
            </button>
          ) : (
            <div className="space-x-3">
              <button
                onClick={() => {
                  setSelectFile(null);
                  fileEl.current.value = "";
                }}
                className="text-red-400 hover:underline"
              >
                ยกเลิก
              </button>
            </div>
          )}
        </div>

        <div className="w-full space-y-4 flex flex-col">
          <div className="space-y-1">
            <label className="font-light">ชื่อแพ็กเกจ</label>
            <Input
              placeholder="ชื่อแพ็กเกจ"
              name="name"
              value={input.name}
              onChange={handleChange}
              error={inputError.name}
            />
          </div>

          <div className="space-y-1">
            <label className="font-light">รายละเอียด</label>
            <textarea
              className={`w-full resize-none px-4 py-2 h-64 bg-[#f3f5f1] text-ms-gray border rounded-3xl transition duration-200 placeholder:text-[0.9rem] placeholder:text-[#b0afad] placeholder:font-light focus:outline-none ${
                input.detail === ""
                  ? "border-[#E84A4A] focus:ring-red-200"
                  : "border-ms-gold focus:border-ms-green focus:bg-[#f3f5f1] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]"
              }`}
              name="detail"
              value={input.detail}
              onChange={handleChange}
            />
            {inputError.detail && (
              <small className="text-red-500">{inputError.detail}</small>
            )}
          </div>

          <div className="space-y-1">
            <label className="font-light">ราคา</label>
            <Input
              placeholder="ราคา"
              typeInput="number"
              name="price"
              value={+input.price}
              onChange={handleChange}
              error={inputError.price}
            />
          </div>

          <div className="space-y-1">
            <label className="font-light">package ใช้ได้ถึง</label>
            <Input
              typeInput="date"
              name="expireDate"
              value={input.expireDate}
              onChange={handleChange}
              error={inputError.expireDate}
            />
          </div>

          <div className="flex items-center gap-6 justify-start pt-8">
            <Button btn="active" onClick={handleEdit} width="w-[10rem]">
              ยืนยัน
            </Button>
            <Button
              btn="success"
              width="w-[10rem]"
              onClick={() => setOpen(false)}
            >
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
