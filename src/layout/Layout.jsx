import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto  ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
