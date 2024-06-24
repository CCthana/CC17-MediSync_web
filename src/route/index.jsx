

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserAllVn from '../features/user/page/UserAllVn';
import UserAppointment from '../features/user/page/UserAppointment';
import UserSetting from '../features/user/page/UserSetting';

const router = createBrowserRouter([

   { 
      path: "/", 
      element: (<h1>Helloooooooooooo</h1>)  
   },
      {path: '/user',element: <UserAllVn />},
      {path: '/user/appointment',element: <UserAppointment />},
      {path: '/user/setting',element: <UserSetting />},
     

]);

export default function Router() {
  return <RouterProvider router={router} />;
}

