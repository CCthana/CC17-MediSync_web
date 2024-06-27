import { useState } from "react";
import PackageForm from "./PackageForm";
import HeardText from "../../components/HeardText";
import InputSearch from "../../components/InputSearch";

export default function PackageLayout() {
  const [search, setSearch] = useState("");

  const packages = [
    {
      image:
        "https://www.vejthani.com/wp-content/uploads/2020/05/Dengue-fever-can-be-prevented-TH1.jpg",
      title: "วัคซีนป้องกันไข้เลือดออก",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates reiciendis est aspernatur laboriosam? Quibusdam, enim? Suscipit repudiandae nisi dolores vel enim ut, totam consectetur sit, hic aliquam accusantium.'
    },
    {
      image:
        "https://www.vejthani.com/wp-content/uploads/2020/05/Dengue-fever-can-be-prevented-TH1.jpg",
      title: "วัคซีนป้องกันไข้เลือดออก",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates reiciendis est aspernatur laboriosam? Quibusdam, enim? Suscipit repudiandae nisi dolores vel enim ut, totam consecte.'
    },
    {
      image:
        "https://www.synphaet.co.th/lamlukka/wp-content/uploads/sites/5/2023/10/38045886_l_normal_none-scaled.jpg",
      title: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates Suscipit repudiandae nisi dolores vel enim ut, totam consectetur sit, hic aliquam accusantium.'
    },
    {
      image:
        "https://www.synphaet.co.th/lamlukka/wp-content/uploads/sites/5/2023/10/38045886_l_normal_none-scaled.jpg",
      title: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates reiciendis est aspernatur laboriosam? Quibusdam, enim? Suscipit repudiandae nisi dolores vel enim ut, totam consectetur sit, hic aliquam accusantium.'
    },
    {
      image: "https://www.bnhhospital.com/wp-content/uploads/2023/10/3-8.webp",
      title: "ตรวจภาวะหินปูนอุดตันในหลอดเลือดหัวใจ",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates reiciendis est aspernatur laboriosam? Quibusdam, enim? Suscipit repudiandae nisi dolores vel enim ut, totam consectetur sit, hic aliquam accusantium.'
    },
    {
      image: "https://www.bnhhospital.com/wp-content/uploads/2023/10/3-8.webp",
      title: "ตรวจภาวะหินปูนอุดตันในหลอดเลือดหัวใจ",
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptates reiciendis est aspernatur laboriosam? Quibusdam, enim? Suscipit repudiandae nisi dolores vel enim ut, totam consectetur sit, hic aliquam accusantium.'
    },
  ];

  const filterPackage = packages.filter((packages) =>
    packages.title.includes(search)
  );

  return (
    <div className='min-h-[75vh] border-t border-gray-300'>
      <div className="container mx-auto py-10">
        <HeardText text="แพ็กเกจตรวจสุขภาพ" />
  
        <div className='relative flex items-center p-8 w-1/2 mx-auto bg-[#e8eae6]
        rounded-3xl mb-6 mt-5 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]'>
          <InputSearch
            type='text'
            value={search}
            className='border border-[#AE8F4E] rounded-3xl p-3 w-2/5'
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            role="button"
            className="fa-solid p-8 fa-magnifying-glass transition duration-300
            absolute right-6 text-gray-300 text-2xl hover:text-gray-400"
          ></i>

        </div>

        {/* grid package */}
        <div className='grid grid-cols-3 w-11/12 mx-auto p-8 gap-12
        '>
          { filterPackage.map((el) => (
            <PackageForm key={el.title} packages={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
