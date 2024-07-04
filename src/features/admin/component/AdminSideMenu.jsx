import { Link, useLocation } from "react-router-dom";
import ModalInfo from "../../../components/ModalInfo";
import LogoutPage from "../page/LogoutPage";
import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";

function AdminSideMenu() {
  const { pathname } = useLocation();
  const { logout } = useAdmin();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-72 min-w-60 border-[1px] border-ms-gold min-h-[800px] h-full rounded-[40px] pt-10 pb-20 pl-6 gap-4 font-light text-ms-gray">
        <div>
          <Link to="/admin/createvn">
            <button
              className={`font-th ${pathname === "/admin/createvn"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ลงทะเบียนข้อมูลคนไข้ HN
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/vnconfirm">
            <button
              className={`font-th ${pathname === "/admin/vnconfirm"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ลงทะเบียน VN
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/appointment">
            <button
              className={`font-th ${pathname === "/admin/appointment"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ค้นหาใบนัด
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/nurse">
            <button
              className={`font-th ${pathname === "/admin/nurse"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ตรวจเบื้องต้น
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/doctor">
            <button
              className={`font-th ${pathname === "/admin/doctor"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ตรวจอาการ
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/account">
            <button
              className={`font-th ${pathname === "/admin/account"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              ค่ารักษา
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/dashboard">
            <button
              className={`font-th ${pathname === "/admin/dashboard"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              dashboard
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/managedoctor">
            <button
              className={`font-th ${pathname === "/admin/managedoctor"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              จัดการหมอ
            </button>
          </Link>
        </div>

        <div>
          <Link to="/admin/manageclinic">
            <button
              className={`font-th ${pathname === "/admin/manageclinic"
                ? "text-ms-green hover:no-underline hover:cursor-default font-medium"
                : "hover:underline text-ms-gray"
              }`}
            >
              จัดการแผนก / คลินิก
            </button>
          </Link>
        </div>
        
        <div>
          <button onClick={() => setOpen(true)} className="hover:underline">
            ออกจากระบบ
          </button>
        </div>
      </div>

      <ModalInfo open={open} onClose={() => setOpen(false)} width={40}>
        <LogoutPage cancel={() => setOpen(false)} logout={logout} />
      </ModalInfo>
    </>
  );
}

export default AdminSideMenu;
