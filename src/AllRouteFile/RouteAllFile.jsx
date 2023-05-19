import { createBrowserRouter } from "react-router-dom";
import Home from "../ComponentAll/Home";
import ErrorHandle from "../ErrorHandleFile/ErrorHandle";
import GroundHome from "../ComponentAll/GroundHome";
import Blogs from "../ComponentAll/Blogs";
import Register from "../ComponentAll/Register";
import Login from "../ComponentAll/Login";







const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />,
      
      errorElement:<ErrorHandle />,
      children:[
          {
            path:'/',
            element:<GroundHome />,
          },
          {
            path:'/blogs',
            element:<Blogs />
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/register',
            element:<Register />
          },

        
            
      ]


    },
  ]);

export default router;