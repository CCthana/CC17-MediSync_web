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
            image: "https://media.istockphoto.com/id/476994514/th/รูปถ่าย/aedes-ยุงดูดเลือด.jpg?s=2048x2048&w=is&k=20&c=Gekfn3uLSiz9wco5V7-wZlkT0tJdYDe1NZVIiM2MoXc=",
            text: "ฉีดพลาสมาเกล็ดเลือดเข้มข้น",
        },
        {
            id: 3,
            image: "https://media.istockphoto.com/id/476994514/th/รูปถ่าย/aedes-ยุงดูดเลือด.jpg?s=2048x2048&w=is&k=20&c=Gekfn3uLSiz9wco5V7-wZlkT0tJdYDe1NZVIiM2MoXc=",
            text: "วัคซีนป้องกันงูสวัด",
        }
    ]

  return (
    <div className="flex justify-center flex-col items-center gap-4 my-16">
        <h1 className="text-4xl font-light">แพ็กเกจตรวจสุขภาพ</h1>

        <div className="flex gap-8 justify-center">
            { packageH.map((el) => (
                <CardPackageItem key={el.id} data={el} />
            ))}
        </div>

    </div>
  )
}
