import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";



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
