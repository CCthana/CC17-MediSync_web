import { useState } from "react";
import PackageForm from "./PackageForm";

export default function PackageLayout() {
  const [search, setSearch] = useState("");

  const packages = [
    {
      image:
        "https://www.vejthani.com/wp-content/uploads/2020/05/Dengue-fever-can-be-prevented-TH1.jpg",
      title: "วัคซีนป้องกันไข้เลือดออก",
    },
    {
      image:
        "https://www.vejthani.com/wp-content/uploads/2020/05/Dengue-fever-can-be-prevented-TH1.jpg",
      title: "วัคซีนป้องกันไข้เลือดออก",
    },
    {
      image:
        "https://www.synphaet.co.th/lamlukka/wp-content/uploads/sites/5/2023/10/38045886_l_normal_none-scaled.jpg",
      title: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
    },
    {
      image:
        "https://www.synphaet.co.th/lamlukka/wp-content/uploads/sites/5/2023/10/38045886_l_normal_none-scaled.jpg",
      title: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
    },
    {
      image: "https://www.bnhhospital.com/wp-content/uploads/2023/10/3-8.webp",
      title: "ตรวจภาวะหินปูนอุดตันในหลอดเลือดหัวใจ",
    },
    {
      image: "https://www.bnhhospital.com/wp-content/uploads/2023/10/3-8.webp",
      title: "ตรวจภาวะหินปูนอุดตันในหลอดเลือดหัวใจ",
    },
  ];

  const filterPackage = packages.filter((packages) =>
    packages.title.includes(search)
  );

  return (
    <div className='flex flex-col items-center gap-4 bg-[#E3E7E0]'>
      <h1 className='text-[#767676] text-3xl font-bold'>แพ็กเกจตรวจสุขภาพ</h1>
      <div className='flex justify-center gap-4 w-2/3'>
        <input
          type='text'
          value={search}
          className='border border-[#AE8F4E] rounded-3xl p-3 w-2/5'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='border border-[#AE8F4E] rounded-3xl py-2 px-3 text-[#767676]'>
          ค้นหา
        </button>
        <button className='border border-[#AE8F4E] rounded-3xl py-2 px-3 text-[#767676]'>
          กรองการค้นหา
        </button>
      </div>

      {/* grid package */}
      <div className='grid grid-cols-3 gap-8 m-4 items-center'>
        <PackageForm packages={filterPackage} />
      </div>
    </div>
  );
}
