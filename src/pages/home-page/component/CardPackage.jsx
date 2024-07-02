import { Link } from "react-router-dom"
import CardPackageItem from "./CardPackageItem"


export default function CardPackage() {

    const packageH = [
        {
            id: 1,
            image: "https://media.istockphoto.com/id/476994514/th/รูปถ่าย/aedes-ยุงดูดเลือด.jpg?s=2048x2048&w=is&k=20&c=Gekfn3uLSiz9wco5V7-wZlkT0tJdYDe1NZVIiM2MoXc=",
            text: "วัคซีนป้องกันไข้เลือดออก",
        },
        {
            id: 2,
            image: "https://cdn.pixabay.com/photo/2023/08/18/16/04/disease-8198852_1280.jpg",
            text: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
        },
        {
            id: 3,
            image: "https://media.istockphoto.com/id/1524572210/th/รูปถ่าย/หมอใช้ครีมแมน.jpg?s=2048x2048&w=is&k=20&c=4j61tVprr-PcuAW-tovEEH2tsD4UUPXT8iKTqHiA8fI=",
            text: "วัคซีนป้องกันงูสวัด",
        }
    ]

  return (
    <div className="flex justify-center flex-col items-center gap-7 my-16">
        <h1 className="text-4xl font-light">แพ็กเกจตรวจสุขภาพ</h1>

        <div className="flex gap-12 justify-center">
            { packageH.map((el) => (
                <CardPackageItem key={el.id} data={el} />
            ))}
        </div>

        <Link to='/package' className="text-sm font-light hover:underline -mt-2">ดูแพ็กเกจตรวจสุขภาพทั้งหมด &gt;</Link>

    </div>
  )
}
