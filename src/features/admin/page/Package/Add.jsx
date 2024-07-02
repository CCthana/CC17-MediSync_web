import { useRef, useState } from "react";
import validateFormPackage from "./validate/validate-package";
import Input from "../../../../components/Input";

const initialInput = {
  name: "",
  detail: "",
  price: "",
  promotionDate: "",
};

const initialInputError = {
  name: "",
  detail: "",
  price: "",
  promotionDate: "",
};

export default function AddPackage({ onAdd, onCancel }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const [selectFile, setSelectFile] = useState(null);
  const fileEl = useRef();

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
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
      const error = validateFormPackage(input);

      if (error) {
        setInputError(error);
        return;
      }

      setInputError(initialInputError);
      setInput(initialInput);

      const newPackage = {
        id: Date.now(), // id ชั่วคราว
        title: input.name,
        detail: input.detail,
        price: input.price || "",
        promotionDate: input.promotionDate || "",
        image: selectFile ? URL.createObjectURL(selectFile) : "",
      };

      onAdd(newPackage);

      setSelectFile(null);
    } catch (err) {
      console.error("Error adding package:", err);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center gap-8 p-4'>
        {/* Image */}
        <div>
          <input
            className='hidden'
            type='file'
            ref={fileEl}
            onChange={handleFileChange}
          />
        </div>

        {selectFile ? (
          <div
            role='button'
            className='w-96 bg-[#E3E7E0] h-96 rounded-3xl overflow-hidden'
            onClick={() => fileEl.current?.click()}
          >
            <img
              className='w-full h-full object-cover'
              src={URL.createObjectURL(selectFile)}
              alt='package'
            />
          </div>
        ) : (
          <div
            className='w-96 h-96 bg-[#E3E7E0] flex items-center justify-center rounded-3xl cursor-pointer'
            onClick={() => fileEl.current?.click()}
          >
            <h1 className='font-th text-gray-400'>Image</h1>
          </div>
        )}

        {/* Input fields */}
        <div className='flex flex-col gap-4 p-8 w-1/2'>
          <div>
            <label>ชื่อแพ็กเกจ :</label>
            <Input
              placeholder='ชื่อแพ็กเกจ'
              name='name'
              value={input.name}
              onChange={handleChange}
              error={inputError.name}
            />
          </div>

          <div>
            <label>รายละเอียด :</label>
            <textarea
              className='w-full px-4 py-2 h-64 bg-[#f3f5f1] text-ms-gray border rounded-3xl transition duration-200 placeholder:text-[0.9rem] placeholder:text-[#b0afad] placeholder:font-light focus:outline-none border-ms-gold focus:border-ms-green focus:bg-[#f3f5f1] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]'
              name='detail'
              value={input.detail}
              onChange={handleChange}
            />
            {inputError.detail && (
              <small className='text-red-500'>{inputError.detail}</small>
            )}
          </div>

          <div>
            <label>ใช้ได้ถึง :</label>
            <Input
              typeInput='date'
              name='promotionDate'
              value={input.promotionDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>ราคา :</label>
            <Input
              placeholder='ราคา'
              name='price'
              value={input.price}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-around'>
        <button
          className='w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]'
          onClick={handleAddPackage}
        >
          เพิ่ม
        </button>
        <button
          className='w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white'
          onClick={onCancel}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
}
