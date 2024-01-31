import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
