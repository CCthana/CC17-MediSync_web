import Slide from "../../../components/Slide";

export default function HeadHero() {

  const mockData = [
    {
      imgSrc: "https://cdn.pixabay.com/photo/2016/11/08/05/29/operation-1807543_1280.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
      link: {
        linkSrc: "/hospital/1",
        button: "line: โรงพยาบาล 1",
      },
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1319540429/th/รูปถ่าย/แพทย์หญิงชาวจีนเชื้อสายเอเชียอธิบายรายงานทางการแพทย์ต่อผู้ป่วยหญิงที่โซฟาสํานักงานของ.jpg?s=2048x2048&w=is&k=20&c=otbjuwEYJF7pGXcfoumv65leTaqgIBzLqeAbNwJxEMU=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
      link: {
        linkSrc: "/hospital/2",
        button: "line: โรงพยาบาล 2",
      },
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1493936700/th/รูปถ่าย/แนวคิดการประชุมทีมเครือข่ายเทคโนโลยีทางการแพทย์-แพทย์มือทํางานกับโทรศัพท์สมาร์ทที่ทันส.jpg?s=2048x2048&w=is&k=20&c=G4-rSn3b5jlel0gsj2MvdYhBjuUUuRMpFf4gB7RLl1Y=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
      link: {
        linkSrc: "/hospital/3",
        button: "line: โรงพยาบาล 3",
      },
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1316628294/th/รูปถ่าย/การตกแต่งภายในห้องปฏิบัติการพร้อมอุปกรณ์ห้องปฏิบัติการ-ภาพประกอบ-3-มิติ.jpg?s=2048x2048&w=is&k=20&c=Jyc8GmWBAhcPo2MPSwMJ_uMceW4X8LqtEjK9OzCWUpU=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
      link: {
        linkSrc: "/hospital/4",
        button: "line: โรงพยาบาล 4",
      },
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1835975024/th/รูปถ่าย/ทางเดินที่ว่างเปล่าในโรงพยาบาลสมัยใหม่พร้อมเตียงในโรงพยาบาล-3d-การแสดงผล.jpg?s=2048x2048&w=is&k=20&c=OK_h0L3NTsr-m5yfnGLkf_DcalWN9UKkXne6hrDzEh4=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
      link: {
        linkSrc: "/hospital/5",
        button: "line: โรงพยาบาล 5",
      },
    },
  ];

  return (
    <div className="flex justify-center overflow-hidden items-center bg-slate-300 rounded-[30px] h-[55vh]">
      <Slide slides={mockData} />
    </div>
  )
}
