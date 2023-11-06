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
        loader: () => fetch("http://localhost:5000/api/v1/all/jobs"),
      },
      {
        path: "allJobs/:id",
        element: <SingleJob></SingleJob>,
        loader: () => fetch("http://localhost:5000/api/v1/all/jobs"),
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
        element: <AddJobs></AddJobs>,
      },
      {
        path: "myJob",
        element: <MyJobs></MyJobs>,
      },
    ],
  },
]);

export default Routes;
