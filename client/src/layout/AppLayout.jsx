import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="px-5 py-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
