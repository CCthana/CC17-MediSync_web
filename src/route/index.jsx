

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserAllVn from '../features/user/page/UserAllVn';
import UserAppointment from '../features/user/page/UserAppointment';
import UserSetting from '../features/user/page/UserSetting';
import VnCreateAdmin from '../features/admin/page/VnCreateAdmin';
import VnConfirmAdmin from '../features/admin/page/VnConfirmAdmin';
import AdminNursePage from '../features/admin/page/AdminNursePage';
import AdminDoctorPage from '../features/admin/page/AdminDoctorPage';
import AdminAccountPage from '../features/admin/page/AdminAccountPage';
import AdminAppointment from '../features/admin/page/AdminAppointment';
import AdminSearchHn from '../features/admin/component/AdminSearchHn';
import AdminLanding from '../features/admin/page/AdminLanding';

const router = createBrowserRouter([

   { 
      path: "/", 
      element: (<h1>Helloooooooooooo</h1>)  
   },
      {path: '/user',element: <UserAllVn />},
      {path: '/user/appointment',element: <UserAppointment />},
      {path: '/user/setting',element: <UserSetting />},
      {path: '/admin/createvn',element: <VnCreateAdmin />},
      {path: '/admin/vnconfirm',element: <VnConfirmAdmin />},
      {path: '/admin/nurse',element: <AdminNursePage />},
      {path: '/admin/doctor',element: <AdminDoctorPage />},
      {path: '/admin/account',element: <AdminAccountPage />},
      {path: '/admin',element: <AdminLanding />},

      // for modal in createvn
      {path: '/admin/appoint',element: <AdminAppointment />},
      



]);

export default function Router() {
  return <RouterProvider router={router} />;
}

