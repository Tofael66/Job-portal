



import { createBrowserRouter } from "react-router-dom";
import Homes from "../Pages/Home/Homes";
import MainLayout from "../Layouts/MainLayout";
import Registers from "../Pages/Register/Registers";
import SignIn from "../Pages/Sign/SignIn";
import JobsDetails from "../Pages/Home/JobsDetails";
import PrivateRout from "./PrivateRout";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJobs from "../Pages/AddJobs/AddJobs";




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
        } ,
        {
          path: "/jobApply/:id" ,
          element:<PrivateRout><JobApply></JobApply></PrivateRout>
        } ,
        {
          path: "/myApplication" ,
          element:<PrivateRout><MyApplication></MyApplication></PrivateRout>
        } ,
        {
          path: "/addjobs" ,
          element:<PrivateRout><AddJobs></AddJobs></PrivateRout>
        } ,

        {
          path: "/jobs/:id" ,
          element:<PrivateRout><JobsDetails></JobsDetails> </PrivateRout>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },

  ]);

  export default router ;