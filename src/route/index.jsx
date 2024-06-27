
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layout/MainContainer';
import HomePage from '../pages/home-page/HomePage';
import DoctorPage from '../pages/doctor/DoctorPage';
import AdminPage from '../features/admin/page/AdminPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRouteAdmin from '../features/authentication/ProtectedRouteAdmin';
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";
import UserSetting from "../features/user/page/UserSetting";
import VnCreateAdmin from '../features/admin/page/VnCreateAdmin';
import VnConfirmAdmin from '../features/admin/page/VnConfirmAdmin';
import AdminNursePage from '../features/admin/page/AdminNursePage';
import AdminDoctorPage from '../features/admin/page/AdminDoctorPage';
import AdminAccountPage from '../features/admin/page/AdminAccountPage';
import AdminAppointment from '../features/admin/page/AdminAppointment';
import AdminLanding from '../features/admin/page/AdminLanding';
import PackagePagee from '../features/package/PackagePage';
import ClinicPage from '../features/clinic/ClinicPage';
import ContactContainer from '../pages/contact/ContactContainer';

// import { lazy } from 'react';

const router = createBrowserRouter([
   { 
      path: "/", 
      element: (<MainContainer />),
      children: [
         { path: '/', element: (<HomePage />)},
         { path: '/department', element: (<ClinicPage />)},
         { path: '/package', element: (<PackagePagee />)},
         { path: '/contact', element: (<ContactContainer />)},
         { path: '/doctor', element: (<DoctorPage />)},
         { path: '/login', element: (<LoginPage />)}
      ]
   },
   {
      path:'admin',
      element: (
         <ProtectedRouteAdmin>
            <AdminPage />
         </ProtectedRouteAdmin>
      )
   },
  { path: "/user", element: <UserAllVn /> },
  { path: "/user/appointment", element: <UserAppointment /> },
  { path: "/user/setting", element: <UserSetting /> },
  {path: '/admin',element: <AdminLanding />},
  {path: '/admin/createvn',element: <VnCreateAdmin />},
  {path: '/admin/vnconfirm',element: <VnConfirmAdmin />},
  {path: '/admin/nurse',element: <AdminNursePage />},
  {path: '/admin/doctor',element: <AdminDoctorPage />},
  {path: '/admin/account',element: <AdminAccountPage />},
  {path: '/admin/appointment',element: <AdminAppointment />},
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
