import { Link, useLocation } from "react-router-dom";
import logoMediSync from "../../assets/logos/MediSync-1.svg";
import NavbarItem from "./NavbarItem";
import ButtonSmall from "../../components/BottonSmall";
import { Tooltip } from "@material-tailwind/react";

export default function Navbar() {
  const { pathname } = useLocation();

  const menuList = [
    { id: 1, text: "หน้าหลัก", to: "/", tooltip: "หน้าหลัก" },
    {
      id: 2,
      text: "แผนก/คลินิก",
      to: "/department",
      tooltip: "ค้นหาแผนก/คลินิก",
    },
    {
      id: 3,
      text: "แพ็กเกจตรวจสุขภาพ",
      to: "/package",
      tooltip: "ค้นหาแพ็กเกจตรวจสุขภาพ",
    },
    { id: 4, text: "ติดต่อเรา", to: "/contact", tooltip: "ติดต่อโรงพยาบาล" },
  ];

  return (
    <nav className="h-20 flex items-center justify-between p-4 mt-2">
      <div className="h-9">
        <Link to="/">
          <img className="h-full" src={logoMediSync} alt="logoMediSync" />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        {menuList.map((el) => {
          return (
            <NavbarItem key={el.id} menu={el} active={pathname === el.to} />
          );
        })}

        <div className="gap-3 flex">
          <ButtonSmall>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-phone"></i>
              <h1 className="font-th">+66 9598 95464</h1>
            </div>
          </ButtonSmall>

          <Link to="/login">
            <ButtonSmall btn="success">
              <Tooltip
                content={"login สำหรับคนไข้"}
                placement="bottom"
                className="px-3 bg-ms-gray text-[#f3f5f2] shadow-sm"
                animate={{
                  mount: { scale: 1, y: 8, transition: { delay: 0.5 } },
                  unmount: { scale: 0, y: -20, transition: { delay: 0 } },
                }}
              >
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-user-plus"></i>
                  <h1>login</h1>
                </div>
              </Tooltip>
            </ButtonSmall>
          </Link>
        </div>
      </div>
    </nav>
  );
}
