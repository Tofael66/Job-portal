



import { createBrowserRouter } from "react-router-dom";
import Homes from "../Pages/Home/Homes";
import MainLayout from "../Layouts/MainLayout";
import Registers from "../Pages/Register/Registers";
import SignIn from "../Pages/Sign/SignIn";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div > Pages not found</div> ,
      children:[
        {
          path:"/" ,
          element:<Homes></Homes>
        } , 
        {
          path: "/register" ,
          element: <Registers></Registers>
        } ,
        {
          path: "/signIn" ,
          element:<SignIn></SignIn>
        }
      ]
    },

  ]);

  export default router ;