import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Signup from "./Authintication/Signup";
import Login from "./Authintication/Login";
import AllProperty from "./Components/AllProperty/AllProperty";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<Signup></Signup>,
        },
        {
            path:'/allproperty',
            element:<AllProperty></AllProperty>,
        },
      ]
    },
  ]);