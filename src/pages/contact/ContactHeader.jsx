import { Link } from "react-router-dom";

export default function ContactHeader() {
  return (
    <div className="flex justify-center mb-6 gap-4">
      <Link
        to="/contact"
        className="border border-[#AE8F4E] text-[#767676] py-2 px-4 rounded-full"
      >
        ติดต่อสอบถาม
      </Link>
      <Link
        to="/career"
        className="border border-[#AE8F4E] text-[#767676] py-2 px-4 rounded-full"
      >
        ร่วมงานกับเรา
      </Link>
      <Link
        to="/information"
        className="border border-[#AE8F4E] text-[#767676] py-2 px-4 rounded-full"
      >
        ข้อมูลโรงพยาบาล
      </Link>
    </div>
  );
}