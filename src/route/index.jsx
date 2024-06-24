import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layout/MainContainer';
import HomePage from '../pages/home-page/HomePage';
import DepartmentPage from '../pages/DepartmentPage';
import PackagePage from '../pages/PackagePage';
import ContactPage from '../pages/ContactPage';
import DoctorPage from '../pages/DoctorPage';
import AdminPage from '../features/admin/page/AdminPage';
import LoginPage from '../pages/LoginPage';
// import { lazy } from 'react';


// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const MainContainer = lazy(() => import('../layout/MainContainer'));


const router = createBrowserRouter([
   { 
      path: "/", 
      element: (<MainContainer />),
      children: [
         { path: '/', element: (<HomePage />)},
         { path: '/department', element: (<DepartmentPage />)},
         { path: '/package', element: (<PackagePage />)},
         { path: '/contact', element: (<ContactPage />)},
         { path: '/doctor', element: (<DoctorPage />)},
         { path: '/login', element: (<LoginPage />)}
      ]
   },
   {
      path:'admin',
      element: (
         <AdminPage />
      )
   }

]);

export default function Router() {
   return <RouterProvider router={router} />;
}