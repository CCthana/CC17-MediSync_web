import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import AdminPackage from "../features/admin/page/Package/AdminPackage";

import MangeClinicPage from "../features/admin/page/admin-admin/clinic/MangeClinicPage";
import ManageDoctorPage from "../features/admin/page/admin-admin/doctor/ManageDoctorPage";
import DashboardPage from "../features/admin/page/admin-admin/dashboard/DashboardPage";
import ScrollToTop from "../utils/ScrollToTop";
import AdminContextProvider from "../contexts/AdminContext";
import AdminCareerPage from "../features/hr/AdminCareerPage";
import HrContextProvider from "../contexts/HrContext";
import MainContainerAdmin from "../features/admin/MainContainerAdmin";
import VnContextProvider from "../contexts/VnContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/department", element: <ClinicPage /> },
      { path: "/package", element: <PackagePagee /> },
      {
        path: "/contact",
        element: (
          <HrContextProvider>
            <ContactContainer />
          </HrContextProvider>
        ),
      },
      { path: "/doctor", element: <DoctorPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      // <AdminContextProvider>
         <HrContextProvider>
         <VnContextProvider>
        <ProtectedRouteAdmin>
          <ScrollToTop />
            <MainContainerAdmin />
        </ProtectedRouteAdmin>
        </VnContextProvider>
        </HrContextProvider>
      // </AdminContextProvider>
      
    ),
    children: [
      { path: "", element: <AdminLanding /> },
      { path: "createvn", element: <VnCreateAdmin /> },
      { path: "createhn", element: <AdminCreateHn /> },
      { path: "nurse", element: <AdminNursePage /> },
      { path: "doctor", element: <AdminDoctorPage /> },
      { path: "account", element: <AdminAccountPage /> },
      { path: "appointment", element: <AdminAppointment /> },
      { path: "marketing", element: <AdminPackage /> },
      { path: "career", element: <AdminCareerPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "managedoctor", element: <ManageDoctorPage /> },
      { path: "manageclinic", element: <MangeClinicPage /> },
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
