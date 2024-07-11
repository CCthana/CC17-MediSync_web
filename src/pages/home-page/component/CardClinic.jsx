import { Link } from "react-router-dom"
import CardClinicItem from "./CardClinicItem"
import useClinic from "../../../hooks/useClinic";
import useDoctor from "../../../hooks/useDoctor";

export default function CardClinic() {

  const { getAllClinic, isClinicLoading } = useClinic();
  const { fetchAllDoctorByClinic, doctorActiveByClinic } = useDoctor()

  // console.log('getAllClinic CardClinic', getAllClinic)
  console.log('doctorActiveByClinic', doctorActiveByClinic)


  return (
    <div className="flex justify-center flex-col items-center gap-7 my-16">
        <h1 className="text-4xl text-ms-green font-light font-th">แผนก/คลินิก</h1>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
            { getAllClinic?.slice().map((el, index) => (
                <CardClinicItem index={index} fetchAllDoctorByClinic={fetchAllDoctorByClinic} doctorActiveByClinic={doctorActiveByClinic} key={el.id} data={el} isClinicLoading={isClinicLoading} />
            ))}
        </div>

        <Link to='/department' className="text-sm font-light hover:underline -mt-2">ดูแผนก/คลินิกทั้งหมด &gt;</Link>

    </div>
  )
}
