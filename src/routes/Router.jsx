import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from './../pages/Home';
import ErrorPage from '../pages/ErrorPage'
import Login from "../pages/authentication/Login";
import Register from './../pages/authentication/Register';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;