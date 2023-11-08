import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Alljobs from "../Pages/AllJobs/Alljobs";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyJobs from "../Pages/Myjobs/MyJobs";
import SingleJob from "../Pages/AllJobs/SingleJob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import UpdateJobs from "../Pages/MyJobs/UpdateJobs";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allJobs",
        element: <Alljobs></Alljobs>,
        loader: () => fetch("https://job-hunter-server-nine.vercel.app/api/v1/all/jobs"),
      },
      {
        path: "job/:id",
        element: (
          <PrivateRoutes>
            <SingleJob></SingleJob>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://job-hunter-server-nine.vercel.app/api/v1/all/jobs"),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addJob",
        element: (
          <PrivateRoutes>
            <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "myjob/updateJob/:id",
        element: (
          <PrivateRoutes>
            <UpdateJobs></UpdateJobs>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://job-hunter-server-nine.vercel.app/api/v1/jobs/${params.id}`),
      },
      {
        path: "myJob",
        element: (
          <PrivateRoutes>
            <MyJobs></MyJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "appliedJob",
        element: (
          <PrivateRoutes>
            <AppliedJobs></AppliedJobs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
