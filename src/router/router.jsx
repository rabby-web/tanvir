import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/page/Home/Home";
import About from "../components/page/About/About";
import Skill from "../components/page/Skill/Skill";
import Service from "../components/page/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skill",
        element: <Skill></Skill>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
    ],
  },
]);
export default router;
