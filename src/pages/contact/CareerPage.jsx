import { useRef } from "react";
import ContactHeader from "./ContactHeader";

export default function CareerPage() {
  const fileInput = useRef(null);

  const handleFileUploadClick = () => {
    fileInput.current.click();
  };

  return (
    <div className=" min-h-screen flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full contents ">
        <ContactHeader />

        <h1 className="text-[#767676] text-2xl font-bold text-center mb-6">
          ร่วมงานกับเรา
        </h1>

        {/* <div className="bg-red-500 w-96"> */}
        {/* <div className="mb-6 w-[770px]"> */}
        <div className="mb-6 w-[770px] max-w-full flex flex-col justify-start">
          <h2 className="text-[#767676] text-xl font-semibold mb-2">
            ตำแหน่งที่รับสมัคร
          </h2>
          <ul className="list-disc pl-5 text-[#767676] font-th">
            <li>พนักงานฝ่ายการตลาด 1 อัตรา</li>
            <li>ผู้จัดการแผนกคลินิก 2 อัตรา</li>
            <li>พนักงานช่วยเหลือคนไข้ 3 อัตรา</li>
            <li>พยาบาลวิชาชีพ OPD 2 อัตรา</li>
          </ul>
        </div>
        {/* </div> */}

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="ชื่อ"
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="นามสกุล"
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="อายุ"
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="เบอร์ติดต่อ"
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="email"
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full text-[#767676]">
              <option value="">กรุณาเลือกตำแหน่ง</option>
              <option value="">abc</option>
              <option value="">def</option>
              <option value="">zxc</option>
            </select>
            {/* <input
              type="text"
              placeholder="สนใจสมัครตำแหน่ง"
              className="border border-[#AE8F4E] rounded-full px-4 py-2 w-full"
            /> */}
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              // className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full bg-white"
            />
            <button
              type="button"
              onClick={handleFileUploadClick}
              className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full bg-white flex text-[#767676]"
            >
              แนบ CV
            </button>
          </div>

          <textarea
            placeholder="รายละเอียดเพิ่มเติม"
            className="border border-[#AE8F4E] rounded-3xl px-4 py-2 w-full h-32"
          ></textarea>

          <div className="flex justify-center">
            <button className="bg-[#31A172] text-white py-2 px-4 rounded-3xl">
              สมัครงาน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}