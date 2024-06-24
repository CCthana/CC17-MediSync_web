import CardFourItem from "./CardFourItem"


export default function CardFourBtn() {

    const cardItem = [
        { id: 1, text: 'ค้นหาแพทย์', icon: "fa-solid fa-user-doctor"},
        { id: 2, text: 'แผนก/คลินิก', icon: "fa-solid fa-building"},
        { id: 3, text: 'แพ็กเกจตรวจสุขภาพ', icon: "fa-solid fa-stethoscope"},
        { id: 4, text: 'ลงทะเบียนล่วงหน้า', icon: "fa-solid fa-notes-medical"},
    ]
  return (
    <div className="flex gap-4 justify-center my-7">
        { cardItem.map((el) => (
            <CardFourItem key={el.id} data={el} />
        ))}
    </div>
  )
}
{/* <i class="fa-solid fa-stethoscope"></i>
<i class="fa-solid fa-building"></i>
<i class="fa-solid fa-notes-medical"></i> */}