import { createBrowserRouter } from "react-router-dom";
import Home from "../ComponentAll/Home";
import ErrorHandle from "../ErrorHandleFile/ErrorHandle";
import GroundHome from "../ComponentAll/GroundHome";
import Blogs from "../ComponentAll/Blogs";







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

        
            
      ]


    },
  ]);

export default router;