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
import Update from "../ComponentAll/Update";







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
            element:<AllToys />,
            // loader:()=> fetch(`https://playful-heaven.vercel.app/userdata`)
            
          },
          {
            path:'/singleDetails/:id',
            element: <Private> <DetailsToys /></Private>,
           loader:({params})=>fetch(`https://playful-heaven.vercel.app/singledata/${params.id}`)
          },
          {
            path:'/update/:id',
            element: <Private> <Update /> </Private>,
            // loader:({params})=>fetch(`https://playful-heaven.vercel.app/update/${params.id}`)
          },

        
            
      ]


    },
  ]);

export default router;