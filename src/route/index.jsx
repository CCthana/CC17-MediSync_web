import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "../layout/MainContainer";
import HomePage from "../pages/home-page/HomePage";
import DoctorPage from "../pages/doctor/DoctorPage";
import ProtectedRouteAdmin from "../features/authentication/ProtectedRouteAdmin";
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";
import UserSetting from "../features/user/page/UserSetting";
import VnCreateAdmin from "../features/admin/page/VnCreateAdmin";
import AdminNursePage from "../features/admin/page/AdminNursePage";
import AdminDoctorPage from "../features/admin/page/AdminDoctorPage";
import AdminAccountPage from "../features/admin/page/AdminAccountPage";
import AdminAppointment from "../features/admin/page/AdminAppointment";
import AdminLanding from "../features/admin/page/AdminLanding";
import PackagePagee from "../features/package/PackagePage";
import ClinicPage from "../features/clinic/ClinicPage";
import ContactContainer from "../pages/contact/ContactContainer";
import AdminCreateHn from "../features/admin/page/AdminCreateHn";
import LoginPage from "../pages/login-page/LoginPage";

// import { lazy } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/department", element: <ClinicPage /> },
      { path: "/package", element: <PackagePagee /> },
      { path: "/contact", element: <ContactContainer /> },
      { path: "/doctor", element: <DoctorPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <Outlet />
      </ProtectedRouteAdmin>
    ),
    children: [
      { path: "", element: <AdminLanding /> },
      { path: "createvn", element: <VnCreateAdmin /> },
      { path: "createhn", element: <AdminCreateHn /> },
      { path: "nurse", element: <AdminNursePage /> },
      { path: "doctor", element: <AdminDoctorPage /> },
      { path: "account", element: <AdminAccountPage /> },
      { path: "appointment", element: <AdminAppointment /> },
    ],
  },
  {
    path: "/user",
    element: <MainContainer />,
    children: [
      { path: "", element: <UserAllVn /> },
      { path: "appointment", element: <UserAppointment /> },
      { path: "setting", element: <UserSetting /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
