import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
import AdminCareerPage from "../features/hr/AdminCareerPage";
import HrContextProvider from "../contexts/HrContext";
import MainContainerAdmin from "../features/admin/MainContainerAdmin";
import VnContextProvider from "../contexts/VnContext";
import AdminMedicinePage from "../features/admin/page/AdminMedicinePage";
import Register from "../pages/home-page/component/Register";

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
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <HrContextProvider>
        <VnContextProvider>
          <ProtectedRouteAdmin>
            <ScrollToTop />
            <MainContainerAdmin />
          </ProtectedRouteAdmin>
        </VnContextProvider>
      </HrContextProvider>
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
      { path: "medicine", element: <AdminMedicinePage /> },
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
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
