import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "../layout/MainContainer";
import HomePage from "../pages/home-page/HomePage";
import DepartmentPage from "../pages/DepartmentPage";
import PackagePage from "../pages/PackagePage";
import ContactPage from "../pages/ContactPage";
import DoctorPage from "../pages/DoctorPage";
import AdminPage from "../features/admin/page/AdminPage";
import LoginPage from "../pages/LoginPage";
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";
import UserSetting from "../features/user/page/UserSetting";
import PackagePagee from "../features/package/PackagePage";
import PackageDetail from "../features/package/PackageDetail";

const router = createBrowserRouter([
  {
    path: "/",

    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/department", element: <DepartmentPage /> },
      { path: "/package", element: <PackagePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/doctor", element: <DoctorPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },

  { path: "admin", element: <AdminPage /> },
  { path: "/user", element: <UserAllVn /> },
  { path: "/user/appointment", element: <UserAppointment /> },
  { path: "/user/setting", element: <UserSetting /> },
  { path: "/packagee", element: <PackagePagee /> },
  { path: "/package/detail", element: <PackageDetail /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
