
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layout/MainContainer';
import HomePage from '../pages/home-page/HomePage';
import DepartmentPage from '../pages/DepartmentPage';
import PackagePage from '../pages/PackagePage';
import DoctorPage from '../pages/doctor/DoctorPage';
import AdminPage from '../features/admin/page/AdminPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRouteAdmin from '../features/authentication/ProtectedRouteAdmin';
import ContactPage from '../pages/contact/ContactPage';
import CareerPage from '../pages/contact/CareerPage';
import InformationPage from '../pages/contact/InformationPages';
// import { lazy } from 'react';

const router = createBrowserRouter([
   { 
      path: "/", 
      element: (<MainContainer />),
      children: [
         { path: '/', element: (<HomePage />)},
         { path: '/department', element: (<DepartmentPage />)},
         { path: '/package', element: (<PackagePage />)},
         { path: '/contact', element: (<ContactPage />)},
         { path: '/career', element: (<CareerPage />)},
         { path: '/information', element: (<InformationPage />)},
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
