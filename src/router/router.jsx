import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/page/Home/Home";
import About from "../components/page/About/About";
import Skill from "../components/page/Skill/Skill";
import Service from "../components/page/Service/Service";
import Contract from "../components/page/Contract/Contract";
import Project from "../components/page/Project/Project";

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
      {
        path: "project",
        element: <Project></Project>,
      },
      {
        path: "contract",
        element: <Contract></Contract>,
      },
    ],
  },
]);
export default router;
