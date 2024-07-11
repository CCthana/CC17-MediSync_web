import { Link, useLocation } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../assets/logos/MediSync-1.svg"
import ModalInfo from "../../../components/ModalInfo";
import LogoutPageUser from "../../user/component/LogoutPageUser";
import { useState } from "react";

function AdminSideMenu() {
  const { pathname } = useLocation();
  const { authAdmin, logout } = useAdmin();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex overflow-auto flex-col w-64 min-w-64 justify-between font-light h-full bg-[#e8eae6] rounded-3xl p-8 text-ms-gray">
        
        <div className="flex flex-col gap-3">

        <div className="text-center text-sm">
        <Link to="/">
        <div className="p-2">
          <img className="w-full h-full" src={logo} alt="logo MediSync" />
        </div>
        </Link>

        <div className="mb-4">
          <h1>{`admin: ${authAdmin?.role}`}</h1>
        </div>
        </div>

          {/* RECEPTION */}
          {authAdmin?.role == "RECEPTION" ? (
            <>
              <div>
                <Link to="/admin/appointment">
                  <button
                    className={` font-th ${
                      pathname == "/admin/appointment"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ค้นหาใบนัด
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/admin/createvn">
                  <button
                    className={` font-th ${
                      pathname == "/admin/createvn"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ลงทะเบียน VN
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/admin/createhn">
                  <button
                    className={` font-th ${
                      pathname == "/admin/createhn"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ลงทะเบียนข้อมูลคนไข้ HN
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {/* NURSE */}
          {authAdmin?.role == "NURSE" ? (
            <>
              <div>
                <Link to="/admin/nurse">
                  <button
                    className={` font-th ${
                      pathname == "/admin/nurse"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ตรวจเบื้องต้น
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {/* DOCTOR */}
          {authAdmin?.role == "DOCTOR" ? (
            <>
              <div>
                <Link to="/admin/doctor">
                  <button
                    className={` font-th ${
                      pathname == "/admin/doctor"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ตรวจอาการ
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {/* ACCOUNT */}
          {authAdmin?.role == "ACCOUNT" ? (
            <>
              <div>
                <Link to="/admin/account">
                  <button
                    className={` font-th ${
                      pathname == "/admin/account"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    ค่ารักษา
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {/* MEDICINE */}
          {authAdmin?.role == "ADMIN" ? (
            <>
              <div>
                <Link to="/admin/medicine">
                  <button
                    className={` font-th ${
                      pathname == "/admin/medicine"
                        ? "text-ms-green font-medium hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    จัดการยา
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {authAdmin?.role == "ADMIN" ? (
            <>
              <div>
                <Link to="/admin/dashboard">
                  <button
                    className={` font-th ${
                      pathname == "/admin/dashboard"
                        ? "text-ms-green font-normal hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    Dashboard
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/admin/managedoctor">
                  <button
                    className={` font-th ${
                      pathname == "/admin/managedoctor"
                        ? "text-ms-green font-normal hover:no-underline hover:cursor-default "
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
                    className={` font-th ${
                      pathname == "/admin/manageclinic"
                        ? "text-ms-green font-normal hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    จัดการคลินิก
                  </button>
                </Link>
              </div>
            </>
          ) : null}

          {authAdmin?.role == "ADMIN" ? (
            <>
              <div>
                <Link to="/admin/marketing">
                  <button
                    className={` font-th ${
                      pathname == "/admin/marketing"
                        ? "text-ms-green font-normal hover:no-underline hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    จัดการ Package
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/admin/career">
                  <button
                    className={` font-th ${
                      pathname == "/admin/career"
                        ? "text-ms-green hover:no-underline font-normal hover:cursor-default "
                        : "hover:underline text-ms-gray"
                    }`}
                  >
                    รับสมัครงาน
                  </button>
                </Link>
              </div>
            </>
          ) : null}
        </div>

        <div>
          <button onClick={() => setOpen(true)} className="hover:underline">
            ออกจากระบบ
          </button>
        </div>
      </div>

      <ModalInfo open={open} onClose={() => setOpen(false)} width={40}>
        <LogoutPageUser cancel={() => setOpen(false)} logout={logout} />
      </ModalInfo>
    </>
  );
}

export default AdminSideMenu;
