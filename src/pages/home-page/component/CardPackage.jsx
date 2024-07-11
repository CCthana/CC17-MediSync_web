import { Link } from "react-router-dom"
import CardPackageItem from "./CardPackageItem"
import { useEffect} from "react";
import usePackage from "../../../hooks/usePackage";

export default function CardPackage() {
    const { allPackages, fetchPackage} = usePackage()


    useEffect(() => {
        fetchPackage();
      }, []);

  return (
    <div className="flex justify-center flex-col items-center gap-7 my-16">
        <h1 className="text-4xl font-light text-ms-green">แพ็กเกจตรวจสุขภาพ</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-11/12 gap-8 grid-cols-1">
            { allPackages?.slice(0,4).map((el, index) => (
                <CardPackageItem key={el.id} data={el} index={index} />
            ))}
        </div>

        <Link to='/package' className="text-sm font-light hover:underline -mt-2">ดูแพ็กเกจตรวจสุขภาพทั้งหมด &gt;</Link>

    </div>
  )
}
