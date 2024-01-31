import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto p-0 m-0 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
