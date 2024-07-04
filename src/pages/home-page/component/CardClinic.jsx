import { Link } from "react-router-dom"
import CardClinicItem from "./CardClinicItem"
import useClinic from "../../../hooks/useClinic";

// const dataclinic = [
//   {
//     id: 1,
//     nameClinic: "ศูนย์รักษาโรคหลอดเลือดหัวใจตีบแบบซับซ้อน",
//     detail: "ให้การปรึกษาแก่ผู้ป่วยที่ต้องการหาทางเลือกการรักษาภาวะหลอดเลือดหัวใจตีบนอกเหนือจากการผ่าตัด รวมทั้งให้การรักษาโรคหลอดเลือดหัวใจตีบ",
//     icon: 'https://www.svgrepo.com/show/325928/heart-cardiogram.svg',
//     image: 'https://media.istockphoto.com/id/1867134300/th/รูปถ่าย/ภาพระยะใกล้เผยให้เห็นภาพของทันตแพทย์จัดฟันตรวจสอบด้วยเอ็กซเรย์ฟัน.jpg?s=2048x2048&w=is&k=20&c=L6j0S9d1kgD-Ou26MbW3A-XEVprXS4WgtNU78rLBpbI='
//   },
//   {
//     id: 2,
//     nameClinic: "ศูนย์โรคปอดและโรคระบบทางเดินหายใจ",
//     detail: "อาการหายใจลำบาก ไอ แน่นหน้าอก หรือเสมหะมีเลือดปน",
//     icon: 'https://www.svgrepo.com/show/494374/heart-lung.svg',
//     image: 'https://media.istockphoto.com/id/1321691592/th/รูปถ่าย/พยาบาลหัวดําที่เป็นมิตรใช้หูฟังเพื่อฟังการเต้นของหัวใจและปอดของก.jpg?s=2048x2048&w=is&k=20&c=f26PyPhllt-4munRyIVxRUD0gAbqtOSAh0hRo187JFo='
//   },
//   {
//     id: 3,
//     nameClinic: "ศูนย์โรคไต",
//     detail: "ประกอบด้วยทีมผู้เชี่ยวชาญในแต่ละด้าน ได้แก่ ทีมอายุรแพทย์โรคไต ศัลยแพทย์ผ่าตัดปลูกถ่ายไต ศัลยแพทย์หลอดเลือด ศัลยแพทย์ระบบทางเดินปัสสาวะ อายุรแพทย์โรคติดเชื้อ แพทย์เฉพาะทางอายุรศาสตร์โรคหัวใจและหลอดเลือด อายุรแพทย์โรคทางเดินหายใจ แพทย์ผู้เชี่ยวชาญทางด้าน ICU ทีมจิตแพทย์ผู้เชี่ยวชาญด้านการประเมินสภาพจิตใจของผู้ป่วยปลูกถ่ายไต ทีมแพทย์เอกซเรย์ที่ชำนาญการวินิจฉัยด้านการผ่าตัดปลูกถ่ายไต ฯลฯ อีกทั้งแพทย์สาขาอื่นๆ",
//     icon: 'https://www.svgrepo.com/show/88518/kidney.svg',
//     image: 'https://media.istockphoto.com/id/1304967847/th/รูปถ่าย/แนวคิดของการวินิจฉัยที่ทันสมัยและการรักษาโรคไตของระบบจีนิตูรี.jpg?s=2048x2048&w=is&k=20&c=FWD3zapLXsV6yPCaCkXHHZYZYZNg3RHgNziOqyM5rgs='
//   },
//   {
//     id: 4,
//     nameClinic: "ศูนย์หู คอ จมูก",
//     detail: "ให้บริการตรวจวินิจฉัยและรักษาอาการที่เกี่ยวข้องกับหู คอ และจมูกทุกชนิด ทั้งในเด็กและผู้ใหญ่ ครอบคลุมตั้งแต่การให้คำปรึกษาไปจนถึงการผ่าตัดในโรคที่ซับซ้อน",
//     icon: 'https://www.svgrepo.com/show/399511/i-ear-nose-throat.svg',
//     image: 'https://media.istockphoto.com/id/1374773484/th/รูปถ่าย/การสอบได้ยิน-แพทย์โสต-ศอ-นาสิกแพทย์ตรวจหูของผู้หญิงโดยใช้-otoscope-หรือ-auriscope.jpg?s=2048x2048&w=is&k=20&c=g_JnAjsjZ8Tps8VQghsT2Jq4LFa5q8seAVN1GynZOr0='
//   },
//   {
//     id: 5,
//     nameClinic: "ศูนย์ภูมิแพ้",
//     detail: "ให้บริการดูแลผู้ป่วยโรคภูมิแพ้ โรคหืดแบบเฉพาะเจาะจง (personalized treatment) อย่างครบถ้วน ตั้งแต่การป้องกันโรค การรักษาพยาบาล การฟื้นฟูและการติดตามผลการรักษาด้วยเครื่องมือที่ทันสมัยและเทคโนโลยีดิจิตอลในการดูแลผู้ป่วย",
//     icon: 'https://www.svgrepo.com/show/313457/allergies-solid.svg',
//     image: 'https://media.istockphoto.com/id/1147501337/th/รูปถ่าย/แพทย์หญิงและชายอาวุโส.jpg?s=2048x2048&w=is&k=20&c=3c58R_0gqRY_kBoIPPTkC5IYifQEy0bpbwVVI3zvVWA='
//   },
//   {
//     id: 6,
//     nameClinic: "อายุรกรรม",
//     detail: "ชำนาญการตรวจวินิจฉัย สามารถรักษาโรคทั่วไป ตลอดจนโรคที่ซับซ้อน ครอบคลุมทั้งโรคเฉียบพลัน และเรื้อรัง ภายใต้การดูแลที่ได้มาตรฐานสากล มีอายุรแพทย์ผู้เชียวชาญหลากหลายสาขา ร่วมกับทีมสหวิชาชีพ ซึ่งดูแลผู้ป่วยแบบองค์รวม ให้การรักษาด้วยยาภายใต้การดูแลของแพทย์ พยาบาล และเภสัชกรผู้มากประสบการณ์ อาศัยเครื่องมือทางการแพทย์ที่ทันสมัย",
//     icon: 'https://www.svgrepo.com/show/399554/internal-medicine.svg',
//     image: 'https://media.istockphoto.com/id/1319031310/th/รูปถ่าย/แพทย์เขียนใบสั่งยา.jpg?s=2048x2048&w=is&k=20&c=dpNb3UCeaKRSnD4_94iOz7-lqmCToO72Q-_w6nUe_MU='
//   },
//   {
//     id: 7,
//     nameClinic: "ศูนย์กุมารเวช",
//     detail: "ดูแลสุขภาพเด็กอย่างครบวงจรโดยกุมารแพทย์และแพทย์ผู้เชี่ยวชาญเด็กทุกสาขา พร้อมให้บริการตรวจสุขภาพ ฉีดวัคซีน ตรวจรักษาโรคเด็กตามอาการป่วย",
//     icon: 'https://www.svgrepo.com/show/483853/25-baby-s.svg',
//     image: 'https://media.istockphoto.com/id/1250024143/th/รูปถ่าย/แนวคิดด้านการแพทย์และการดูแลสุขภาพ-แพทย์ชาวเอเชียกําลังดูแลผู้ป่วยหญิงในโรงพยาบาลแพทย.jpg?s=2048x2048&w=is&k=20&c=7eFexABp0Kp3jAc_JSQshx2IK0aP2NvoSEallyEB6YA='
//   },
//   {
//     id: 8,
//     nameClinic: "ฝ่ายเภสัชกรรม",
//     detail: "บริการจ่ายยา พร้อมให้คำแนะนำโดยเภสัชกรที่เชี่ยวชาญในสาขาต่างๆ",
//     icon: 'https://www.svgrepo.com/show/115073/medicines.svg',
//     image: 'https://media.istockphoto.com/id/1404179486/th/รูปถ่าย/วิสัญญีแพทย์ที่ทํางานในโรงละครปฏิบัติการสวมจอภาพตรวจสอบ-protecive-gear.jpg?s=2048x2048&w=is&k=20&c=GBQSr_43CgN05-oJoGEPTOaIcPnhF33Xi6SnnAPHRig='
//   },
  
// ]

export default function CardClinic() {

  const { getAllClinic, isClinicLoading } = useClinic();

  console.log('getAllClinic CardClinic', getAllClinic)

  return (
    <div className="flex justify-center flex-col items-center gap-7 my-16">
        <h1 className="text-4xl font-light font-th">แผนก/คลินิก</h1>

        <div className="grid grid-cols-2 gap-8">
            { getAllClinic?.slice().map((el) => (
                <CardClinicItem key={el.id} data={el} isClinicLoading={isClinicLoading} />
            ))}
        </div>

        <Link to='/department' className="text-sm font-light hover:underline -mt-2">ดูแผนก/คลินิกทั้งหมด &gt;</Link>

    </div>
  )
}
