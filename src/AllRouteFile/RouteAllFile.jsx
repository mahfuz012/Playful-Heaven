import { createBrowserRouter } from "react-router-dom";
import Home from "../ComponentAll/Home";
import ErrorHandle from "../ErrorHandleFile/ErrorHandle";
import GroundHome from "../ComponentAll/GroundHome";
import Blogs from "../ComponentAll/Blogs";
import Register from "../ComponentAll/Register";
import Login from "../ComponentAll/Login";
import Mytoys from "../ComponentAll/Mytoys";
import Addtoys from "../ComponentAll/Addtoys";
import AllToys from "../ComponentAll/AllToys";
import DetailsToys from "../ComponentAll/DetailsToys";
import Private from "../PrivateRouteFile/Private";







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
          {
            path:'/mytoys',
            element:<Private> <Mytoys /> </Private>
          },
          {
            path:'/addtoys',
            element:<Private>  <Addtoys /></Private>
          },
          {
            path:'/alltoys',
            element:<AllToys />
          },
          {
            path:'/singleDetails',
            element: <Private> <DetailsToys /></Private>
          },

        
            
      ]


    },
  ]);

export default router;