import { useState } from "react"
import UserVnCard from "../component/UserVnCard"
import { useLocation } from "react-router-dom";
import SideMenu from "../component/SideMenuUser";
import SideMenuUser from "../component/SideMenuUser";
import Slide from "../../../components/Slide";

const mockData = [
  {
    imgSrc: "https://picsum.photos/1920/540?random=1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    link: {
      linkSrc: "/hospital/1",
      button: "line: โรงพยาบาล 1",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    link: {
      linkSrc: "/hospital/2",
      button: "line: โรงพยาบาล 2",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
    link: {
      linkSrc: "/hospital/3",
      button: "line: โรงพยาบาล 3",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
    link: {
      linkSrc: "/hospital/4",
      button: "line: โรงพยาบาล 4",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
    link: {
      linkSrc: "/hospital/5",
      button: "line: โรงพยาบาล 5",
    },
  },
];

function UserAllVn() {
  const {pathname} = useLocation();
  console.log(pathname)
  
  return (
    <>
    <div className="flex justify-center p-40 gap-10 min-h-[80vh] ">


     <SideMenuUser />

      <div className="flex flex-1 flex-col border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 px-16 gap-4 ">
         <div className="flex items-center justify-between mb-2 text-center px-8 text-ms-gray">
            <h1 className="w-2/5 ">no.</h1>
            <h1 className="w-4/5">วันที่เข้ารับการรักษา</h1>
            <h1 className="w-4/5">Visit Number</h1>
            <h1 className="w-4/5">สรุปผลการรักษา</h1>
            <h1 className="w-4/5">ค่ารักษาพยาบาล</h1>
         </div>
         <UserVnCard />
         <UserVnCard />
         <UserVnCard />
       
      </div>

    </div>
    <Slide slides={mockData} width="full" height="96" fit="object-contain" />
    </>
  )
}

export default UserAllVn