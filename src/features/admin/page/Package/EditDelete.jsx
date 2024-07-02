import { useRef, useState } from "react";
import Input from "../../../../components/Input";

export default function EditDeletePackage({
  initialPackage,
  onUpdate,
  setIsDelete,
}) {
  const [input, setInput] = useState({
    name: initialPackage.title || "",
    detail: initialPackage.detail || "",
    price: initialPackage.price || "",
    promotionDate: initialPackage.promotionDate || "",
  });

  const [selectFile, setSelectFile] = useState(null);
  const fileEl = useRef();

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handleEdit = () => {
    const updatePackage = {
      ...initialPackage,
      title: input.name,
      detail: input.detail,
      price: input.price,
      promotionDate: input.promotionDate,
      image: selectFile
        ? URL.createObjectURL(selectFile)
        : initialPackage.image,
    };
    onUpdate(updatePackage);
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-8 p-4'>
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
              <img
                className='w-full h-full object-cover rounded-3xl'
                src={initialPackage.image}
                alt='packageImage'
              />
            </div>
          )}

          <div className='flex flex-col gap-4 p-8'>
            <div>
              <label>ชื่อแพ็กเกจ :</label>
              <Input
                placeholder='ชื่อแพ็กเกจ'
                name='name'
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </div>

            <div>
              <label>รายละเอียด :</label>
              <textarea
                className={`w-full px-4 py-2 h-64 bg-[#f3f5f1] text-ms-gray border rounded-3xl transition duration-200 placeholder:text-[0.9rem] placeholder:text-[#b0afad] placeholder:font-light focus:outline-none ${
                  input.detail === ""
                    ? "border-[#E84A4A] focus:ring-red-200"
                    : "border-ms-gold focus:border-ms-green focus:bg-[#f3f5f1] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]"
                }`}
                name='detail'
                value={input.detail}
                onChange={(e) => setInput({ ...input, detail: e.target.value })}
              />
            </div>

            <div>
              <label>ใช้ได้ถึง :</label>
              <Input
                typeInput='date'
                name='promotionDate'
                value={input.promotionDate}
                onChange={(e) =>
                  setInput({ ...input, promotionDate: e.target.value })
                }
              />
            </div>

            <div>
              <label>ราคา :</label>
              <Input
                placeholder='ราคา'
                name='price'
                value={input.price}
                onChange={(e) => setInput({ ...input, price: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className='flex gap-8'>
          <button
            className='w-[150px] h-[40px] bg-ms-green rounded-full text-white text-xl hover:bg-[#257956]'
            onClick={handleEdit}
          >
            ยืนยัน
          </button>
          <button
            className='w-[150px] h-[40px] rounded-full text-ms-gray text-xl border-[1.5px] border-ms-gold bg-white hover:bg-[#89713e] hover:text-white'
            onClick={() => setIsDelete(true)}
          >
            ลบ
          </button>
        </div>
      </div>
    </>
  );
}
