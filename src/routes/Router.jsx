import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from './../pages/Home';
import ErrorPage from '../pages/ErrorPage'
import Login from "../pages/authentication/Login";
import Register from './../pages/authentication/Register';
import AllFood from "../components/AllFood";
import FoodDetails from "../components/FoodDetails";
import AddFood from "../pages/AddFood";
import MyAddedFood from "../pages/MyAddedFood";
import MyOrderedFood from './../pages/MyOrderedFood';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch (`${import.meta.env.VITE_API_URL}/top-selling-foods`)
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/allFood',
          element: <AllFood></AllFood>,
        },
        {
          path: '/addFood',
          element: <AddFood></AddFood>,
        },
        {
          path: '/myFood',
          element: <MyAddedFood></MyAddedFood>,
        },
        {
          path: '/myOrderFood',
          element: <MyOrderedFood></MyOrderedFood>,
        },
        {
          path: '/details/:id',
          element: <FoodDetails />,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/food-details/${params.id}`)
        },

        
      ]
    },
  ]);

  export default router;