import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserAllVn from "../features/user/page/UserAllVn";
import UserAppointment from "../features/user/page/UserAppointment";
import Slide from "../components/Slide";
// import { lazy } from 'react';

// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const MainContainer = lazy(() => import('../layout/MainContainer'));

const mockData = [
  {
    imgSrc: "https://picsum.photos/1920/540?random=1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    link: {
      linkSrc: "/hospital/1",
      button: "line: โรงพยาบาล 1",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    link: {
      linkSrc: "/hospital/2",
      button: "line: โรงพยาบาล 2",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
    link: {
      linkSrc: "/hospital/3",
      button: "line: โรงพยาบาล 3",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
    link: {
      linkSrc: "/hospital/4",
      button: "line: โรงพยาบาล 4",
    },
  },
  {
    imgSrc: "https://picsum.photos/1920/540?random=5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
    link: {
      linkSrc: "/hospital/5",
      button: "line: โรงพยาบาล 5",
    },
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Slide slides={mockData} width="full" height="96" fit="object-contain" />
    ),
  },
  { path: "/user", element: <UserAllVn /> },
  { path: "/user/appoint", element: <UserAppointment /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
