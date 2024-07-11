import { Outlet } from "react-router-dom";
import AdminSideMenu from "./component/AdminSideMenu";

export default function MainContainerAdmin() {
  return (
    <div className="p-8 flex max-h-[100vh] h-[100vh] space-x-4">
      <AdminSideMenu />
      <div className="w-full h-full p-8 border rounded-3xl border-ms-gold overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
