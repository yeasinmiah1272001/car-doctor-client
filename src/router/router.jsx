import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
     
      {
        path:'/',
        element: <Home></Home>,
       
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/up',
        element:<SignUp></SignUp>
      },
      {
        path:"/checkout/:id",
        element:<CheckOut></CheckOut>
      }
     
    ],
  },
]);
export default router;