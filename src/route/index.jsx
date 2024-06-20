import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { lazy } from 'react';


// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const MainContainer = lazy(() => import('../layout/MainContainer'));


const router = createBrowserRouter([
   { 
      path: "/", 
      element: (<h1>Helloooooooooooo</h1>)  },

]);

export default function Router() {
   return <RouterProvider router={router} />;
}