
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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
