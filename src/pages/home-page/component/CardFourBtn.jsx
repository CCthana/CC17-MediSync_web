import CardFourItem from "./CardFourItem";

export default function CardFourBtn() {

  const cardItem = [
    {
      id: 1,
      text: "ค้นหาแพทย์",
      icon: "fa-solid fa-user-doctor",
      path: "/doctor",
      tooltip: "ค้นหารายชื่อแพทย์",
    },
    {
      id: 2,
      text: "แผนก/คลินิก",
      icon: "fa-solid fa-building",
      path: "/department",
      tooltip: "ค้นหาแผนก/คลินิกโรงพยาบาล",
    },
    {
      id: 3,
      text: "แพ็กเกจตรวจสุขภาพ",
      icon: "fa-solid fa-stethoscope",
      path: "/package",
      tooltip: "ค้นหาแพ็กเกจตรวจสุขภาพ",
    },
    {
      id: 4,
      text: "ลงทะเบียนล่วงหน้า",
      icon: "fa-solid fa-notes-medical",
      path: "/register",
      tooltip: "สำหรับลงทะเบียนข้อมูลล่วงหน้า",
    },
  ];
  return (
    <div className="flex gap-4 justify-center my-7">
      {cardItem.map((el) => (
        <CardFourItem key={el.id} data={el} />
      ))}
    </div>
  );
}
