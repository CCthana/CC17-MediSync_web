import { Link, useLocation } from "react-router-dom";
import ModalInfo from "../../../components/ModalInfo";
import LogoutPageUser from "./LogoutPageUser";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

function SideMenuUser() {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-60 font-normal border-[1px] border-ms-gold min-h-[650px] h-full rounded-[40px] pt-10 pb-20 pl-6 gap-4 text-ms-gray">
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <Link to="/user">
              <button
                className={`${
                  pathname == "/user"
                    ? "text-ms-green hover:no-underline hover:cursor-default "
                    : "hover:underline text-ms-gray"
                }`}
              >
                ประวัติการรักษา
              </button>
            </Link>
          </div>
          <div>
            <Link to="/user/appointment">
              <button
                className={`${
                  pathname == "/user/appointment"
                    ? "text-ms-green hover:no-underline hover:cursor-default "
                    : "hover:underline text-ms-gray"
                }`}
              >
                ตรวจสอบเวลานัดแพทย์
              </button>
            </Link>
          </div>
          <div>
            <Link to="/user/setting">
              <button
                className={`${
                  pathname == "/user/setting"
                    ? "text-ms-green hover:no-underline hover:cursor-default "
                    : "hover:underline text-ms-gray"
                }`}
              >
                บัญชี
              </button>
            </Link>
          </div>
        </div>
        <div className=" items-end font-normal">
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

export default SideMenuUser;
