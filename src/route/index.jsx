import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";
import Slide from "../components/Slide";
// import { lazy } from 'react';

// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const MainContainer = lazy(() => import('../layout/MainContainer'));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <h1>helloooooo</h1>
    ),
  },
  { path: "/user", element: <UserAllVn /> },
  { path: "/user/appoint", element: <UserAppointment /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
